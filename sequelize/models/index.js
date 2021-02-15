'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(config.url, config);
  console.log('SE '+ config.port);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


const db = {
  Author: require('./author')(sequelize, Sequelize),
  //Book: require('./book')(sequelize, Sequelize),

};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
