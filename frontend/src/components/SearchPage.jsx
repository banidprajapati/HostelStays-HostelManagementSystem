import React from "react";
import {Header} from "./Header";
import {RoomDetails} from "./RoomDetails";
import {Line} from "./Line";
import {SearchBar} from "./SearchBar";
import {Filter} from "./Filter";
import {Footer} from "./Footer";

export const SearchPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-7">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row justify-between  mt-8">
        {/* Left section */}
        <div className="md:w-1/4">
          <Filter />
        </div>

        {/* Right section */}
        <div className="md:w-3/4 md:pl-4 mb-10">
          <RoomDetails />
          <Line />
          <RoomDetails />
          <Line />
          <RoomDetails />
          <Line />
          <RoomDetails />
          <Line />
          <RoomDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
