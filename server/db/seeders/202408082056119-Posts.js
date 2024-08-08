

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
    [
      {
      id: 1,
      title: 'Пост 1',
      description: 'Описание поста 1',
      userId: 1,
      cityId: 1,
      streetId: 1,
      houseId: 1,
      entranceId: 1,
      },
      {
      id: 2,
      title: 'Пост 2',
      description: 'Описание поста 2',
      userId: 2,
      cityId: 1,
      streetId: 1,
      houseId: 1,
      entranceId: 1,
      },
      {
      id: 3,
      title: 'Пост 3',
      description: 'Описание поста 3',
      userId: 3,
      cityId: 1,
      streetId: 1,
      houseId: 1,
      entranceId: 2,
      },
      {
      id: 4,
      title: 'Пост 4',
      description: 'Описание поста 4',
      userId: 4,
      cityId: 1,
      streetId: 1,
      houseId: 1,
      entranceId: 2,
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
}
};
