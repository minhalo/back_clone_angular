'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studentf extends Model {
    static associate(models) {}
  };
  Studentf.init({
    lpostId: DataTypes.INTEGER,
    file: DataTypes.TEXT('long'),
    fileName:DataTypes.STRING,
    point: DataTypes.INTEGER,
    acc:DataTypes.INTEGER,
    chosan:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Studentf',
  });
  return Studentf;
};