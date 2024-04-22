// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchPage } from "./components/SearchPage";
import { Login } from "./components/Login";
import { LandingPage } from "./components/LandingPage";
import { AdminLogin } from "./components/Admin/AdminLogin";
import { SignUp } from "./components/Signup";
import { AdminDashboard } from "./components/Admin/AdminDashboard";
import { AdminDetails } from "./components/Admin/AdminDetails";
import { AdminUserDetails } from "./components/Admin/AdminUserDetails";
import { AdminBookings } from "./components/Admin/AdminBookings";
import { ProductPage } from "./components/ProductPage";
import { AdminHostels } from "./components/Admin/AdminHostels";

function App() {
  // Assuming hostels is defined or fetched here
  const hostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostel_details");
      if (!response.ok) {
        throw new Error("Failed to fetch hostels");
      }
      const data = await response.json();
      setHostels(data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  }; // Define hostels or fetch from an API

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage hostels={hostels} />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admindetails" element={<AdminDetails />} />
        <Route path="/user-details" element={<AdminUserDetails />} />
        <Route path="/bookings" element={<AdminBookings />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hostel-list" element={<AdminHostels />} />
      </Routes>
    </>
  );
}

export default App;
