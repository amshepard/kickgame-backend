// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Kickgame!");
});

// KICKS ROUTES
const kicksController = require("./controllers/kicksController.js");
app.use("/kicks", kicksController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });


// EXPORT
module.exports = app;