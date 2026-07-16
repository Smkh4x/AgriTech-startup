'use strict';
const db = require('../models');

// 1. Tool schemas for Gemini Function Calling
const declarations = [
  {
    name: 'obtenir_prix_marches',
    description: 'Obtenir les prix récents d\'un produit dans les différents marchés de gros (souks).',
    parameters: {
      type: 'OBJECT',
      properties: {
        nomProduit: {
          type: 'STRING',
          description: 'Le nom du produit agricole (ex: Tomates, Pommes de terre, Oignons)'
        },
        limite: {
          type: 'INTEGER',
          description: 'Le nombre maximum de relevés de prix à récupérer (défaut: 5)'
        }
      },
      required: ['nomProduit']
    }
  },
  {
    name: 'obtenir_parcelles_agriculteur',
    description: 'Lister toutes les parcelles de terre appartenant à l\'agriculteur connecté.',
    parameters: {
      type: 'OBJECT',
      properties: {}
    }
  },
  {
    name: 'obtenir_recoltes_agriculteur',
    description: 'Lister les récoltes enregistrées par l\'agriculteur connecté.',
    parameters: {
      type: 'OBJECT',
      properties: {
        statut: {
          type: 'STRING',
          description: 'Filtrer par statut de la récolte (disponible, vendue, terminee)'
        }
      }
    }
  },
  {
    name: 'creer_recolte',
    description: 'Enregistrer une nouvelle récolte sur une parcelle spécifique (écriture - nécessite une confirmation de l\'utilisateur).',
    parameters: {
      type: 'OBJECT',
      properties: {
        parcelleId: {
          type: 'INTEGER',
          description: 'L\'ID de la parcelle où a lieu la récolte'
        },
        nomProduit: {
          type: 'STRING',
          description: 'Le nom du produit récolté (ex: Tomates)'
        },
        quantite: {
          type: 'NUMBER',
          description: 'La quantité récoltée en kilogrammes (kg)'
        },
        dateRecolte: {
          type: 'STRING',
          description: 'La date de la récolte au format YYYY-MM-DD'
        }
      },
      required: ['parcelleId', 'nomProduit', 'quantite', 'dateRecolte']
    }
  },
  {
    name: 'creer_offre_vente',
    description: 'Créer une offre de vente pour une récolte existante (écriture - nécessite une confirmation de l\'utilisateur).',
    parameters: {
      type: 'OBJECT',
      properties: {
        recolteId: {
          type: 'INTEGER',
          description: 'L\'ID de la récolte mise en vente'
        },
        quantiteProposee: {
          type: 'NUMBER',
          description: 'La quantité proposée à la vente en kg'
        },
        prixDemande: {
          type: 'NUMBER',
          description: 'Le prix unitaire demandé en DH/kg'
        }
      },
      required: ['recolteId', 'quantiteProposee', 'prixDemande']
    }
  },
  {
    name: 'obtenir_meilleur_prix_produit',
    description: 'Trouver le marché (souk) proposant le meilleur prix (le plus élevé) pour un produit donné.',
    parameters: {
      type: 'OBJECT',
      properties: {
        nomProduit: {
          type: 'STRING',
          description: 'Le nom du produit (ex: Tomates)'
        }
      },
      required: ['nomProduit']
    }
  }
];

// 2. Local tool execution handlers (encapsulating RBAC / userContext checks)
const handlers = {
  obtenir_prix_marches: async ({ nomProduit, limite = 5 }) => {
    try {
      const produit = await db.Produit.findOne({ where: { nom: nomProduit } });
      if (!produit) {
        return { error: `Produit "${nomProduit}" introuvable.` };
      }

      const rawPrices = await db.PrixMarche.findAll({
        where: { produitId: produit.id },
        include: [{ model: db.Marche, as: 'marche' }],
        order: [['dateReleve', 'DESC']],
        limit: parseInt(limite)
      });

      return rawPrices.map(p => ({
        marche: p.marche ? p.marche.nom : 'Inconnu',
        ville: p.marche ? p.marche.ville : 'Inconnue',
        prixMoyen: `${p.prixMoyen} DH/kg`,
        dateReleve: p.dateReleve
      }));
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la récupération des prix.' };
    }
  },

  obtenir_parcelles_agriculteur: async (_, userContext) => {
    try {
      if (!userContext || !userContext.agriculteurId) {
        return { error: 'Profil agriculteur non connecté ou inexistant.' };
      }

      const parcelles = await db.Parcelle.findAll({
        where: { agriculteurId: userContext.agriculteurId }
      });

      return parcelles.map(p => ({
        id: p.id,
        nom: p.nom,
        surface: `${p.surface} ha`,
        cultureActuelle: p.cultureActuelle || 'Aucune'
      }));
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la récupération des parcelles.' };
    }
  },

  obtenir_recoltes_agriculteur: async ({ statut }, userContext) => {
    try {
      if (!userContext || !userContext.agriculteurId) {
        return { error: 'Profil agriculteur non connecté.' };
      }

      const whereClause = {};
      if (statut) {
        whereClause.statut = statut;
      }

      const recoltes = await db.Recolte.findAll({
        include: [
          {
            model: db.Parcelle,
            as: 'parcelle',
            where: { agriculteurId: userContext.agriculteurId }
          },
          {
            model: db.Produit,
            as: 'produit'
          }
        ],
        where: whereClause
      });

      return recoltes.map(r => ({
        id: r.id,
        parcelle: r.parcelle.nom,
        produit: r.produit.nom,
        quantite: `${r.quantite} kg`,
        dateRecolte: r.dateRecolte,
        statut: r.statut
      }));
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la récupération des récoltes.' };
    }
  },

  creer_recolte: async ({ parcelleId, nomProduit, quantite, dateRecolte }, userContext) => {
    try {
      if (!userContext || !userContext.agriculteurId) {
        return { error: 'Profil agriculteur non connecté.' };
      }

      // Verify parcel ownership
      const parcelle = await db.Parcelle.findOne({
        where: { id: parcelleId, agriculteurId: userContext.agriculteurId }
      });
      if (!parcelle) {
        return { error: `La parcelle ID ${parcelleId} n'existe pas ou ne vous appartient pas.` };
      }

      // Verify product existence
      const produit = await db.Produit.findOne({ where: { nom: nomProduit } });
      if (!produit) {
        return { error: `Le produit "${nomProduit}" n'existe pas.` };
      }

      const nouvelleRecolte = await db.Recolte.create({
        parcelleId,
        produitId: produit.id,
        quantite,
        dateRecolte,
        statut: 'disponible'
      });

      // Update current culture on parcel
      await parcelle.update({ cultureActuelle: nomProduit });

      return {
        success: true,
        message: 'Récolte enregistrée avec succès.',
        recolteId: nouvelleRecolte.id,
        parcelle: parcelle.nom,
        produit: nomProduit,
        quantite: `${quantite} kg`
      };
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la création de la récolte.' };
    }
  },

  creer_offre_vente: async ({ recolteId, quantiteProposee, prixDemande }, userContext) => {
    try {
      if (!userContext || !userContext.agriculteurId) {
        return { error: 'Profil agriculteur non connecté.' };
      }

      // Verify harvest ownership
      const recolte = await db.Recolte.findOne({
        where: { id: recolteId },
        include: [
          {
            model: db.Parcelle,
            as: 'parcelle',
            where: { agriculteurId: userContext.agriculteurId }
          },
          {
            model: db.Produit,
            as: 'produit'
          }
        ]
      });

      if (!recolte) {
        return { error: `La récolte ID ${recolteId} n'existe pas ou ne vous appartient pas.` };
      }

      if (parseFloat(quantiteProposee) > parseFloat(recolte.quantite)) {
        return { error: `Quantité proposée (${quantiteProposee} kg) supérieure à la quantité récoltée (${recolte.quantite} kg).` };
      }

      const nouvelleOffre = await db.Offre.create({
        recolteId,
        quantiteProposee,
        prixDemande,
        dateOffre: new Date().toISOString().split('T')[0],
        statut: 'active'
      });

      return {
        success: true,
        message: 'Offre de vente publiée avec succès.',
        offreId: nouvelleOffre.id,
        produit: recolte.produit.nom,
        quantite: `${quantiteProposee} kg`,
        prixUnitaire: `${prixDemande} DH/kg`
      };
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la création de l\'offre de vente.' };
    }
  },

  obtenir_meilleur_prix_produit: async ({ nomProduit }) => {
    try {
      const produit = await db.Produit.findOne({ where: { nom: nomProduit } });
      if (!produit) {
        return { error: `Produit "${nomProduit}" introuvable.` };
      }

      const meilleurPrix = await db.PrixMarche.findOne({
        where: { produitId: produit.id },
        include: [{ model: db.Marche, as: 'marche' }],
        order: [['prixMoyen', 'DESC'], ['dateReleve', 'DESC']]
      });

      if (!meilleurPrix) {
        return { error: `Aucun prix enregistré pour le produit "${nomProduit}".` };
      }

      return {
        produit: nomProduit,
        meilleurPrix: `${meilleurPrix.prixMoyen} DH/kg`,
        marche: meilleurPrix.marche ? meilleurPrix.marche.nom : 'Inconnu',
        ville: meilleurPrix.marche ? meilleurPrix.marche.ville : 'Inconnue',
        dateReleve: meilleurPrix.dateReleve
      };
    } catch (err) {
      console.error(err);
      return { error: 'Erreur lors de la recherche du meilleur prix.' };
    }
  }
};

module.exports = {
  declarations,
  handlers
};
