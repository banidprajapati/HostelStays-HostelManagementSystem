import React, { useState, useEffect } from "react";
import axios from "axios";

export const RoomDetails = ({ hostelId }) => {
  const [hostelDetails, setHostelDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hostel_details/${hostelId}`);
        setHostelDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
        setIsLoading(false);
      }
    };

    fetchHostelDetails();
  }, [hostelId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!hostelDetails) {
    return <p>Hostel details not found</p>;
  }
  console.log(hostelDetails)

  return (
    <div className="flex font-poppins">
      <img
        src={hostelDetails.photos}
        alt="About Us Image"
        className="w-72 rounded-lg"
      />
      <div className="text-left ml-5 w-full ">
        <h1 className="text-2xl mt-3">{hostelDetails.hostel_name}</h1>
        <p className="text-xl mb-1">{hostelDetails.hostel_city}</p>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-lg font-bold mt-7">NRs. {hostelDetails.price}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-transparent  border-black border-2 text-black px-3 py-2 rounded-lg shadow-md transition-shadow duration-300 focus:outline-none hover:shadow-lg hover:bg-gray-100">
              View Details
            </button>

            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 focus:outline-none">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
