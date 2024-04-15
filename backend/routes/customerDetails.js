const express = require("express");
const router = express.Router();
const {validateCustomerDetails} = require("../middlewares/customerValidation");
const CustomerDetails = require("../models/customerDetails");
const mongoose = require("mongoose");

// Create a new customer
router.post("/", validateCustomerDetails, async (req, res) => {
  try {
    // Create a new customer object
    const newCustomer = new CustomerDetails({
      customerName: req.body.customerName,
      customerPassword: req.body.customerPassword,
      customerContactInfo: req.body.customerContactInfo,
      customerEmail: req.body.customerEmail,
    });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    // Send the newly created customer back in the response
    return res.status(201).json(savedCustomer);
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
});

module.exports = router;
