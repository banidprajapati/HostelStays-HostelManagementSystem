import React from "react";

export const Login = ({ email, setEmail, handleLogin }) => {
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
          <h1 className="text-3xl font-bold mb-4">Enter your password.</h1>
          <p className="mb-2">Enter your password for the email address:</p>
          <p className="font-bold">{email}</p>
          <div className="mb-4 max-w-85 flex flex-col">
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b border-gray-400 focus:outline-none mb-2 p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
          <div className="text-blue-500">Forget Password?</div>
        </div>
      </div>
    </div>
  );
};
