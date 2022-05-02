const { User, Post } = require('../models/index')

const authorizationEdit = async (req,res,next) => {
  try {
    const postId = req.params.postId
    let post = await Post.findByPk(postId)

    if (!post) {
      throw { name: 'Post Not Found', statusCode: 404 }
    } else if (req.user.role === 'admin' || req.user.id === post.authorId) {
      next()
    } else {
      throw { name: 'Forbidden', statusCode: 403 }
    }
  } catch (err) {
    next(err)
  }
}

const authorizationStatus = async (req,res,next) => {
  try {
    const postId = req.params.postId
    let post = await Post.findByPk(postId)

    if (!post) {
      throw { name: 'Post Not Found', statusCode: 404 }
    } else if (req.user.role === 'admin') {
      next()
    } else {
      throw { name: 'Forbidden', statusCode: 403 }
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { authorizationEdit, authorizationStatus }