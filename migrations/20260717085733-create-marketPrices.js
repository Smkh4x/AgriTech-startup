'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('marketPrices', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pricePerKg: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      priceDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      marketId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "markets",
          key: "id"
        }
      },
      productId: {
        type: DataTypes.INTEGER,
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
