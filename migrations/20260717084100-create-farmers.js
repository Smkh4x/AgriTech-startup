import { Model } from "sequelize";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("farmers", {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              allowNull: false,
              autoIncrement: true
          },
          firstName: {
              type: Sequelize.STRING,
              allowNull: true
          },
          lastName: {
              type: Sequelize.STRING,
              allowNull: true
          },
          phone: {
              type: Sequelize.STRING,
              allowNull: true
          },
          region: {
              type: Sequelize.STRING,
              allowNull: true
          },
          userId: {
              type: Sequelize.INTEGER,
              allowNull: true,

              references: {
                model: "users",
                key: "id"
              }
          },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("farmers");

  }
};
