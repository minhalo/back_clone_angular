'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: "RoleId", as: "arc" })
      User.belongsTo(models.Gender, { foreignKey: "GenderId", as: "arc1" })
      User.belongsTo(models.Address, { foreignKey: "AddressId", as: "arc6" })
      User.hasMany(models.Cart, { foreignKey: "UserId", as: "arc9" })
      // {
      //   onDelete: 'RESTRICT',
      //   onUpdate: 'RESTRICT'
      // }
      // User.hasOne(models.Role, {foreignKey: "accountId", as: "arc"})
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    AddressId: DataTypes.INTEGER,
    GenderId: DataTypes.INTEGER,
    gmail: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
