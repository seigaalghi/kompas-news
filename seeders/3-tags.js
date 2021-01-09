"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tags", [
      {
        postId: 1,
        tag: "Life",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        tag: "Technology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        tag: "Life",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        tag: "Showbiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        tag: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 4,
        tag: "Showbiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 4,
        tag: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        tag: "Showbiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        tag: "Sport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 5,
        tag: "Life",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
