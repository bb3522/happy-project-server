const { User } = require("../models");
const {
  createTokenFromPayload,
  comparePasswordHash,
} = require("../helpers/hashPassword");

const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      let user = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        statusCode: 201,
        message: "User created successfully",
        data: {
          username: user.username,
          email: user.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email
        },
      });

      if (!user) {
        throw { name: "Invalid User", statusCode: 401 };
      }

      const userValidation = comparePasswordHash(password, user.password);

      if (!userValidation) {
        throw { name: "Invalid User", statusCode: 401 };
      }

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
    } catch (err) {
      next(err);
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      const idToken = req.body.idToken;
      const client = new OAuth2Client(process.env.CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.CLIENT_ID,
      });

      const payload = ticket.getPayload();

      let user = await User.findOne({
        where: {
          email: payload.email,
        },
      });
      let token;

      if (user) {
        token = createTokenFromPayload({ id: user.id });
      } else {
        let createUser = await User.create({
          username: payload.name,
          email: payload.email,
          password: payload.sub,
          role: "blogger",
        });
        token = createTokenFromPayload({ id: createUser.id });
        user = createUser;
      }

      res.status(200).json({
        statusCode: 200,
        token,
        data: {
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
