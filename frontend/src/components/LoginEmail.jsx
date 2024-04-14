import React, { useState } from "react";
import axios from "axios";

export const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Add state for password
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) { // Check if email or password is empty
        setErrorMessage("Email and password cannot be empty.");
        return;
      }

      const response = await axios.post("http://localhost:3000/user_details", {
        email,
        password, // Include password in the request
      });
      
      if (response.data.success) {
        console.log("Login successful!");
        // Redirect to admin dashboard
        window.location.href = "/admin-dashboard";
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img
          src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
          alt="Nepal"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center p-8 ">
        <div className="text-left m-0 p-0">
          <h1 className="text-3xl font-bold mb-4">Log in</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="mb-2">Email Address:</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="mb-2">Password:</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="password" // Change input type to password
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Use setPassword for password state
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}>
              Continue
            </button>
          </div>
          <div className="text-blue-500">Forget Password?</div>
        </div>
      </div>
    </div>
  );
};
