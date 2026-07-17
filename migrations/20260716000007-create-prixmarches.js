'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PrixMarches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pricePerKg: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      priceDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      marketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Marches',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Produits',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add indexes for product best price queries
    await queryInterface.addIndex('PrixMarches', ['productId']);
    await queryInterface.addIndex('PrixMarches', ['marketId']);
    await queryInterface.addIndex('PrixMarches', ['productId', 'priceDate']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PrixMarches');
  }
};
