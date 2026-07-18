module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("harvests", [
      {
        quantity: 300,
        harvestDate: "2026-07-10",
        status: "ready",
        plotId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 450,
        harvestDate: "2026-07-08",
        status: "sold",
        plotId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 220,
        harvestDate: "2026-07-05",
        status: "ready",
        plotId: 3,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 170,
        harvestDate: "2026-07-02",
        status: "lost",
        plotId: 4,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 800,
        harvestDate: "2026-06-28",
        status: "sold",
        plotId: 5,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 600,
        harvestDate: "2026-07-11",
        status: "ready",
        plotId: 6,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 950,
        harvestDate: "2026-07-09",
        status: "ready",
        plotId: 7,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 180,
        harvestDate: "2026-07-06",
        status: "sold",
        plotId: 8,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 90,
        harvestDate: "2026-07-04",
        status: "ready",
        plotId: 9,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 500,
        harvestDate: "2026-07-03",
        status: "ready",
        plotId: 10,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 340,
        harvestDate: "2026-06-30",
        status: "sold",
        plotId: 1,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 280,
        harvestDate: "2026-07-01",
        status: "ready",
        plotId: 2,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 720,
        harvestDate: "2026-07-12",
        status: "ready",
        plotId: 3,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 410,
        harvestDate: "2026-07-07",
        status: "lost",
        plotId: 6,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 150,
        harvestDate: "2026-07-10",
        status: "ready",
        plotId: 8,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("harvests", null, {});
  }
};