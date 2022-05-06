'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messager extends Model {
    static associate(models) {}
  };
  Messager.init({

    

    idacc: DataTypes.INTEGER,
    idpost: DataTypes.INTEGER,
    message: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Messager',
  });
  return Messager;
};