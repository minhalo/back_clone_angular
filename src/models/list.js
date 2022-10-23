'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.belongsTo(models.Category, { foreignKey: "categoryId", as: "arc1" })
      List.hasMany(models.Product, { foreignKey: "listId", as: "arcs" })

      // Role.hasOne(models.Role, {foreignKey: "accountId", as: "arc"})

    }
  };
  List.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};
