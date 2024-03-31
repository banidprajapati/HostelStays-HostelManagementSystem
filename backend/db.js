const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:admin@hostelstays.k6jcr9t.mongodb.net/?retryWrites=true&w=majority&appName=HostelStays";

mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

module.exports = mongoose;
