// Import required modules
const express = require("express");
const mongoose = require("./db"); // Import Mongoose instance from db.js
const customerDetailsRoutes = require("./routes/customerDetails");

// Create an Express application
const app = express();

// Middleware setup
app.use(express.json());

// Mount customer details routes
app.use("/api/customerDetails", customerDetailsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
