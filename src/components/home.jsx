import React from "react";

export const Home = () => {
  return (
    <nav >
      <h1 className="text-xl font-bold">
        <a href="/" className="text-black float-left">Hostel Stays</a>
      </h1>
      <div className="flex space-x-4 float-right">
        <h3>
          <a href="/login" className="text-black hover:text-blue-600">Login</a>
        </h3>
        <h3>
          <a href="/signup" className="text-black hover:text-blue-600">Signup</a>
        </h3>
      </div>
    </nav>
  );
};
