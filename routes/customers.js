const express = require("express");

const router = express.Router();

const Controller = require("../Controllers/controllerCustomers");

const { authenticationCustomer } = require("../middlewares/authentication");

router.post("/register", Controller.registerCustomer);

router.post("/login", Controller.loginCustomer);

router.get("/posts", Controller.CustomerPosts);

router.get("/posts/:postId", Controller.postDetail);

router.use(authenticationCustomer);

router.post("/posts/:postId", Controller.CustomerAddFavorite);

router.get("/favorites", Controller.CustomerFavorites);

module.exports = router;
