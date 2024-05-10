import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react"; // Import Alert component from Chakra UI

export const SignUp = ({ email: emailProp }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  // Regular expression for email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Regular expression for password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
      );
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user_register", {
        fullName,
        email,
        password,
      });

      if (response.data.message) {
        setSuccessMessage("User signed up successfully."); // Set success message
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 2 seconds
          navigate("/login");
        }, 500); // Reduced timeout to 2 seconds
      } else {
        setErrorMessage("The Email is already registered in the database.");
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("Error signing up. Please try again later.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the Enter key on forms
      handleSignUp();
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

      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="text-left w-96">
          <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
          {errorMessage && (
            <Alert status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert status="success">
              <AlertIcon />
              {successMessage}
            </Alert>
          )}
          <p className="mb-2">Create a new account</p>
          <div className="flex flex-col my-3 mb-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <input
              type="text"
              placeholder="Email"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              defaultValue={emailProp}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <input
              type="password"
              placeholder="Enter password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={handleKeyPress} // Attach key event handler to the confirm password input
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleSignUp}
              onKeyDown={handleKeyPress} // Move key event handling to the button
            >
              Sign Up
            </button>
            <p className="text-blue-500 text-left mt-3">
              <a href="/login">Already have an account?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
