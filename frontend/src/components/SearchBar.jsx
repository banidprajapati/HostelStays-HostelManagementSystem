import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

export const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  const [hostelDetails, setHostelDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (cityName.trim() !== "") {
      setIsLoading(true);
      axios
        .get(`http://localhost:3000/search/${cityName}`, {
          params: {
            cityName: cityName,
          },
        })

        .then((response) => {
          setHostelDetails(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [cityName]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3000/search/${cityName}`
      );
      setHostelDetails(response.data);
      setIsLoading(false);
      navigate(`/search/${cityName}`); // Navigate to the /search/cityName route after successful search
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSearch} className="w-full">
        <div className="rounded-lg flex items-center justify-center w-full">
          <input
            id="cityNameInput"
            type="text"
            placeholder="City Name"
            className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 rounded-l-lg placeholder-gray-700 w-1/4" // Updated width to w-full
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none rounded-l-none h-12">
            Search
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        {cityName && <h1 className="text-2xl font-bold">{cityName}</h1>}
      </div>
    </div>
  );
};