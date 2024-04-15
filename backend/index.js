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

// Endpoint to handle admin login
app.post("/admin_details", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  } else {
    // Query the admin_details table to check if the provided email and password are correct
    const query =
      "SELECT * FROM admin_details WHERE admin_Email = ? AND admin_Password = ?";
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error("Error executing admin query:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else {
        if (results.length > 0) {
          // If admin found, return success response
          res
            .status(200)
            .json({ success: true, message: "Admin login successful" });
        } else {
          // If admin not found or password incorrect, proceed to check user_details
          checkUserLogin(email, password, res);
        }
      }
    });
  }
});
app.post("/user_details", (req, res) => {
  const { fullName, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM user_details WHERE user_email = ?";
  db.query(checkUserQuery, [email], (err, result) => {
    if (err) {
      console.error("Error checking user:", err);
      res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
      return;
    }

    if (result.length > 0) {
      // Email exists in the database, check password
      const storedPassword = result[0].password;
      if (password === storedPassword) {
        // Password matches, login successful
        res.status(200).send("Login successful");
      } else {
        // Password doesn't match, send unauthorized error
        res.status(401).send("Invalid email or password");
      }
    } else {
      // Email doesn't exist in the database, insert new user
      const insertUserQuery =
        "INSERT INTO user_details (full_name, user_email, password) VALUES (?, ?, ?)";
      db.query(
        insertUserQuery,
        [fullName, email, password],
        (insertErr, insertResult) => {
          if (insertErr) {
            console.error("Error inserting user:", insertErr);
            res
              .status(500)
              .json({ error: "An error occurred. Please try again later." });
          } else {
            console.log("User signed up successfully:", insertResult);
            res.status(200).json({ message: "User signed up successfully." });
          }
        }
      );
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
