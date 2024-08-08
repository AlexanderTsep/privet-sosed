
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id',
        }
      },
      cityId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Cities',
          key: 'id',
        }
      },
      streetId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Streets',
          key: 'id',
        }
      },
      houseId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Houses',
          key: 'id',
        }
      },
      entranceId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Entrances',
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
    await queryInterface.dropTable('Posts');
  }
};