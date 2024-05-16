import React, { useState, useEffect } from "react";
import axios from "axios";
import { DiscoverNepal } from "./DiscoverNepal";
import { Room } from "./Room";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { SearchBar } from "./SearchBar";

export const LandingPage = () => {
  const [hostelDetails, setHostelDetails] = useState([]);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/hostel_details"
        );
        // Reverse the order of hostel details array
        const reversedHostelDetails = response.data.reverse();
        setHostelDetails(reversedHostelDetails);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, []);

  return (
    <div className="flex flex-col gap-8 font-poppins">
      <h1 className="mt-14 text-left text-5xl font-bold">
        Discover Nepal - <br />
        One sleep at a time
      </h1>
      <h2 className="mt-7 font-bold text-xl text-left">
        Search for residence all over Nepal
      </h2>
      <SearchBar />
      {/* <DiscoverNepal /> */}
      <h1 className="font-bold text-2xl text-left">Handpicked by us.</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {hostelDetails.map((hostel) => (
          <Room
            key={hostel.hostel_ID}
            id={hostel.hostel_ID}
            name={hostel.hostel_name}
            image={hostel.photos}
            location={hostel.hostel_location}
            price={hostel.price}
          />
        ))}
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>

      <AboutUs />
      <Footer/>
    </div>
  );
};