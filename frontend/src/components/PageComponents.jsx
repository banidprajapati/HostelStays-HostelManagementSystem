// PageComponents.jsx

import React from "react";
import Amenities from "./components/Amenities";
import Description from "./components/Description";
import Feedback_Reviews from "./components/Feedback_Reviews";
import HostelPolicies from "./components/HostelPolicies";
import Gallery from "./components/Gallery";
import BookStay from "./components/BookStay";

// Define individual components as named exports
export function RenderAmenities() {
  return <Amenities />;
}

export function RenderDescription() {
  return <Description />;
}

export function RenderFeedbackReviews() {
  return <Feedback_Reviews />;
}

export function RenderHostelPolicies() {
  return (
    <div className="App">
      <HostelPolicies />
    </div>
  );
}

export function RenderGallery() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export function RenderBookStay() {
  return (
    <div className="App">
      <BookStay />
    </div>
  );
}
