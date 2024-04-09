import React from "react";
import { Gallery } from "./Gallery";
import { Description } from "./Description";
import { Amenities } from "./Amenities";
import { Feedback_Reviews } from "./Feedback_Reviews";
import { HostelPolicies } from "./HostelPolicies";
import { BookStay } from "./BookStay";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const ProductPage = () => {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-2 grid-rows-3 gap-12 mt-8">
        <Gallery className="col-span-2 row-span-2" />
        <Description className="col-span-1" />
        <Amenities className="col-span-1" />
        <BookStay className="col-span-1" />
        <HostelPolicies className="col-span-1" />
        <Feedback_Reviews className="col-span-2" />
      </div>
      <Footer />
    </div>
  );
};
