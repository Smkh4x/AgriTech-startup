module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("marketprices", [

      // ================= TOMATE =================

      {
        price: 6.20,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 5.80,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 5.30,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 5.10,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= POTATO =================

      {
        price: 3.80,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 4.10,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 3.90,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= ONION =================

      {
        price: 4.60,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 4.90,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 4.40,
        priceDate: "2026-07-10",
        marketId: 5,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= ORANGE =================

      {
        price: 7.20,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 6.80,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= OLIVE =================

      {
        price: 12.50,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 11.90,
        priceDate: "2026-07-10",
        marketId: 5,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= STRAWBERRY =================

      {
        price: 18.50,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 17.20,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= MINT =================

      {
        price: 3.20,
        priceDate: "2026-07-10",
        marketId: 6,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ================= WHEAT =================

      {
        price: 2.90,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 3.10,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marketprices", null, {});
  }
};