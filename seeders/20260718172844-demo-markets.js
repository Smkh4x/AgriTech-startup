module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("markets", [
      {
        name: "Marché de Gros de Casablanca",
        city: "Casablanca",
        region: "Casablanca-Settat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marché de Gros d'Inezgane",
        city: "Agadir",
        region: "Souss-Massa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marché de Gros de Béni Mellal",
        city: "Béni Mellal",
        region: "Béni Mellal-Khénifra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marché de Gros de Meknès",
        city: "Meknès",
        region: "Fès-Meknès",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marché de Gros de Fès",
        city: "Fès",
        region: "Fès-Meknès",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Souk El Had",
        city: "Agadir",
        region: "Souss-Massa",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("markets", null, {});
  }
};