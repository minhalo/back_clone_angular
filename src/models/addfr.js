'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addfr extends Model {
   
    static associate(models) {
    }
  };
  Addfr.init({
    idAccount:  DataTypes.INTEGER,
    idFriend: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Addfr',
  });
  return Addfr;
};