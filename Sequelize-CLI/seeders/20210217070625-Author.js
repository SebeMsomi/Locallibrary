'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Authors',
    [
      {
        first_name: 'William',
        family_name: 'Shakespeare',
        date_of_birth: '03/06/1818',
        date_of_death: '03/11/1955',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'wee',
        family_name: 'fff',
        date_of_birth: '08/11/4744',
        date_of_death: '01/01/2011',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Authors', null, {}),
};