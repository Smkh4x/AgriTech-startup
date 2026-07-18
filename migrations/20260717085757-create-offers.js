'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('offers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quantity: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            askingPrice: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            status: {
                type: Sequelize.STRING,
                allowNull: true
            },
            harvestId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: "harvests",
                    key: "id"
                }
            },
            marketId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: "markets",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            }
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('offers');

    }
};
