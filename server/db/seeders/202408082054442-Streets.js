

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Streets',
    [
      {
      name: 'Юбилейная',
      cityId: 1,
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Streets', null, {});
}
};
