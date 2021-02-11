
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('PracticeDataBase', 'MsomiSebe\Sebza', 'Sione1994!', {
  host: 'MSOMISEBE',
  dialect:'mssql',
 
});

require('dotenv').config({ debug: process.env.DEBUG })


module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    port:3000,
   dialect: 'mssql',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
 //  dialect: 'mysql',
  },
  production: {
//  dialect: 'mysql',
  },
}