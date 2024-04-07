// controllers/bookingController.js

const Booking = require("../models/booking");

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({success: true, data: booking});
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

module.exports = {createBooking};
