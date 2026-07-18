'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('harvests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quantity: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      harvestDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      plotId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "plots",
          key: "id"
        },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "products",
          key: "id"
        },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('harvests');

  }
};
