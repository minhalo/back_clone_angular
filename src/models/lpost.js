'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lpost extends Model {
    static associate(models) {}
  };
  Lpost.init({
    accId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    learningId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lpost',
  });
  return Lpost;
};