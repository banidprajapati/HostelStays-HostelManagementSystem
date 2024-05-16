import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react"; // Importing Chakra UI components

export const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/search/${cityName}`
      );
      if (response.data.length === 0) {
        setError("No hostels found for this city.");
      } else {
        setError(null); // Clear any previous error messages
        navigate(`/search/${cityName}`);
      }
    } catch (error) {
      setError("Hostel is not found in the city"); // Set a general error message
      setTimeout(() => {
        setError(null); // Clear the error message after 5000ms (5 seconds)
      }, 5000);
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
            className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 rounded-l-lg placeholder-gray-700 w-3/5"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none rounded-l-none h-12 w-1/4"
          >
            Search
          </button>
        </div>
        {error && (
          <Alert status="error" className="mt-4">
            <AlertIcon />
            {error}
          </Alert>
        )}
      </form>
    </div>
  );
};
