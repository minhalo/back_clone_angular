'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emoji extends Model {
    static associate(models) {}
  };
  Emoji.init({
    emo: DataTypes.STRING,
    
    
  }, {
    sequelize,
    modelName: 'Emoji',
  });
  return Emoji;
};