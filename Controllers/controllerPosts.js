const { Post, User, Category, History } = require("../models/index");

const nodemailer = require('nodemailer')

class Controller {
  //CREATE
  static async addPost(req, res, next) {
    try {
      const { title, content, imgUrl, categoryId } = req.body;
      const authorId = req.user.id;
      let post = await Post.create({
        title,
        content,
        imgUrl,
        categoryId,
        authorId,
      });

      let user = await User.findByPk(authorId);

      await History.create({
        postId: post.id,
        title: post.title,
        description: `new post with id ${post.id} is created`,
        updatedBy: user.username,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Post created successfully",
        data: post,
      });
    } catch (err) {
      next(err);
    }
  }

  static async sendEmail(req, res, next) {
    try {
      const { message } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "punyacotton57@gmail.com",
          pass: "gajah890",
        },
      });

      const options = {
        from: "User",
        to: "punyacotton57@gmail.com",
        subject: `BUCKET LIST`,
        text: message,
      };

      await transporter.sendMail(options, (err, info) => {
       if (err) {
         console.log(err);
       }
      });

      res.status(200).json({
        statusCode: 200,
        message: `Email has been sent successfully`,
        data: {
          message,
        },
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  //READ
  static async posts(req, res, next) {
    try {
      let posts = await Post.findAll({
        order: [["id", "ASC"]],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).json({
        statusCode: 200,
        data: posts,
      });
    } catch (err) {
      next(err);
    }
  }

  static async categories(req, res, next) {
    try {
      let categories = await Category.findAll();

      res.status(200).json({
        statusCode: 200,
        data: categories,
      });
    } catch (err) {
      next(err);
    }
  }

  static async histories(req, res, next) {
    try {
      let histories = await History.findAll({
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json({
        statusCode: 200,
        data: histories,
      });
    } catch (err) {
      next(err);
    }
  }

  static async detailPost(req, res, next) {
    try {
      const id = +req.params.postId;
      let post = await Post.findOne({
        attributes: [
          "id",
          "title",
          "content",
          "imgUrl",
          "categoryId",
          ["authorId", "userId"],
        ],
        where: {
          id,
        },
        include: [
          {
            model: User,
            attributes: ["username", "email", "phoneNumber"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });

      if (post === null) {
        throw { name: "Post Not Found", statusCode: 404 };
      }

      res.status(200).json({
        statusCode: 200,
        data: post,
      });
    } catch (err) {
      next(err);
    }
  }

  //UPDATE
  static async updatePost(req, res, next) {
    try {
      const { title, content, imgUrl, categoryId } = req.body;
      const id = +req.params.postId;
      const authorId = req.user.id;

      let postLength = await Post.update(
        {
          title,
          content,
          imgUrl,
          categoryId,
        },
        {
          where: { id },
        }
      );

      if (postLength <= 0) {
        throw { name: "Post Not Found", statusCode: 404 };
      }

      let post = await Post.findByPk(id);

      let user = await User.findByPk(authorId);

      await History.create({
        postId: post.id,
        title: post.title,
        description: `post with id ${post.id} is updated`,
        updatedBy: user.username,
      });

      res.status(200).json({
        statusCode: 200,
        message: "Post updated successfully",
        data: post,
      });
    } catch (err) {
      next(err);
    }
  }

  static async status(req, res, next) {
    try {
      const { status } = req.body;
      const id = +req.params.postId;
      const authorId = req.user.id;

      let oldPost = await Post.findByPk(id);

      let postLength = await Post.update(
        {
          status,
        },
        {
          where: { id },
        }
      );

      if (postLength <= 0) {
        throw { name: "Post Not Found", statusCode: 404 };
      }

      let post = await Post.findByPk(id);

      let user = await User.findByPk(authorId);

      await History.create({
        postId: post.id,
        title: post.title,
        description: `post with id ${post.id} status has been updated from ${oldPost.status} to ${post.status}`,
        updatedBy: user.username,
      });

      res.status(201).json({
        statusCode: 200,
        message: "Status post updated successfully",
        data: {
          title: post.title,
          status: post.status,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  //DELETE
  static async deletePost(req, res, next) {
    try {
      const id = req.params.postId;
      let post = await Post.findByPk(id);

      const numDeletedRows = await Post.destroy({
        where: {
          id,
        },
      });

      if (numDeletedRows <= 0) {
        throw { name: "Post Not Found", statusCode: 404 };
      }

      res.status(200).json({
        statusCode: 200,
        message: `Post ${id} deleted successfully`,
        data: post,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
