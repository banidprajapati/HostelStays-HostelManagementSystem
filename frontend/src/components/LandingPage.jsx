import React from "react";
import {Header} from "./Header";
import {DiscoverNepal} from "./DiscoverNepal";
import {Room} from "./Room";
import {AboutUs} from "./AboutUs";
import {Footer} from "./Footer";
import {SearchBar} from "./SearchBar";

export const LandingPage = () => {
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
      <DiscoverNepal />
      <h1 className="font-bold text-2xl text-left">Handpicked by us.</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
       <a href="/productPage">
        <Room />
        </a>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>

      <AboutUs />
      <Footer />
    </div>
  );
};
