import React from "react";
import {SearchBar} from "./SearchBar";
import {Header} from "./Header";
import {DiscoverNepal} from "./DiscoverNepal";
import {AboutUs} from "./AboutUs";
import {Footer} from "./Footer";

export const LandingPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <SearchBar />
      <DiscoverNepal />
      <AboutUs />
      <Footer />
    </div>
  );
};
