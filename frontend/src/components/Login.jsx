import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        setErrorMessage("Email and password cannot be empty.");
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
        return;
      }

      const response = await axios.post("http://localhost:3000/user_login", {
        email,
        password,
      });

      if (
        response.status === 200 &&
        response.data.message === "Login successful"
      ) {
        const user = response.data.user;
        handleLogin(user); // Call handleLogin with user data
        navigate("/"); // Redirect to homepage
      } else {
        setErrorMessage("Invalid email or password.");
        setTimeout(() => {
          setErrorMessage(""); // Clear the error message after 5 seconds
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Login failed. Please check your details and try again.");
      setTimeout(() => {
        setErrorMessage(""); // Clear the error message after 5 seconds
      }, 5000);
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
          <h1 className="text-3xl font-bold mb-4">Log in</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="">Email Address:</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="">Password:</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={loginUser}>
              Continue
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <a href="/signup" className="text-blue-500 inline-block">
              Create a new account?
            </a>
            <a href="/forgetpassword" className="text-blue-500 inline-block">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
