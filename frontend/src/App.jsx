import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import {SearchPage} from "./components/SearchPage";
import {Login} from "./components/Login";
import {LandingPage} from "./components/LandingPage";
import {AdminLogin} from "./components/Admin/AdminLogin";
import {AdminDashboard} from "./components/Admin/AdminDashboard";
import {SignUp} from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* SignUp component is rendered outside of the Routes */}
    </>
  );
}

export default App;
