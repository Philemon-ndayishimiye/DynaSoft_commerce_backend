'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductsModel.belongsTo(models.Category ,{
        foreignKey:'categoryId'
      });
    }
  }
  ProductsModel.init({
    productName: DataTypes.STRING,
    Images: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'ProductsModel',
  });
  return ProductsModel;
};