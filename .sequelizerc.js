const path = require('path');

module.exports = {
  'config': path.resolve('./Sequelize-CLI/config', 'config.js'),
  'models-path': path.resolve('./Sequelize-CLI/models'),
  'seeders-path': path.resolve('./Sequelize-CLI/seeders'),
  'migrations-path': path.resolve('./Sequelize-CLI/migrations'),
};