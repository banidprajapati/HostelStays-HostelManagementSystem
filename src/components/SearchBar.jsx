import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-lg flex items-center">
        <input
          type="text"
          placeholder="City Name"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-300 focus:bg-gray-300 focus:outline-none h-12 rounded-l-lg placeholder-gray-700 "
        />
        <input
          type="date"
          placeholder="Check in"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-300 focus:bg-gray-300 focus:outline-none h-12 placeholder-gray-700"
        />
        <input
          type="date"
          placeholder="Check out"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-300 focus:bg-gray-300 focus:outline-none h-12 placeholder-gray-700"
        />
        <button className="bg-blue-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none rounded-l-none h-12">
          Search
        </button>
      </div>
    </div>
  );
};
