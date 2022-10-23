'use strict';
const {
  Model, NUMBER, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gender.hasOne(models.User, { foreignKey: "GenderId", as: "arc1" })
      // Gender.hasOne(models.Gender, {foreignKey: "accountId", as: "arc"})
    }
  };
  Gender.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};
