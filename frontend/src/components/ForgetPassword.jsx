import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1); // Step 1: Ask for email, Step 2: Change password
  const navigate = useNavigate();

  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleVerifyEmail = async () => {
    try {
      if (!email.trim()) {
        setErrorMessage("Email cannot be empty.");
        return;
      }

      // Check if the email exists in the database
      const response = await axios.get("http://localhost:3000/user_details", {
        params: {
          email: email,
        },
      });

      if (response.data.length > 0) {
        setStep(2); // Move to the next step to change password
        setErrorMessage(""); // Clear any previous error message
      } else {
        setErrorMessage("Email not found. Please enter a valid email address.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to verify email. Please try again later.");
    }
  };

  const handleChangePassword = async () => {
    try {
      if (!newPassword.trim() || !confirmPassword.trim()) {
        setErrorMessage("Password fields cannot be empty.");
        return;
      }

      if (newPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      if (!isValidPassword.test(newPassword)) {
        setErrorMessage(
          "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number."
        );
        return;
      }

      // Update the password in the database
      const response = await axios.post(
        "http://localhost:3000/forget_password",
        {
          email: email,
          newPassword: newPassword,
        }
      );

      if (response.data === "Password updated") {
        setErrorMessage(""); // Clear any previous error message
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
        alert("Password updated successfully!");
        navigate("/login"); // Redirect to the login page
      } else {
        setErrorMessage("Failed to update password. Please try again later.");
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to update password. Please try again later.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleVerifyEmail();
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
        <div className="text-left w-96">
          {step === 1 ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <p className="">Email Address:</p>
              <div className="mb-4 max-w-85 flex flex-col">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="border-b border-gray-400 focus:outline-none mb-2 p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="mb-4 max-w-85 flex flex-col">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleVerifyEmail}>
                  Continue
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Change Password</h1>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <p className="">New Password:</p>
              <div className="mb-4 max-w-85 flex flex-col">
                <input
                   type={showPassword ? "text" : "password"} 
                  placeholder="Enter your new password"
                  className="border-b border-gray-400 focus:outline-none mb-2 p-2"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <p className="">Confirm New Password:</p>
              <div className="mb-4 max-w-85 flex flex-col">
                <input
                   type={showPassword ? "text" : "password"} 
                  placeholder="Confirm your new password"
                  className="border-b border-gray-400 focus:outline-none mb-2 p-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mt-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state
              />
              <label className="text-sm">Show Password</label>
            </div>
              <div className="mb-4 max-w-85 flex flex-col">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleChangePassword}>
                  Change Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
