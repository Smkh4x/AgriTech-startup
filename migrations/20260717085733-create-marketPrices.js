'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('marketPrices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pricePerKg: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      priceDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      marketId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "markets",
          key: "id"
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "products",
          key: "id"
        }
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('marketPrices');

  }
};
