export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("marketPrices", [

      // ================= TOMATE =================

      {
        pricePerKg: 6.20,
        priceDate: "2026-07-10",
        marketId: 32,
        productId: 63,
 
      },
      {
        pricePerKg: 5.80,
        priceDate: "2026-07-10",
        marketId: 31,
        productId: 63,
 
      },
      {
        pricePerKg: 5.30,
        priceDate: "2026-07-10",
        marketId: 33,
        productId: 63,
 
      },
      {
        pricePerKg: 5.10,
        priceDate: "2026-07-10",
        marketId: 34,
        productId: 63,
 
      },

      // ================= POTATO =================

      {
        pricePerKg: 3.80,
        priceDate: "2026-07-10",
        marketId: 31,
        productId: 64,
 
      },
      {
        pricePerKg: 4.10,
        priceDate: "2026-07-10",
        marketId: 32,
        productId: 64,
 
      },
      {
        pricePerKg: 3.90,
        priceDate: "2026-07-10",
        marketId: 33,
        productId: 64,
 
      },

      // ================= ONION =================

      {
        pricePerKg: 4.60,
        priceDate: "2026-07-10",
        marketId: 31,
        productId: 65,
 
      },
      {
        pricePerKg: 4.90,
        priceDate: "2026-07-10",
        marketId: 32,
        productId: 65,
 
      },
      {
        pricePerKg: 4.40,
        priceDate: "2026-07-10",
        marketId: 35,
        productId: 65,
 
      },

      // ================= ORANGE =================

      {
        pricePerKg: 7.20,
        priceDate: "2026-07-10",
        marketId: 32,
        productId: 66,
 
      },
      {
        pricePerKg: 6.80,
        priceDate: "2026-07-10",
        marketId: 33,
        productId: 66,
 
      },

      // ================= OLIVE =================

      {
        pricePerKg: 12.50,
        priceDate: "2026-07-10",
        marketId: 34,
        productId: 67,
 
      },
      {
        pricePerKg: 11.90,
        priceDate: "2026-07-10",
        marketId: 35,
        productId: 67,
 
      },

      // ================= STRAWBERRY =================

      {
        pricePerKg: 18.50,
        priceDate: "2026-07-10",
        marketId: 32,
        productId: 68,
 
      },
      {
        pricePerKg: 17.20,
        priceDate: "2026-07-10",
        marketId: 31,
        productId: 68,
 
      },

      // ================= MINT =================

      {
        pricePerKg: 3.20,
        priceDate: "2026-07-10",
        marketId: 36,
        productId: 69,
 
      },

      // ================= WHEAT =================

      {
        pricePerKg: 2.90,
        priceDate: "2026-07-10",
        marketId: 34,
        productId: 70,
 
      },
      {
        pricePerKg: 3.10,
        priceDate: "2026-07-10",
        marketId: 33,
        productId: 70,
 
      }

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marketPrices", null, {});
  }
};