'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {}
  };
  Role.init({
    name: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};