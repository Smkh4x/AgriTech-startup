export default  {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("markets", [
      {
        name: "Marché de Gros de Casablanca",
        city: "Casablanca",
        region: "Casablanca-Settat",
 
      },
      {
        name: "Marché de Gros d'Inezgane",
        city: "Agadir",
        region: "Souss-Massa",
 
      },
      {
        name: "Marché de Gros de Béni Mellal",
        city: "Béni Mellal",
        region: "Béni Mellal-Khénifra",
 
      },
      {
        name: "Marché de Gros de Meknès",
        city: "Meknès",
        region: "Fès-Meknès",
 
      },
      {
        name: "Marché de Gros de Fès",
        city: "Fès",
        region: "Fès-Meknès",
 
      },
      {
        name: "Souk El Had",
        city: "Agadir",
        region: "Souss-Massa",
 
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("markets", null, {});
  }
};