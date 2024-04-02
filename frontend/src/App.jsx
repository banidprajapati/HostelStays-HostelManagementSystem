import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {LoginEmail} from "./components/LoginEmail";
import {AboutUs} from "./components/AboutUs";
import {DiscoverNepal} from "./components/DiscoverNepal";
import {SearchBar} from "./components/SearchBar";
import {RoomSmall} from "./components/RoomSmall";
import {AdminDashboard} from "./components/AdminDashboard";
import AdminSideBar from "./components/AdminSideBar";
import {AdminBookings} from "./components/AdminBookings";
import {AdminUserDetails} from "./components/AdminUserDetails";
import {AdminSettings} from "./components/AdminSettings";

function App() {
  return (
    <>
      {/* Uncomment the components you want to render */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <AdminLogin /> */}
      <AdminSettings />
      {/* <AboutUs /> */}
      {/* <DiscoverNepal /> */}
      {/* <SearchBar /> */}
      {/* <RoomSmall /> */}
    </>
  );
}

export default App;
