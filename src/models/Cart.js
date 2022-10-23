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
      Cart.belongsTo(models.User, { foreignKey: "UserId", as: "arc9" })
      Cart.belongsTo(models.Product, { foreignKey: "ProductId", as: "arc10" })
    }
  };
  Cart.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};

