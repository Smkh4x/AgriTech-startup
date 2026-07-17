'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("users", [

      {
        firstName: "Youssef",
        lastName: "Alami",
        email: "youssef123@gmail.com",
        password: "youssef123",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});

  }

};