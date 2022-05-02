const express = require("express");

const router = express.Router();

const Controller = require("../Controllers/controllerRegister-Login");

router.post("/", Controller.login);

router.post("/authGoogle", Controller.loginGoogle);

module.exports = router;
