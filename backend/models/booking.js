const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  travelerName: {type: String, required: true},
  checkInDate: {type: Date, required: true},
  checkOutDate: {type: Date, required: true},
  // Add more fields as needed
});

module.exports = mongoose.model("Booking", bookingSchema);
