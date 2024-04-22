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

// Endpoint to fetch admin details
app.get("/admin_details", (req, res) => {
  // Query to select all admins from the admin_details table
  const query =
    "SELECT admin_FullName AS fullName, admin_Email AS email, admin_Password AS password FROM admin_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing admin query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Endpoint to handle updating admin details by name
app.put("/admin_details/:adminName", (req, res) => {
  const adminName = req.params.adminName;
  const { fullName, email, password } = req.body;
  const updateQuery =
    "UPDATE admin_details SET admin_FullName = ?, admin_Email = ?, admin_Password = ? WHERE admin_FullName = ?";
  db.query(
    updateQuery,
    [fullName, email, password, adminName],
    (err, result) => {
      if (err) {
        console.error("Error updating admin:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else {
        res.status(200).json({ success: true, message: "Admin updated" });
      }
    }
  );
});

// Endpoint to handle deleting an admin by Name
app.delete("/admin_details/:adminName", (req, res) => {
  const adminName = req.params.adminName;
  const deleteQuery = "DELETE FROM admin_details WHERE admin_FullName = ?";
  db.query(deleteQuery, [adminName], (err, result) => {
    if (err) {
      console.error("Error deleting admin:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Admin deleted successfully" });
    }
  });
});

// Endpoint to handle adding a new admin
app.post("/admin_details", (req, res) => {
  const { fullName, email, password } = req.body;
  const insertQuery =
    "INSERT INTO admin_details (admin_FullName, admin_Email, admin_Password) VALUES (?, ?, ?)";
  db.query(insertQuery, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("Error adding admin:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      res.status(200).json({ success: true, message: "Admin added" });
    }
  });
});

// Endpoint to handle user signup
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
      // Email exists in the database, send error
      res.status(409).json({ error: "Email already exists." });
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
