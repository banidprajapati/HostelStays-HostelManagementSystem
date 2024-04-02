import React, {useState} from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowError(true);
    } else if (
      email === "karkiaayush901@gmail.com" &&
      password === "Helloworld"
    ) {
      setShowSuccess(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
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
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md p-8">
          {showSuccess && (
            <div className="text-green-500 mb-2">Login Successful!</div>
          )}
          <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b border-gray-400 focus:outline-none mb-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}>
              Continue
            </button>
          </div>
          {showError && (
            <div className="text-red-500 mb-2">
              {email && password
                ? "Invalid username or password."
                : "Please fill in all fields."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
