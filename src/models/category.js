'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.List)
      // Role.hasOne(models.Role, {foreignKey: "accountId", as: "arc"})

    }
  };
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
