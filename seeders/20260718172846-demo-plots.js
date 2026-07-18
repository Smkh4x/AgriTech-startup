module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("plots", [
      {
        name: "Parcelle Atlas",
        area: 2.5,
        commune: "Béni Mellal",
        farmerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Olivier",
        area: 1.8,
        commune: "Kasba Tadla",
        farmerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Souss",
        area: 3.2,
        commune: "Inezgane",
        farmerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Massa",
        area: 2.1,
        commune: "Aït Melloul",
        farmerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Gharb",
        area: 4.5,
        commune: "Kénitra",
        farmerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Loukkos",
        area: 2.9,
        commune: "Larache",
        farmerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Chaouia",
        area: 3.6,
        commune: "Settat",
        farmerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Berrechid",
        area: 2.4,
        commune: "Berrechid",
        farmerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Haouz",
        area: 5.1,
        commune: "Marrakech",
        farmerId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcelle Tahanaout",
        area: 2.7,
        commune: "Tahanaout",
        farmerId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plots", null, {});
  }
};