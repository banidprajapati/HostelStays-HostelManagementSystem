import React from "react";

export const Home = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div className="text-4xl text-red-600">Hostel Stays</div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Signup
        </button>
      </div>
    </header>
  );
};
