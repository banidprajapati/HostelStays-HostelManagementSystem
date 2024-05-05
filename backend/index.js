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

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Start of admin =======================================================================================================================
// Endpoint to fetch admin details
app.get("/admin_details", (req, res) => {
  // Query to select all admins from the admin_details table
  const query =
    "SELECT admin_ID, admin_FullName AS fullName, admin_Email AS email, admin_Password AS password FROM admin_details";
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
app.post("/user_login", (req, res) => {
  const { email, password } = req.body;

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

      // Check if the stored password matches the provided password
      if (storedPassword === password) {
        const user = {
          fullName: result[0].full_name,
          email: result[0].user_email,
          id: result[0].user_ID,
        };
        res.status(200).json({ message: "Login successful", user }); // Send user data in the response
      } else {
        res.status(401).send("Invalid email or password");
      }
    } else {
      // User not found, send unauthorized error
      res.status(401).send("Invalid email or password");
    }
  });
});

app.post("/user_register", (req, res) => {
  const { fullName, email, password } = req.body;

  const insertUserQuery =
    "INSERT INTO user_details (full_name, user_email, password) VALUES (?, ?, ?)";
  db.query(insertUserQuery, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    } else {
      console.log("User signed up successfully:", result);
      res.status(200).json({ message: "User signed up successfully." });
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

// Endpoint to handle forget password request
app.post("/forget_password", (req, res) => {
  const { email, newPassword } = req.body;

  const updatePasswordQuery =
    "UPDATE user_details SET password = ? WHERE user_email = ?";
  db.query(updatePasswordQuery, [newPassword, email], (err, result) => {
    if (err) {
      console.error("Error updating password:", err);
      res
        .status(500)
        .json({ error: "An error occurred. Please try again later." });
    } else {
      if (result.affectedRows > 0) {
        // Password updated successfully
        res.status(200).send("Password updated");
      } else {
        // No user found with the provided email
        res.status(404).send("User not found");
      }
    }
  });
});

// End of User Details =======================================================================================================================

// Start of  Hostel list=======================================================================================================================
app.get("/hostel_details", (req, res) => {
  // Query to select specific columns from the hostel_details table
  const query =
    "SELECT hostel_ID, hostel_name, hostel_location, facilities, photos, hostel_description, hostel_city, price FROM hostel_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing hostel query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/hostel_details/:id", (req, res) => {
  const hostelID = req.params.id;
  const query = "SELECT * FROM hostel_details WHERE hostel_ID = ?";
  db.query(query, [hostelID], (err, results) => {
    if (err) {
      console.error("Error executing hostel query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ success: false, message: "Hostel not found" });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

app.post("/hostel_details/add", (req, res) => {
  const {
    hostel_name,
    hostel_location,
    hostel_city,
    facilities,
    photos,
    hostel_description,
    price,
  } = req.body;

  const insertQuery =
    "INSERT INTO hostel_details (hostel_name, hostel_location, hostel_city, facilities, photos, hostel_description, price) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(
    insertQuery,
    [
      hostel_name,
      hostel_location,
      hostel_city,
      facilities,
      photos,
      hostel_description,
      price,
    ],
    (err, result) => {
      if (err) {
        console.error("Error adding hostel:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else {
        res.status(200).json({ success: true, message: "Hostel added" });
      }
    }
  );
});

app.put("/hostel_details/:id", (req, res) => {
  const hostelID = req.params.id; // Corrected parameter name
  const {
    hostel_name,
    hostel_location,
    facilities,
    photos,
    hostel_description,
    total_beds,
    beds_per_room,
    price,
  } = req.body;
  const updateQuery =
    "UPDATE hostel_details SET hostel_name = ?, hostel_location = ?, facilities = ?,  photos = ?, hostel_description = ?, total_beds = ?, beds_per_room = ?, price = ? WHERE hostel_ID = ?";
  db.query(
    updateQuery,
    [
      hostel_name,
      hostel_location,
      facilities,
      photos,
      hostel_description,
      total_beds,
      beds_per_room,
      price,
      hostelID,
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating hostel:", err);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      } else if (result.changedRows === 0) {
        // If no rows were changed, it means the hostel with the provided ID doesn't exist
        res.status(404).json({ success: false, message: "Hostel not found" });
      } else {
        res.status(200).json({ success: true, message: "Hostel updated" });
      }
    }
  );
});

app.delete("/hostel_details/:id", (req, res) => {
  const hostelID = req.params.id; // Corrected parameter name
  const deleteQuery = "DELETE FROM hostel_details WHERE hostel_ID = ?";
  db.query(deleteQuery, [hostelID], (err, result) => {
    if (err) {
      console.error("Error deleting hostel:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else if (result.affectedRows === 0) {
      // If no rows were affected, it means the hostel with the provided ID doesn't exist
      res.status(404).json({ success: false, message: "Hostel not found" });
    } else {
      res.status(200).json({ success: true, message: "Hostel deleted" });
    }
  });
});



app.get("/search/:cityName", (req, res) => {
  const city = req.params.cityName; // Access cityName from URL parameters
  const query = "SELECT * FROM hostel_details WHERE hostel_city = ?";
  db.query(query, [city], (err, results) => {
    if (err) {
      console.error("Error executing hostel query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ success: false, message: "Hostel not found" });
    } else {
      res.status(200).json(results); // Send all matching hostels
    }
  });
});




app.get("/combined_data", (req, res) => {
  let hostelCountQuery = "SELECT COUNT(*) AS hostelCount FROM hostel_details";
  let userCountQuery = "SELECT COUNT(*) AS userCount FROM user_details";
  let adminCountQuery = "SELECT COUNT(*) AS adminCount FROM admin_details";

  // Execute queries in parallel using Promise.all
  Promise.all([
    executeQuery(hostelCountQuery),
    executeQuery(userCountQuery),
    executeQuery(adminCountQuery),
  ])
    .then(([hostelResult, userResult, adminResult]) => {
      const hostelCount = hostelResult[0].hostelCount;
      const userCount = userResult[0].userCount;
      const adminCount = adminResult[0].adminCount;
      res
        .status(200)
        .json({ success: true, hostelCount, userCount, adminCount });
    })
    .catch((error) => {
      console.error("Error executing queries:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
});

app.get("/combined_data_booking", (req, res) => {
  const userId = req.query.userId; // Assuming user ID is provided in the query params
  const hostelId = req.query.hostelId; // Assuming hostel ID is provided in the query params

  let userDataQuery = `SELECT full_name, user_ID, user_email FROM user_details WHERE user_ID = ${userId}`;
  let hostelDataQuery = `SELECT hostel_name, hostel_location, hostel_ID FROM hostel_details WHERE hostel_ID = ${hostelId}`;

  // Execute queries in parallel using Promise.all
  Promise.all([executeQuery(userDataQuery), executeQuery(hostelDataQuery)])
    .then(([userDataResult, hostelDataResult]) => {
      res
        .status(200)
        .json({ userData: userDataResult, hostelData: hostelDataResult });
    })
    .catch((error) => {
      console.error("Error executing queries:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
});

app.post("/booking/add", (req, res) => {
  // Extract data from request body
  const {
    user_name,
    user_email,
    user_id,
    no_guests,
    check_in,
    check_out,
    no_rooms,
    hostel_name,
    hostel_id,
    status,
    hostel_cost,
  } = req.body;

  // Validate data
  if (
    !user_name ||
    !user_email ||
    !user_id ||
    !no_guests ||
    !check_in ||
    !check_out ||
    !no_rooms ||
    !hostel_name ||
    !hostel_id ||
    !status ||
    !hostel_cost
  ) {
    return res.status(400).send("Missing required fields");
  }

  // Perform database insertion
  const query = `
    INSERT INTO booking_details (user_name, user_email, user_id, no_guests, check_in, check_out, no_rooms, hostel_name, hostel_id, status, hostel_cost)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    user_name,
    user_email,
    user_id,
    no_guests,
    check_in,
    check_out,
    no_rooms,
    hostel_name,
    hostel_id,
    status,
    hostel_cost,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into booking_details:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log("Booking details inserted successfully");
      res.status(200).json({ success: true, message: "Booking successful" });
    }
  });
});

app.get("/booked_details", (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM booking_details WHERE status = "booked"`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing booking details query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      // Process the results
      if (results.length > 0) {
        // Bookings found, handle success
        res.status(200).json({ success: true, bookings: results });
      } else {
        // No bookings found
        res.status(404).json({ success: false, message: "No bookings found" });
      }
    }
  });
});

app.get("/cancelled_details", (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM booking_details WHERE status = "cancelled"`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing booking details query:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      // Process the results
      if (results.length > 0) {
        // Bookings found, handle success
        res.status(200).json({ success: true, bookings: results });
      } else {
        // No bookings found
        res.status(404).json({ success: false, message: "No bookings found" });
      }
    }
  });
});

app.post("/cancel_booking", (req, res) => {
  const { bookingId } = req.body;

  // Update the database to mark the booking as canceled
  const query =
    'UPDATE booking_details SET status = "cancelled" WHERE booking_id = ?';
  db.query(query, [bookingId], (err, result) => {
    if (err) {
      console.error("Error canceling booking:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to cancel booking" });
    } else {
      if (result.affectedRows > 0) {
        // Booking successfully canceled
        res
          .status(200)
          .json({ success: true, message: "Booking canceled successfully" });
      } else {
        // No booking found with the given ID
        res.status(404).json({ success: false, message: "Booking not found" });
      }
    }
  });
});

app.get("/user_hostel_booking", (req, res) => {
  const userId = req.query.userId; // Assuming user ID is provided in the query params

  const userBookedQuery = `SELECT * FROM booking_details WHERE status = 'booked' AND user_id = ${userId}`;
  const userCancelledQuery = `SELECT * FROM booking_details WHERE status = 'cancelled' AND user_id = ${userId}`;

  Promise.all([executeQuery(userBookedQuery), executeQuery(userCancelledQuery)])
    .then(([userDataResult, hostelDataResult]) => {
      res
        .status(200)
        .json({ booked: userDataResult, cancelled: hostelDataResult });
    })
    .catch((error) => {
      console.error("Error executing queries:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
});

//End of Hostel List=======================================================================================================================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
