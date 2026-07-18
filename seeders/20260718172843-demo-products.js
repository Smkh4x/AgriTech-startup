
export default  {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("products", [
      {
        name: "Tomate",
        category: "Vegetable",
        unit: "kg",

      },
      {
        name: "Potato",
        category: "Vegetable",
        unit: "kg",

      },
      {
        name: "Onion",
        category: "Vegetable",
        unit: "kg",

      },
      {
        name: "Carrot",
        category: "Vegetable",
        unit: "kg",

      },
      {
        name: "Zucchini",
        category: "Vegetable",
        unit: "kg",

      },
      {
        name: "Orange",
        category: "Fruit",
        unit: "kg",

      },
      {
        name: "Olive",
        category: "Fruit",
        unit: "kg",

      },
      {
        name: "Strawberry",
        category: "Fruit",
        unit: "kg",

      },
      {
        name: "Mint",
        category: "Herb",
        unit: "bundle",

      },
      {
        name: "Wheat",
        category: "Cereal",
        unit: "kg",

      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  }
};