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
import { AdminCancelled } from "./components/Admin/AdminCancelled";
import { ProductPage } from "./components/ProductPage";
import { AdminHostels } from "./components/Admin/AdminHostels";
import { Billing } from "./components/Billing";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Privacy } from "./components/Privacy";
import { RoomDetails } from "./components/RoomDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" || false
  );
  const [userFullName, setUserFullName] = useState(
    localStorage.getItem("userFullName") || ""
  );

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true" || false
  );

  const handleLogin = (user) => {
    setUserFullName(user.fullName);
    setIsLoggedIn(true);
    setIsAdminLoggedIn(false);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userFullName", user.fullName);
    localStorage.setItem("userID", user.id);
    localStorage.setItem("isAdminLoggedIn", "false");
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserFullName("");
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userFullName");
    // Also ensure admin login status is set to false
    localStorage.setItem("isAdminLoggedIn", "false");
  };

  // Function to handle admin login
  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setIsLoggedIn(false);
    localStorage.setItem("isAdminLoggedIn", "true");
    // Also ensure user login status is set to false
    localStorage.setItem("isLoggedIn", "false");
  };

  // Function to handle admin logout
  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.setItem("isAdminLoggedIn", "false");
  };
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userFullName={userFullName}
        handleLogout={handleLogout}
      />

      {/* Pass authentication props to Header */}
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search/:cityName" element={<SearchPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/product/:id"
          element={<ProductPage isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/admin"
          element={<AdminLogin handleAdminLogin={handleAdminLogin} />}
        />

        <Route
          path="/hostel-list"
          element={
            <AdminHostels
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminDashboard
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route
          path="/admindetails"
          element={
            <AdminDetails
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route
          path="/user-details"
          element={
            <AdminUserDetails
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route
          path="/bookings"
          element={
            <AdminBookings
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route
          path="/cancelled"
          element={
            <AdminCancelled
              isAdminLoggedIn={isAdminLoggedIn}
              handleAdminLogout={handleAdminLogout}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
