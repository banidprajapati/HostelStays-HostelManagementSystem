import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import {SearchPage} from "./components/SearchPage";
import {Login} from "./components/Login";
import {LandingPage} from "./components/LandingPage";
import {AdminLogin} from "./components/Admin/AdminLogin";
import {SignUp} from "./components/Signup";
import {AdminDashboard} from "./components/Admin/AdminDashboard"
import {ProductPage} from "./components/ProductPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/productPage" element={<ProductPage/>}/>
        

      </Routes>
    </>
  );
}

export default App;