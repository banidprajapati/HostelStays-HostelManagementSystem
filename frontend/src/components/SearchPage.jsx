import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RoomDetails } from "./RoomDetails";
import { SearchBar } from "./SearchBar";
import { Filter } from "./Filter";
import { Footer } from "./Footer";
import { Line } from "./Line";

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
        setHostels(response.data);
        setError("");
      })
      .catch((error) => {
        setHostels([]);
        setError("Hostel not found or internal server error.");
      });
  };

  return (
    <div>
      <div className="mt-7">
        <SearchBar cityName={cityName} /> {/* Pass cityName as prop */}
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between mt-8"> */}
        {/* <div className="md:w-1/4">
          <Filter />
        </div> */}

        <div className=" md:pl-4 mb-10 mt-10">
          {hostels.map((hostel) => (
            <div key={hostel.id}>
              <RoomDetails
                hostelId={hostel.hostel_ID}
              />
              <Line key={`line_${hostel.id}`} /> {/* Use key prop for Line component */}
            </div>
          ))}
        </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};
