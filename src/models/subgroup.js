'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subgroup extends Model {
    static associate(models) {}
  };
  Subgroup.init({
    groupId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Subgroup',
  });
  return Subgroup;
};