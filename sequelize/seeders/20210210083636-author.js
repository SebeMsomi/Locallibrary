'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Authors',
    [
      {
        first_name: 'Mavuso',
        family_name: 'Mqhayi',
        date_of_birth: '19/10/1954',
        date_of_death: '11/01/2010',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'William',
        family_name: 'Shakespeare',
        date_of_birth: '08/01/1942',
        date_of_death: '01/01/2000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Authors', null, {}),