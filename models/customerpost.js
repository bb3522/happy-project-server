'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerPost extends Model {

    static associate(models) {
      CustomerPost.belongsTo(models.Customer, {
        foreignKey:'customerId'
      })
      CustomerPost.belongsTo(models.Post, {
        foreignKey:'postId'
      })
    }
  }
  CustomerPost.init({
    customerId:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CustomerPost',
  });
  return CustomerPost;
};