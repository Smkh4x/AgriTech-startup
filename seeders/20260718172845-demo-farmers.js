export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("farmers", [
      {
        firstName: "Ahmed",
        lastName: "El Amrani",
        phone: "0611111111",
        region: "Beni Mellal-Khenifra",
        userId: 46,
 
      },
      {
        firstName: "Fatima",
        lastName: "Bennani",
        phone: "0622222222",
        region: "Souss-Massa",
        userId: 47,
 
      },
      {
        firstName: "Hassan",
        lastName: "Ait Ali",
        phone: "0633333333",
        region: "Gharb",
        userId: 48,
 
      },
      {
        firstName: "Mohamed",
        lastName: "Idrissi",
        phone: "0644444444",
        region: "Chaouia",
        userId: null,
 
      },
      {
        firstName: "Rachid",
        lastName: "Ouali",
        phone: "0655555555",
        region: "Haouz",
        userId: null,
 
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("farmers", null, {});
  }
};