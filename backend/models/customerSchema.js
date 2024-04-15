const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    Customer_id: { type: String, required: true },
    Customer_name: { type: String, required: true },
    Customer_contactInfo: { type: String, required: true },
    customer_location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
