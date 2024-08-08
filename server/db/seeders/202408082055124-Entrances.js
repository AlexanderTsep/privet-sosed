

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Entrances',
    [
      {
      number: 7,
      houseId: 1,
      },
      {
      number: 2,
      houseId: 1,
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entrances', null, {});
}
};
