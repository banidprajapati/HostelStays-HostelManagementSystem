import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./Header";
import { DiscoverNepal } from "./DiscoverNepal";
import { Room } from "./Room";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { SearchBar } from "./SearchBar";

export const LandingPage = () => {
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
    <div className="flex flex-col gap-8 font-poppins">
      <Header />
      <h1 className="mt-14 text-left text-5xl font-bold">
        Discover Nepal - <br />
        One sleep at a time
      </h1>
      <h2 className="mt-7 font-bold text-xl text-left">
        Search for residence all over Nepal
      </h2>
      <SearchBar />
      <a href="/search">
        <DiscoverNepal />
      </a>
      <h1 className="font-bold text-2xl text-left">Handpicked by us.</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {hostelDetails.map((hostel, index) => (
          <a href={`/productPage/${index}`} key={index}>
            <Room hostel={hostel} />
          </a>
        ))}
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>
      <AboutUs />
      <Footer />
    </div>
  );
};
