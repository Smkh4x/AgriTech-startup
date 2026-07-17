export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: true
    }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
