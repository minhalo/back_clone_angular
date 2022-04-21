'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sublearn extends Model {
    static associate(models) {}
  };
  Sublearn.init({
    accId: DataTypes.INTEGER,
    // text: DataTypes.STRING,
    learningId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sublearn',
  });
  return Sublearn;
};