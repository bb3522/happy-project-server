const express = require("express");

const router = express.Router();

const Controller = require("../Controllers/controllerPosts");

const { authentication } = require("../middlewares/authentication");

const {
  authorizationEdit,
  authorizationStatus,
} = require("../middlewares/authorization");

router.get("/categories", Controller.categories);

router.use(authentication);

router.get("/", Controller.posts);

router.post("/", Controller.addPost);

router.get("/histories", Controller.histories);

router.get("/:postId", Controller.detailPost);

router.put("/:postId", authorizationEdit, Controller.updatePost);

router.patch("/:postId", authorizationStatus, Controller.status);

module.exports = router;
