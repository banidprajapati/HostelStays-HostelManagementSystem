const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Enter your MySQL password here
  database: "hostelstays",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
    throw err;
  }
  console.log("MySQL Connected...");
});

// Endpoint to handle login
app.post("/admin_details", (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({success: false, message: "Email and password are required"});
  } else {
    // Query the database to check if the provided email and password are correct
    const query =
      "SELECT * FROM admin_details WHERE admin_Email = ? AND admin_Password = ?";
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res
          .status(500)
          .json({success: false, message: "Internal server error"});
      } else {
        if (results.length > 0) {
          // If user found, return success response
          res.status(200).json({success: true, message: "Login successful"});
        } else {
          // If user not found or password incorrect, return error response
          res
            .status(401)
            .json({success: false, message: "Invalid email or password"});
        }
      }
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
