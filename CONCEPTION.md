# Conception — Justification du Modèle

Ce document présente la justification des choix de modélisation retenus pour la base de données de FellahConnect.

---

## 1. Pourquoi `PrixMarche` est-elle une entité séparée et non un simple champ dans `Produit` ?

Dans le secteur agricole marocain, le prix d'un même produit (ex. les tomates) varie fortement en fonction de plusieurs dimensions indépendantes :
- **La dimension géographique** : Le prix pratiqué dans le souk ou marché de gros d'Agadir diffère de celui du marché de gros de Casablanca (ex. 2 DH/kg contre 6 DH/kg).
- **La dimension temporelle** : Les prix fluctuent quotidiennement en fonction de l'offre, de la demande et de la saisonnalité.

Si le prix était un simple champ dans la table `Produit`, nous ne pourrions stocker qu'une seule valeur globale et statique à un instant T. L'entité séparée `PrixMarche` permet de stocker un historique complet des relevés de prix par **marché** et par **produit** à une **date donnée**, permettant à l'agent IA de comparer les prix et de repérer les tendances de manière dynamique.

---

## 2. Pourquoi `Recolte` référence-t-elle à la fois `Parcelle` et `Produit` ?

Une récolte (`Recolte`) est l'événement physique qui lie la production au sol :
- Une **Parcelle** peut faire l'objet de rotations de cultures (ex. tomates à une saison, pommes de terre à la suivante). Une parcelle ne produit donc pas un seul produit à vie.
- Un **Produit** peut être cultivé et récolté sur plusieurs parcelles différentes, que ce soit chez le même agriculteur ou chez des agriculteurs différents.

En référençant à la fois `Parcelle` et `Produit`, `Recolte` fait office de table de liaison événementielle. Elle permet d'enregistrer précisément **quelle quantité** de **quel produit** a été récoltée sur **quelle parcelle** à une **date précise**, garantissant la traçabilité complète de la production d'un agriculteur.

---

## 3. Quelle relation devient many-to-many et comment l'avez-vous matérialisée ?

Plusieurs relations many-to-many (N:M) apparaissent dans notre modélisation :
- **Produit $\leftrightarrow$ Marche** : Un produit est vendu sur plusieurs marchés, et un marché propose plusieurs produits. Cette relation est matérialisée par la table de jonction **`PrixMarche`** qui contient les clés étrangères `produitId` et `marcheId`, complétée par des attributs propres à cette liaison (`prixMoyen`, `dateReleve`).
- **Parcelle $\leftrightarrow$ Produit** : Une parcelle peut porter différents produits au fil du temps, et un produit est cultivé sur plusieurs parcelles. Cette relation est matérialisée par la table de jonction **`Recolte`** qui associe `parcelleId` et `produitId` avec des attributs additionnels (`quantite`, `dateRecolte`, `statut`).

---

## 4. Quelles données seront fréquemment lues ? (Guidage des index)

Pour assurer de hautes performances lors des requêtes de l'API et des recherches de l'agent IA, nous poserons des index sur les colonnes fréquemment lues et filtrées :

1. **`PrixMarche`** : 
   - Recherche fréquente du meilleur prix pour un produit : Index sur `(produitId, prixMoyen DESC, dateReleve DESC)`.
   - Recherche historique / tendances d'un produit : Index composite sur `(produitId, dateReleve)`.
2. **`Recolte`** :
   - Liste des récoltes d'un agriculteur (via ses parcelles) : Index sur `parcelleId` et `produitId`.
3. **`Parcelle`** :
   - Récupération des parcelles d'un agriculteur : Index sur `agriculteurId`.
4. **`User`** :
   - Authentification et connexion par email : Index unique existant sur `email`.
5. **`Offre`** :
   - Filtrage des offres actives ou par récolte : Index sur `(recolteId, statut)`.
