'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Category, {foreignKey : 'categoryId'})
      Post.belongsTo(models.User, {foreignKey : 'authorId'})
      Post.hasMany(models.History, {foreignKey : 'postId'})
      Post.belongsToMany(models.Customer, {
        through: 'CustomerPosts',
        foreignKey:'customerId'
      })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Title is required'}
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Content is required'}
      },
    },
    imgUrl: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Category is required'}
      }
    },
    authorId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};