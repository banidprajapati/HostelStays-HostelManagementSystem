// routes/customerDetails.js

const router = require("express").Router();
const CustomerDetails = require("../models/customerDetails");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      license: req.body.license,
      license_number: req.body.license_number,
    });
    const response = await User.addUser(user);
    res.json({success: true, msg: "User added"});
  } catch (err) {
    console.error(err);
    res.json({success: false, msg: "Failed to add user"});
  }
});

module.exports = router;
