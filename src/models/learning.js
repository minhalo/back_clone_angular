'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learning extends Model {
    static associate(models) {}
  };
  Learning.init({
    groupname: DataTypes.STRING,
    idaccount: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Learning',
  });
  return Learning;
};