'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plots", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      municiality: {
        type: DataTypes.STRING,
        allowNull: true
      },
      farmerId: {
        type: DataTypes.INTEGER,
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
