import React from "react";
import { Header } from "./Header";
import { DiscoverNepal } from "./DiscoverNepal";
import { Room } from "./Room";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import { SearchBar } from "./SearchBar";

export const LandingPage = () => {
  const dummyData = {
    name: "Cozy Room",
    address: "123 Main Street, Cityville",
    rating: 4.5,
    reviews: 35,
    price: "$100 per night",
  };

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
        <a href="/productPage">
          <Room {...dummyData} />
        </a>
        <Room {...dummyData} />
        <Room {...dummyData} />
        <Room {...dummyData} />
        <Room {...dummyData} />
        <Room {...dummyData} />
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>

      <AboutUs />
      <Footer />
    </div>
  );
};
