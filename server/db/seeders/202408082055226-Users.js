

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'Users',
         [
           {
            id: 1,
            name: 'Вася',
            email: 'vasya@email.ru',
            password: '12345',
            cityId: 1,
            streetId: 1,
            houseId: 1,
            entranceId: 1,
            appartId: 1,
            img: 'https://sun6-20.userapi.com/s/v1/if1/ycenHXJkg9nH3Xga60dXAfNg_yp9Yp5_N1by3UmRTl51Pjjw8xRUGQ2A5IdvEnKhXIs9a-kW.jpg?size=1333x1620&quality=96&crop=71,540,1333,1620&ava=1',
            phoneNumber: '8-800-555-35-35',
            isAdmin: true,
          },
          {
            id: 2,
            name: 'Петя',
            email: 'petya@email.ru',
            password: '12345',
            cityId: 1,
            streetId: 1,
            houseId: 1,
            entranceId: 1,
            appartId: 2,
            img: 'https://sergiev.ru/media/images/55/DSC_2235.jpg',
            phoneNumber: '8-999-544-25-43',
            isAdmin: false,
          },
          {
            id: 3,
            name: 'Вова',
            email: 'vova@email.ru',
            password: '12345',
            cityId: 1,
            streetId: 1,
            houseId: 1,
            entranceId: 2,
            appartId: 3,
            img: 'https://sun9-10.userapi.com/c637822/v637822835/65756/V-9FFkT1CIo.jpg',
            phoneNumber: '8-909-564-53-16',
            isAdmin: false,
          },
          {
            id: 4,
            name: 'Миша',
            email: 'misha@email.ru',
            password: '12345',
            cityId: 1,
            streetId: 1,
            houseId: 1,
            entranceId: 2,
            appartId: 4,
            img: 'https://basket-11.wbbasket.ru/vol1633/part163311/163311733/images/big/1.jpg',
            phoneNumber: '8-903-124-75-44',
            isAdmin: false,
          },
        ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
