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
      User.belongsTo(models.Role, { foreignKey: "roleId", as: "arc", onDelete: 'CASCADE', onUpdate: 'CASCADE' })

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
    roleId: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    gmail: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
