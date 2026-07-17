export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: true
    }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
