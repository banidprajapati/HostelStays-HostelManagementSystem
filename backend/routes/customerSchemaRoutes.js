const express = require("express");
const router = express.Router();
const Customer = require("../models/customerSchema"); // Corrected import
const mongoose = require("mongoose");

// POST route to add a new customer
router.post("/add", async (req, res) => {
  try {
    const newCustomer = new Customer({
      Customer_id: mongoose.Types.ObjectId(), // Corrected usage without parentheses ()
      Customer_name: req.body.Customer_name,
      Customer_contactInfo: req.body.Customer_contactInfo,
      customer_location: req.body.customer_location,
    });
    await newCustomer.save();
    res.json({ success: true, msg: "Customer added successfully", customer: newCustomer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Failed to add customer" });
  }
});

// GET route to fetch all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to fetch customers" });
  }
});

module.exports = router;
