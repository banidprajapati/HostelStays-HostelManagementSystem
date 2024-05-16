import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";

export const AdminLogin = ({ handleAdminLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

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
        // Call handleAdminLogin to update isAdminLoggedIn state
        handleAdminLogin();
        // Redirect to admin dashboard
        navigate("/dashboard");
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Invalid email or password.");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
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

      <div className="w-1/2 flex items-center justify-center p-8 ">
        <div className="text-left m-0  w-96 p-0">
          {message && (
            <Alert
              status={message.includes("successful") ? "success" : "error"}
              className="mb-2"
            >
              <AlertIcon />
              {message}
            </Alert>
          )}
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4 max- flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
              />
              <label>Show Password</label>
            </div>
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
