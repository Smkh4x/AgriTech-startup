export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("harvests", [
      {
        quantity: 300,
        harvestDate: "2026-07-10",
        status: "ready",
        plotId: 1,
        productId: 63,
 
      },
      {
        quantity: 450,
        harvestDate: "2026-07-08",
        status: "sold",
        plotId: 2,
        productId: 64,
 
      },
      {
        quantity: 220,
        harvestDate: "2026-07-05",
        status: "ready",
        plotId: 3,
        productId: 65,
 
      },
      {
        quantity: 170,
        harvestDate: "2026-07-02",
        status: "lost",
        plotId: 4,
        productId: 67,
 
      },
      {
        quantity: 800,
        harvestDate: "2026-06-28",
        status: "sold",
        plotId: 5,
        productId: 68,
 
      },
      {
        quantity: 600,
        harvestDate: "2026-07-11",
        status: "ready",
        plotId: 6,
        productId: 69,
 
      },
      {
        quantity: 950,
        harvestDate: "2026-07-09",
        status: "ready",
        plotId: 7,
        productId: 70,
 
      },
      {
        quantity: 180,
        harvestDate: "2026-07-06",
        status: "sold",
        plotId: 8,
        productId: 71,
 
      },
      {
        quantity: 90,
        harvestDate: "2026-07-04",
        status: "ready",
        plotId: 9,
        productId: 72,
 
      },
      {
        quantity: 500,
        harvestDate: "2026-07-03",
        status: "ready",
        plotId: 10,
        productId: 68,
 
      },
      {
        quantity: 340,
        harvestDate: "2026-06-30",
        status: "sold",
        plotId: 1,
        productId: 69,
 
      },
      {
        quantity: 280,
        harvestDate: "2026-07-01",
        status: "ready",
        plotId: 2,
        productId: 70,
 
      },
      {
        quantity: 720,
        harvestDate: "2026-07-12",
        status: "ready",
        plotId: 3,
        productId: 71,
 
      },
      {
        quantity: 410,
        harvestDate: "2026-07-07",
        status: "lost",
        plotId: 4,
        productId: 72,
 
      },
      {
        quantity: 150,
        harvestDate: "2026-07-10",
        status: "ready",
        plotId: 8,
        productId: 64,
 
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("harvests", null, {});
  }
};