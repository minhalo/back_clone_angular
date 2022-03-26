'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Add extends Model {
   
    static associate(models) {
    }
  };
  Add.init({
    idAccount:  DataTypes.INTEGER,
    idFriend: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Add',
  });
  return Add;
};