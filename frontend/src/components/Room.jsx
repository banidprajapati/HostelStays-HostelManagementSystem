import React, { useState, useEffect } from "react";
import axios from "axios";

// Hostel component to display details of each hostel
const Hostel = ({ hostel }) => (
  <div>
    <h2>{hostel.hostel_name}</h2>
    <p>Location: {hostel.hostel_location}</p>
    <p>Ratings: {hostel.ratings}</p>
    <img src={hostel.photos} alt={`Image of ${hostel.hostel_name}`} />
  </div>
);

export const Room = () => {
  const [hostelDetails, setHostelDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hostel_details")
      .then((response) => {
        setHostelDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hostel details:", error);
      });
  }, []);

  return (
    <div>
      <h1>Hostel Details</h1>
      {hostelDetails.map((hostel, index) => (
        <Hostel key={index} hostel={hostel} />
      ))}
    </div>
  );
};
