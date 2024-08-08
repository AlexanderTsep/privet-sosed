

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
    [
      {
      userId: 1,
      postId: 1,
      comment: 'Комментарий 1',
      },
      {
      userId: 2,
      postId: 1,
      comment: 'Комментарий 2',
      },
    ],
    {}
  );
},

async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
}
};
