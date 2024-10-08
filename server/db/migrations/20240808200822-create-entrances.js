
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entrances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      houseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Houses',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entrances');
  }
};