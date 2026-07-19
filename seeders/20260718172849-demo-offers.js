export default  {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("offers", [

      {
        quantity: 300,
        askingPrice: 6.20,
        status: "pending",
        harvestId: 16,
        marketId: 32,
 
      },

      {
        quantity: 450,
        askingPrice: 4.10,
        status: "sold",
        harvestId: 16,
        marketId: 32,
 
      },

      {
        quantity: 220,
        askingPrice: 4.90,
        status: "accepted",
        harvestId: 17,
        marketId: 32,
 
      },

      {
        quantity: 170,
        askingPrice: 3.00,
        status: "rejected",
        harvestId: 18,
        marketId: 31,
 
      },

      {
        quantity: 800,
        askingPrice: 3.10,
        status: "sold",
        harvestId: 19,
        marketId: 33,
 
      },

      {
        quantity: 600,
        askingPrice: 7.20,
        status: "pending",
        harvestId: 20,
        marketId: 32,
 
      },

      {
        quantity: 950,
        askingPrice: 12.50,
        status: "accepted",
        harvestId: 21,
        marketId: 34,
 
      },

      {
        quantity: 180,
        askingPrice: 18.50,
        status: "sold",
        harvestId: 22,
        marketId: 32,
 
      },

      {
        quantity: 90,
        askingPrice: 3.20,
        status: "pending",
        harvestId: 23,
        marketId: 36,
 
      },

      {
        quantity: 500,
        askingPrice: 6.00,
        status: "pending",
        harvestId: 24,
        marketId: 31,
 
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("offers", null, {});
  }
};