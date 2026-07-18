export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("marketPrices", [

      // ================= TOMATE =================

      {
        price: 6.20,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 1,
 
      },
      {
        price: 5.80,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 1,
 
      },
      {
        price: 5.30,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 1,
 
      },
      {
        price: 5.10,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 1,
 
      },

      // ================= POTATO =================

      {
        price: 3.80,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 2,
 
      },
      {
        price: 4.10,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 2,
 
      },
      {
        price: 3.90,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 2,
 
      },

      // ================= ONION =================

      {
        price: 4.60,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 3,
 
      },
      {
        price: 4.90,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 3,
 
      },
      {
        price: 4.40,
        priceDate: "2026-07-10",
        marketId: 5,
        productId: 3,
 
      },

      // ================= ORANGE =================

      {
        price: 7.20,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 6,
 
      },
      {
        price: 6.80,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 6,
 
      },

      // ================= OLIVE =================

      {
        price: 12.50,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 7,
 
      },
      {
        price: 11.90,
        priceDate: "2026-07-10",
        marketId: 5,
        productId: 7,
 
      },

      // ================= STRAWBERRY =================

      {
        price: 18.50,
        priceDate: "2026-07-10",
        marketId: 2,
        productId: 8,
 
      },
      {
        price: 17.20,
        priceDate: "2026-07-10",
        marketId: 1,
        productId: 8,
 
      },

      // ================= MINT =================

      {
        price: 3.20,
        priceDate: "2026-07-10",
        marketId: 6,
        productId: 9,
 
      },

      // ================= WHEAT =================

      {
        price: 2.90,
        priceDate: "2026-07-10",
        marketId: 4,
        productId: 10,
 
      },
      {
        price: 3.10,
        priceDate: "2026-07-10",
        marketId: 3,
        productId: 10,
 
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marketPrices", null, {});
  }
};