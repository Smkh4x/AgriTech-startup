'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plots", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      area: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      municiality: {
        type: Sequelize.STRING,
        allowNull: true
      },
      farmerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "farmers",
          key: "id"
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('plots');

  }
};
