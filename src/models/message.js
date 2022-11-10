'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.User, { foreignKey: "UserId", as: "arc9" })
      Message.belongsTo(models.Product, { foreignKey: "ProductId", as: "arc10" })
    }
  };
  Message.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    mes: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
