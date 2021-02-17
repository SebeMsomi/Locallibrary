const Sequelize = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('PracticeDataBase', 'Sebza', 'Sionesebemsomi1994!', {
  host: 'localhost',
  dialect: 'mssql'
});

require('dotenv').config()//;

// var config =  require('./config');

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    port:1433
    dialect: 'mssql',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'mssql',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mssql',
  },
}