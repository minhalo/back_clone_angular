'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  };
  Post.init({
    accId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER,
    image: DataTypes.TEXT('long'),
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};