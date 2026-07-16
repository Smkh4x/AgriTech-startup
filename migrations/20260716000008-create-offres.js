'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      requestedPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending'
      },
      harvestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Recoltes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Indexes
    await queryInterface.addIndex('Offres', ['harvestId']);
    await queryInterface.addIndex('Offres', ['marketId']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Offres');
  }
};
