
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("products", [
      {
        name: "Tomate",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Potato",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Onion",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Carrot",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zucchini",
        category: "Vegetable",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Orange",
        category: "Fruit",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Olive",
        category: "Fruit",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Strawberry",
        category: "Fruit",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mint",
        category: "Herb",
        unit: "bundle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wheat",
        category: "Cereal",
        unit: "kg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  }
};