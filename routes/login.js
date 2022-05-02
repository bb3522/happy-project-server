const express = require("express");

const router = express.Router();

const Controller = require("../Controllers/controllerRegister-Login");

router.post("/", Controller.login);

module.exports = router;
