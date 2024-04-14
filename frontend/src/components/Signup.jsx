import React, {useState} from "react";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    // You can add handling for other input fields if needed
  };

  const handleSignUp = () => {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Perform sign-up process
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
        <div className="text-left">
          <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="mb-2">Create a new account</p>

          <div className="flex flex-col my-3 mb-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={handleInputChange}
            />

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
              onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
