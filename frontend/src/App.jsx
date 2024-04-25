import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchPage } from "./components/SearchPage";
import { SignUp } from "./components/Signup";
import { Login } from "./components/Login";
import { ForgetPassword } from "./components/ForgetPassword";
import { LandingPage } from "./components/LandingPage";
import { AdminLogin } from "./components/Admin/AdminLogin";
import { AdminDashboard } from "./components/Admin/AdminDashboard";
import { AdminDetails } from "./components/Admin/AdminDetails";
import { AdminUserDetails } from "./components/Admin/AdminUserDetails";
import { AdminBookings } from "./components/Admin/AdminBookings";
import { ProductPage } from "./components/ProductPage";
import { AdminHostels } from "./components/Admin/AdminHostels";
import { Billing } from "./components/Billing";
import { Header } from "./components/Header"; // Import the Header component without curly braces

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFullName, setUserFullName] = useState("");

  // Function to handle user login
  const handleLogin = (user) => {
    // Assuming userData contains the user's full name fetched from the database
    setUserFullName(user.fullName);
    setIsLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserFullName("");
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userFullName={userFullName}
        handleLogout={handleLogout}
      />{" "}
      {/* Pass authentication props to Header */}
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/productpage"
          element={<ProductPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/hostel-list" element={<AdminHostels />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admindetails" element={<AdminDetails />} />
        <Route path="/user-details" element={<AdminUserDetails />} />
        <Route path="/bookings" element={<AdminBookings />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </>
  );
}

export default App;
