import React from "react";
import { Gallery } from "./Gallery";
import { Description } from "./Description";
import { Amenities } from "./Amenities";
import { HostelPolicies } from "./HostelPolicies";
import { BookStay } from "./BookStay";
import { Footer } from "./Footer";

export const ProductPage = ({ isLoggedIn }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 grid-rows-3 gap-12 mt-8">
        <Gallery className="col-span-2 row-span-2" />
        <Description className="col-span-1" />
        <Amenities className="col-span-1" />
        <BookStay className="col-span-1" isLoggedIn={isLoggedIn} />
        <HostelPolicies className="col-span-1" />
      </div>
      <Footer />
    </div>
  );
};
