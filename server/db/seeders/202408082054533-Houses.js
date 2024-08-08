

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Houses',
    [
      {
      number: 13,
      streetId: 1,
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Houses', null, {});
}
};
