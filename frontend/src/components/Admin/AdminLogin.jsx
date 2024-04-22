import React, { useState } from "react";
import axios from "axios";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setMessage("Please fill in all fields.");
        return;
      }
      const response = await axios.post("http://localhost:3000/admin_details", {
        email,
        password,
      });
      if (response.data.success) {
        setMessage("Login successful!");
        console.log("Login successful!");
        // Redirect to admin dashboard
        window.location.href = "/dashboard";
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-0 flex h-screen">
      <div className="w-1/2 h-full">
        <img
          src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg"
          alt="Nepal"
          className="w-full h-full object-cover p-0"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="text-left m-0 p-0">
          {message && (
            <div
              className={`${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              } mb-2`}
            >
              {message}
            </div>
          )}
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
