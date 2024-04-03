import React from "react";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Amenities from "./components/Amenities";
import Feedback_Reviews from "./components/Feedback_Reviews";
import HostelPolicies from "./components/HostelPolicies";
import BookStay from "./components/BookStay";
import Footer from "./components/Footer";

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-8 font-poppins">
      <Nav />
      <h1 className="mt-14 text-left text-5xl font-bold">Discover Nepal - <br/>One sleep at a time</h1>
      <h2 className="mt-7 font-bold text-xl text-left">Search for residence all over Nepal</h2>
      <SearchBar /> {/* Assuming SearchBar is a part of Nav or a separate component */}
      <Description />
      <h1 className="font-bold text-2xl text-left">Handpicked by us.</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Amenities />
        <Feedback_Reviews />
        <HostelPolicies />
        <Gallery />
        <BookStay />
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>
      <Footer />
    </div>
  );
};

export default ProductPage;
