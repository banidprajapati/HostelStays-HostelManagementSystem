import React from "react";

export const Header = () => {
  return (
    <div className="bg-gray-200 h-16 flex items-center justify-between px-4">
      <h1 className="text-lg font-bold text-black">
        <a href="/" className="text-black float-left">
          Hostel
          <br />
          Stays.
        </a>
      </h1>
      <div className="flex space-x-4">
        <a
          href="/login"
          className="text-black hover:text-blue-600 hover:underline">
          Login
        </a>
        <a
          href="/signup"
          className="text-black hover:text-blue-600 hover:underline">
          Signup
        </a>
      </div>
    </div>
  );
};
