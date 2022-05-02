if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();

const route = require("./routes");

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/", route);

app.use(errorHandler);

module.exports = app
