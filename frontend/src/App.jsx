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
import { AdminSettings } from "./components/Admin/AdminSettings";
import { AdminUserDetails } from "./components/Admin/AdminUserDetails";
import { AdminBookings } from "./components/Admin/AdminBookings";
import { ProductPage } from "./components/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/user-details" element={<AdminUserDetails />} />
        <Route path="/bookings" element={<AdminBookings />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* SignUp component is rendered outside of the Routes */}
      <LandingPage />
    </>
  );
}

export default App;
