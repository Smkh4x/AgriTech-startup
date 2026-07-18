import bcrypt from "bcrypt";

export default {
  async up(queryInterface, Sequelize) {

    const hash = await bcrypt.hash("youssef", 10);

    await queryInterface.bulkInsert("users", [
      {
        firstName: "Youssef",
        lastName: "Alaoui",
        email: "admin@fellah.ma",
        password: hash,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Hamza",
        lastName: "Benali",
        email: "agent@fellah.ma",
        password: hash,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Ahmed",
        lastName: "El Amrani",
        email: "ahmed@gmail.com",
        password: hash,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Fatima",
        lastName: "Bennani",
        email: "fatima@gmail.com",
        password: hash,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Omar",
        lastName: "Lahlou",
        email: "buyer@gmail.com",
        password: hash,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};