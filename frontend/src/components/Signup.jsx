import React, { useState } from "react";

export const SignUp = ({ email, handleLogin }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please fill in all fields.");
    } else if (password === confirmPassword) {
      alert("Signed up successfully!");
      handleLogin(); // Automatically login after signup for simplicity
    } else {
      alert("Passwords do not match. Please try again.");
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
          <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
          <p className="mb-2">Create a new password for </p>
          <p className="font-bold">{email}</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="password"
              placeholder="Enter password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
