const { Customer, Post, User, Category, CustomerPost } = require("../models");
const {
  createTokenFromPayload,
  comparePasswordHash,
} = require("../helpers/hashPassword");
const { Op } = require("sequelize");

const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async registerCustomer(req, res, next) {
    try {
      const { username, email, password } = req.body;

      let customer = await Customer.create({
        username,
        email,
        password,
      });

      res.status(201).json({
        statusCode: 201,
        message: "Account created successfully",
        data: {
          username: customer.username,
          email: customer.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async loginCustomer(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await Customer.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { name: "Invalid Email", statusCode: 401 };
      } else {
        const userValidation = comparePasswordHash(password, user.password);

        if (!userValidation) {
          throw { name: "Invalid Password", statusCode: 401 };
        } else {
          const payload = {
            id: user.id,
          };

          const accessToken = createTokenFromPayload(payload);

          res.status(200).json({
            statusCode: 200,
            access_token: accessToken,
            data: {
              username: user.username,
              email: user.email,
              role: user.role,
            },
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async postDetail(req, res, next) {
    try {
      const { postId } = req.params;

      const post = await Post.findOne({
        where: {
          id: postId,
        },
        include: [
          {
            model: User,
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });

      if (post === null) {
        throw { name: "Post not found" };
      } else {
        res.status(200).json({
          statusCode: 200,
          data: post,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async CustomerPosts(req, res, next) {
    try {
      let { page, size } = req.query;
      let limit = size ? +size : 3;
      let offset = page ? (page - 1) * limit : 0;
      let keyword = req.query.search;
      let category = req.query.category;

      if (!keyword) {
        keyword = "";
      }

      let whereCategory = {
        model: Category,
        attributes: ["name"],
      };

      if (category) {
        whereCategory = {
          ...whereCategory,
          where: {
            id: +category,
          },
        };
      }

      let posts = await Post.findAndCountAll({
        order: [["id", "ASC"]],
        limit,
        offset,
        where: {
          title: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          whereCategory,
        ],
      });

      const response = (posts, page, limit) => {
        const { count: totalItems, rows: postData } = posts;
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, postData, totalPages, currentPage };
      };
      const result = response(posts, page, limit);
      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async CustomerFavorites(req, res, next) {
    try {
      const { id } = req.user;
      let { page, size } = req.query;
      let limit = size ? +size : 3;
      let offset = page ? (page - 1) * limit : 0;

      let posts = await CustomerPost.findAndCountAll({
        where: {
          customerId: id,
        },
        limit,
        offset,
        include: [
          {
            model: Post,
            include: [
              {
                model: Category,
              },
              {
                model: User,
              },
            ],
          },
        ],
      });

      const response = (posts, page, limit) => {
        const { count: totalItems, rows: postData } = posts;
        const currentPage = page ? +page : 1;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, postData, totalPages, currentPage };
      };

      const result = response(posts, page, limit);

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async CustomerAddFavorite(req, res, next) {
    try {
      const { id } = req.user;
      const postId = req.params.postId;

      const post = await Post.findByPk(postId);
      if (!post) {
        throw { name: "Post not found" };
      } else {
        let checkPost = await CustomerPost.findOne({
          where: {
            customerId: id,
            postId: postId,
          },
        });

        if (checkPost) {
          throw { name: "Forbidden Add" };
        } else {
          const favorite = await CustomerPost.create({
            customerId: id,
            postId: postId,
          });
          res.status(201).json({
            id: favorite.id,
            customerId: id,
            postId,
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
