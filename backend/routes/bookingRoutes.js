// routes/bookingRoutes.js

const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/", bookingController.createBooking);
// Add more routes as needed

module.exports = router;
