
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("farmers", {
          id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              allowNull: false,
              autoIncrement: true
          },
          firstName: {
              type: DataTypes.STRING,
              allowNull: true
          },
          lastName: {
              type: DataTypes.STRING,
              allowNull: true
          },
          phone: {
              type: DataTypes.STRING,
              allowNull: true
          },
          region: {
              type: DataTypes.STRING,
              allowNull: true
          },
          userId: {
              type: DataTypes.INTEGER,
              allowNull: true,

              references: {
                module: "users",
                key: "id"
              }
          },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("farmers");

  }
};
