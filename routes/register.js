const express = require("express");

const router = express.Router();

const Controller = require("../Controllers/controllerRegister-Login");

router.post("/", Controller.register);

module.exports = router;
