'use strict';
const {
  createHashFromPassword
} = require("../helpers/hashPassword");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {

    static associate(models) {
      Customer.belongsToMany(models.Post, {
        through: 'CustomerPosts',
        foreignKey:'postId'
      })
    }
  }
  Customer.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Username is required'},
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email has been registered'},
      validate: {
        notEmpty: {msg: 'Email is required'},
        isEmail: {msg: 'Email format is invalid'},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password is required'},
        passwordLength() {
          if (this.password.length < 5) {
            throw new Error ('Minimum password is 5 characters')
          }
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'reader'
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance, options) {
        let hash = createHashFromPassword(instance.password)
        instance.password = hash
      }
    },
    modelName: 'Customer',
  });
  return Customer;
};