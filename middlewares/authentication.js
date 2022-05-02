const { readPayloadFromToken } = require("../helpers/hashPassword");
const { User, Customer } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = readPayloadFromToken(access_token);

    const userFound = await User.findByPk(payload.id);

    if (!userFound) {
      throw { name: "Unauthorized", statusCode: 401 };
    } else {
      req.user = {
        id: userFound.id,
        email: userFound.email,
        role: userFound.role,
        username: userFound.username,
      };
    }
    next();
  } catch (err) {
    next(err);
  }
};

const authenticationCustomer = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = readPayloadFromToken(access_token);

    const userFound = await Customer.findByPk(payload.id);

    if (!userFound) {
      throw { name: "Unauthorized", statusCode: 401 };
    } else {
      req.user = {
        id: userFound.id,
        email: userFound.email,
        role: userFound.role,
        username: userFound.username,
      };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication, authenticationCustomer };
