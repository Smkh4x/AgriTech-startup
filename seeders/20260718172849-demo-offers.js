module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("offers", [

      {
        quantity: 300,
        requestedPrice: 6.20,
        status: "pending",
        harvestId: 1,
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 450,
        requestedPrice: 4.10,
        status: "sold",
        harvestId: 2,
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 220,
        requestedPrice: 4.90,
        status: "accepted",
        harvestId: 3,
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 170,
        requestedPrice: 3.00,
        status: "rejected",
        harvestId: 4,
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 800,
        requestedPrice: 3.10,
        status: "sold",
        harvestId: 5,
        marketId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 600,
        requestedPrice: 7.20,
        status: "pending",
        harvestId: 6,
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 950,
        requestedPrice: 12.50,
        status: "accepted",
        harvestId: 7,
        marketId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 180,
        requestedPrice: 18.50,
        status: "sold",
        harvestId: 8,
        marketId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 90,
        requestedPrice: 3.20,
        status: "pending",
        harvestId: 9,
        marketId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        quantity: 500,
        requestedPrice: 6.00,
        status: "pending",
        harvestId: 10,
        marketId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("offers", null, {});
  }
};