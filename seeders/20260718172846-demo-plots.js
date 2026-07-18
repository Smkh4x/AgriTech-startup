export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("plots", [
      {
        name: "Parcelle Atlas",
        area: 2.5,
        commune: "Béni Mellal",
        farmerId: 22,
 
      },
      {
        name: "Parcelle Olivier",
        area: 1.8,
        commune: "Kasba Tadla",
        farmerId: 23,
 
      },
      {
        name: "Parcelle Souss",
        area: 3.2,
        commune: "Inezgane",
        farmerId: 24,
 
      },
      {
        name: "Parcelle Massa",
        area: 2.1,
        commune: "Aït Melloul",
        farmerId: 25,
 
      },
      {
        name: "Parcelle Gharb",
        area: 4.5,
        commune: "Kénitra",
        farmerId: 26,
 
      },
      {
        name: "Parcelle Loukkos",
        area: 2.9,
        commune: "Larache",
        farmerId: null,
 
      },
      {
        name: "Parcelle Chaouia",
        area: 3.6,
        commune: "Settat",
        farmerId: null,
 
      },
      {
        name: "Parcelle Berrechid",
        area: 2.4,
        commune: "Berrechid",
        farmerId: null,
 
      },
      {
        name: "Parcelle Haouz",
        area: 5.1,
        commune: "Marrakech",
        farmerId: null,
 
      },
      {
        name: "Parcelle Tahanaout",
        area: 2.7,
        commune: "Tahanaout",
        farmerId: null,
 
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plots", null, {});
  }
};