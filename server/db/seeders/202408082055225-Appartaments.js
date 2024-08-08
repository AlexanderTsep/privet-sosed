

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Appartaments',
    [
      {
      number: 444,
      entranceId: 1,
      },
      {
      number: 333,
      entranceId: 1,
      },
      {
      number: 222,
      entranceId: 2, 
      },
      {
      number: 111,
      entranceId: 2, 
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appartaments', null, {});
}
};
