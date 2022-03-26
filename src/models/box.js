'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    static associate(models) {}
  };
  Box.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Box',
  });
  return Box;
};