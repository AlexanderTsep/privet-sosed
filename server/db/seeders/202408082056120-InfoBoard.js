

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'InfoBoards',
      [
        {
          img: 'https://orlenokvolga.ru/wp-content/uploads/2024/03/png-transparent-attention-exclamation-mark-sign-caution-danger-yellow.png',
          title: 'Отключение горячей воды!',
          description: 'C 01.09 по 15.09 в вашем доме будет отключено горячее водоснабжение!',
          cityId: 1,
          streetId: 1,
          houseId: 1,
          entranceId: 1,
        },
        {
          img: 'https://orlenokvolga.ru/wp-content/uploads/2024/03/png-transparent-attention-exclamation-mark-sign-caution-danger-yellow.png',
          title: 'Отключение горячей воды!',
          description: 'C 01.09 по 15.09 в вашем доме будет отключено горячее водоснабжение!',
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
      await queryInterface.bulkDelete('InfoBoards', null, {});
  }
};
