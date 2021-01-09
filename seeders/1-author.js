"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", [
      {
        name: "Seiga",
        email: "seigaalghi@gmail.com",
        password: "$2b$10$zNJDkj59cElG7et/xI19xu6XgsTg.GHIhlAaw5URrHX0.p11rHIzu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Author",
        email: "author@gmail.com",
        password: "$2b$10$zNJDkj59cElG7et/xI19xu6XgsTg.GHIhlAaw5URrHX0.p11rHIzu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Editor",
        email: "editor@gmail.com",
        password: "$2b$10$zNJDkj59cElG7et/xI19xu6XgsTg.GHIhlAaw5URrHX0.p11rHIzu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {},
};
