import React, { useState } from "react";

export const SearchBar = () => {
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    setCityName(cityNameInput.value);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-lg flex w-full">
        <input
          id="cityNameInput"
          type="text"
          placeholder="City Name"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 rounded-l-lg placeholder-gray-700 w-2/5" // Updated width to w-full
        />
        <inpu2
          type="date"
          placeholder="Check in"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 placeholder-gray-700 w-1/5"
        />
        <input
          type="date"
          placeholder="Check out"
          className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 placeholder-gray-700  w-1/5"
        />
        <button
          className="bg-blue-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none rounded-l-none h-12  w-1/5"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      
      <div className="mt-4 text-center"> 
        {cityName && <h1 className="text-2xl font-bold">{cityName}</h1>}
      </div>
    </div>
  );
};
