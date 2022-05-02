const express = require("express");

const router = express.Router();

const posts = require("./posts");

const login = require("./login");

const customers = require("./customers");

const register = require("./register");

router.use("/customers", customers);

router.use("/login", login);

router.use("/register", register);

router.use("/posts", posts);

module.exports = router;
