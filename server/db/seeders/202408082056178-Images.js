

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
    [
      {
        url: 'https://pro-dachnikov.com/uploads/posts/2021-10/1633543918_24-p-tsvet-sten-v-podezde-zhilogo-doma-foto-25.jpg',
        postId: 1,
      },
      {
        url: 'https://furman.top/uploads/posts/2022-06/1654605442_45-furman-top-p-podezd-art-krasivo-oboi-51.jpg',
        postId: 2,
      },
      {
        url: 'https://avatars.mds.yandex.net/i?id=b1eff9eeb140eef5f50de92a45aaae25_l-7629136-images-thumbs&n=13',
        postId: 3,
      },
      {
        url: 'https://kartinki.pics/uploads/posts/2022-03/1648121922_8-kartinkin-net-p-podezd-kartinki-9.jpg',
        postId: 4,
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
}
};
