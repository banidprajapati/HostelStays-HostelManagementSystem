import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RoomDetails } from "./RoomDetails";
import { SearchBar } from "./SearchBar";
import { Line } from "./Line";
import { Footer } from "./Footer";

export const SearchPage = () => {
  const [hostels, setHostels] = useState([]);
  const [error, setError] = useState("");
  const { cityName } = useParams(); // Get cityName from URL params

  useEffect(() => {
    if (cityName) {
      fetchHostelDetails(cityName);
    }
  }, [cityName]);

  const fetchHostelDetails = (city) => {
    axios.get(`http://localhost:3000/search/${city}`)
      .then((response) => {
        if (response.data.length === 0) {
          console.log("No hostels found for this city.");
          setError("No hostels found for this city.");
          setHostels([]); // Clear hostels if no data found
        } else {
          setHostels(response.data);
          setError("");
        }
      })
      .catch((error) => {
        setError("Error fetching hostel details.");
      });
  };

  return (
    <div>
      <div className="mt-7">
        <SearchBar cityName={cityName} /> {/* Pass cityName as prop */}
      </div>
      <div className="md:pl-4 mb-10 mt-10">
        {error && <p className="text-red-500">{error}</p>}
        {hostels.length > 0 ? (
          hostels.map((hostel) => (
            <div key={hostel.id}>
              <RoomDetails hostelId={hostel.hostel_ID} />
              <Line key={`line_${hostel.id}`} /> {/* Use key prop for Line component */}
            </div>
          ))
        ) : (
          <p>No hostels found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
