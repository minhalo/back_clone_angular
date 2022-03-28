'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {}
  };
  Chat.init({
    groupname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};