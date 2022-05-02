'use strict';
// const bcrypt = require('bcryptjs') 
const { createHashFromPassword } = require('../helpers/hashPassword')
const {
  Model
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
      User.hasMany(models.Post, {foreignKey : 'authorId', as: 'userId'})
    }
  }
  User.init({
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
      defaultValue: 'admin'
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance, options) {
        let hash = createHashFromPassword(instance.password)
        instance.password = hash
      }
    },
    modelName: 'User',
  });
  return User;
};