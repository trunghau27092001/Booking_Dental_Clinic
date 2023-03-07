'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor_service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctor_service.init({
    doctorId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'doctor_service',
  });
  return doctor_service;
};