

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'Cities',
      [
        {
        name: 'Подольск',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Cities', null, {});
  }
};
