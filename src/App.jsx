import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { LoginEmail } from "./components/LoginEmail";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <>
      <Home />
      <Footer />
      <LoginEmail />
      <AboutUs />
    </>
  );
}

export default App;
