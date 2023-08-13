// Import necessary libraries
const cors = require("cors");
const express = require("express");

// Create an instance of Express application
const app = express();

// Apply middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to Kickgame!"); // Respond with a welcome message
});

// Import and use the kicksController to handle kicks-related routes
const kicksController = require("./controllers/kicksController.js");
app.use("/kicks", kicksController);

// Define a catch-all route for 404 errors
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" }); // Respond with a JSON error message
  });

// Export the configured Express application
module.exports = app;
