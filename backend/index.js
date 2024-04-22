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

// Start of admin =======================================================================================================================
// Endpoint to fetch admin details
app.get("/hostel_details", (req, res) => {
  const query = "SELECT * FROM hostel_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing hostel query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
      return;
    }
    // Convert the result to an array if it's not already
    const data = Array.isArray(results) ? results : [results];
    res.status(200).json(data);
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

// Endpoint to handle deleting an admin by ID
app.delete("/admin_details/:adminID", (req, res) => {
  const adminID = req.params.adminID;
  const deleteQuery = "DELETE FROM admin_details WHERE admin_ID = ?";
  db.query(deleteQuery, [adminID], (err, result) => {
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

// Endpoint to handle admin login
app.post("/admin_details", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM admin_details WHERE admin_Email = ? LIMIT 1";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error executing login query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      if (results.length === 0) {
        // Email not found in the database
        res.status(401).json({ success: false, message: "Email not found" });
      } else {
        // Email found, check password
        const admin = results[0];
        if (admin.admin_Password === password) {
          // Password matches, login successful
          res.status(200).json({ success: true, message: "Login successful" });
        } else {
          // Password does not match
          res
            .status(401)
            .json({ success: false, message: "Incorrect password" });
        }
      }
    }
  });
});

// Endpoint to handle adding a new admin
app.post("/admin_details/add", (req, res) => {
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
// End of admin =======================================================================================================================

// Start of User Details =======================================================================================================================

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

// Endpoint to fetch user details
app.get("/user_details", (req, res) => {
  // Query to select all users from the user_details table
  const query = "SELECT * FROM user_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching user details:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});
// End of User Details =======================================================================================================================

// Start of  Hostel list=======================================================================================================================
app.get("/hostel_details", (req, res) => {
  const { sort } = req.query;
  let orderBy = "hostel_ID"; // Default order by hostel_ID
  if (sort) {
    const sortParams = sort.split(" ");
    if (sortParams.length === 2) {
      const [sortField, sortOrder] = sortParams;
      if (
        [
          "hostel_name",
          "hostel_location",
          "facilities",
          "ratings",
          "photos",
          "reviews",
          "hostel_description",
          "total_beds",
          "beds_per_room",
          "price",
        ].includes(sortField) &&
        ["ASC", "DESC"].includes(sortOrder.toUpperCase())
      ) {
        orderBy = `${sortField} ${sortOrder.toUpperCase()}`;
      }
    }
  }
  const query = `SELECT * FROM hostel_details ORDER BY ${orderBy}`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing hostel query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
      return;
    }
    res.status(200).json(results);
  });
});

// POST create a new hostel
app.post("/hostel_details", (req, res) => {
  const {
    hostel_name,
    hostel_location,
    facilities,
    ratings,
    photos,
    reviews,
    hostel_description,
    total_beds,
    beds_per_room,
    price,
  } = req.body;
  const insertQuery =
    "INSERT INTO hostel_details (hostel_name, hostel_location, facilities, ratings, photos, reviews, hostel_description, total_beds, beds_per_room, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    insertQuery,
    [
      hostel_name,
      hostel_location,
      facilities,
      ratings,
      photos,
      reviews,
      hostel_description,
      total_beds,
      beds_per_room,
      price,
    ],
    (err, result) => {
      if (err) {
        console.error("Error adding hostel:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
        return;
      }
      res.status(201).json({
        success: true,
        message: "Hostel added",
        insertedId: result.insertId,
      });
    }
  );
});

// PUT update hostel details
app.put("/hostel_details/:hostelId", (req, res) => {
  const hostelId = req.params.hostelId;
  const {
    hostel_location,
    facilities,
    ratings,
    photos,
    reviews,
    hostel_description,
    total_beds,
    beds_per_room,
    price,
  } = req.body;
  const updateQuery =
    "UPDATE hostel_details SET hostel_location = ?, facilities = ?, ratings = ?, photos = ?, reviews = ?, hostel_description = ?, total_beds = ?, beds_per_room = ?, price = ? WHERE hostel_ID = ?";
  db.query(
    updateQuery,
    [
      hostel_location,
      facilities,
      ratings,
      photos,
      reviews,
      hostel_description,
      total_beds,
      beds_per_room,
      price,
      hostelId,
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating hostel:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ success: false, message: "Hostel not found" });
        return;
      }
      res.status(200).json({ success: true, message: "Hostel updated" });
    }
  );
});

// DELETE delete a hostel
app.delete("/hostel_details/:hostelId", (req, res) => {
  const hostelId = req.params.hostelId;
  const deleteQuery = "DELETE FROM hostel_details WHERE hostel_ID = ?";
  db.query(deleteQuery, [hostelId], (err, result) => {
    if (err) {
      console.error("Error deleting hostel:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ success: false, message: "Hostel not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Hostel deleted" });
  });
});

//End of Hostel List=======================================================================================================================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
