export default  {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("offers", [

      {
        quantity: 300,
        requestedPrice: 6.20,
        status: "pending",
        harvestId: 1,
        marketId: 2,
 
      },

      {
        quantity: 450,
        requestedPrice: 4.10,
        status: "sold",
        harvestId: 2,
        marketId: 2,
 
      },

      {
        quantity: 220,
        requestedPrice: 4.90,
        status: "accepted",
        harvestId: 3,
        marketId: 2,
 
      },

      {
        quantity: 170,
        requestedPrice: 3.00,
        status: "rejected",
        harvestId: 4,
        marketId: 1,
 
      },

      {
        quantity: 800,
        requestedPrice: 3.10,
        status: "sold",
        harvestId: 5,
        marketId: 3,
 
      },

      {
        quantity: 600,
        requestedPrice: 7.20,
        status: "pending",
        harvestId: 6,
        marketId: 2,
 
      },

      {
        quantity: 950,
        requestedPrice: 12.50,
        status: "accepted",
        harvestId: 7,
        marketId: 4,
 
      },

      {
        quantity: 180,
        requestedPrice: 18.50,
        status: "sold",
        harvestId: 8,
        marketId: 2,
 
      },

      {
        quantity: 90,
        requestedPrice: 3.20,
        status: "pending",
        harvestId: 9,
        marketId: 6,
 
      },

      {
        quantity: 500,
        requestedPrice: 6.00,
        status: "pending",
        harvestId: 10,
        marketId: 1,
 
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("offers", null, {});
  }
};