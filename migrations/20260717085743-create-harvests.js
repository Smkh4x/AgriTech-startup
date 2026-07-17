'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('harvests', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      harvestDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      plotId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "plots",
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
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('harvests');

  }
};
