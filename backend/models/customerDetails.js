// models/customerDetails.js

const mongoose = require("mongoose");

const customerDetailsSchema = new mongoose.Schema(
  {
    customerName: {type: String, required: true},
    customerPassword: {type: String, required: true},
    customerContactInfo: {type: String, required: true},
    customerEmail: {type: String, required: true},
  },
  {timestamps: true}
);

module.exports = mongoose.model("customer_details", customerDetailsSchema);
