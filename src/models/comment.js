'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {}
  };
  Comment.init({
    arcId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    potId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};