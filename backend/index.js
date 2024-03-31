// index.js

// Remove this line, as mongoose is already imported indirectly through './db'
// const mongoose = require("./db");

const express = require("express");
const app = express();

// Import your routes or other middleware here
const bookingRoutes = require("./routes/bookingRoutes");

// Mount routes
app.use("/api/bookings", bookingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Database Connected");
  console.log(`Server is running on port ${PORT}`);
});
