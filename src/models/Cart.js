'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Role.hasOne(models.Role, {foreignKey: "accountId", as: "arc"})

    }
  };
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};

