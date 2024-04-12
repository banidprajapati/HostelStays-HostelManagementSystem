require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("./db"); // Import Mongoose instance from db.js
const customerDetailsRoutes = require("./routes/customerDetails");
const customerSchemaRoutes = require("./routes/customerSchemaRoutes");

const app = express();

app.use(express.json());

// Mount customer details routes
app.use("/api/customerDetails", customerDetailsRoutes);
app.use("/api/customerSchema", customerSchemaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 3000; // Use PORT environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
