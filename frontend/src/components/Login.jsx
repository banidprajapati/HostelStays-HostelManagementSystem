import React, {useState} from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Here you can check if the email and password are correct
    // ========================
    // error handling thiyo eta
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleContinue = () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password cannot be empty.");
      return;
    }
    handleLogin();
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
          <h1 className="text-3xl font-bold mb-4">Log in</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="mb-4 max-w-85">
            <p className="mb-2">Email Address:</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4 max-w-85">
            <p className="mb-2">Password:</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleContinue}>
            Continue
          </button>
          <div className="text-blue-500">Forget Password?</div>
        </div>
      </div>
    </div>
  );
};
