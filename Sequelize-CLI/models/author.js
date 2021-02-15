'use strict';
/*const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     *
    static associate(models) {
      // define association here
    }
  };
  Author.init({
    first_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    date_of_death: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};*/

const {Sequelize,DataTypes,Model} = require("sequelize");

const author = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author',{

    first_name:{type: Sequelize.STRING},
    family_name:Sequelize.STRING,
    date_of_death:DataTypes.DATE,
    date_of_birth:DataTypes.DATE
    
  }, {
    classMethods:{
      associate:function(models){
        Author.hasMany(models.Book);
      }
    }
    
  });

  return Author; 
};

module.exports = author;