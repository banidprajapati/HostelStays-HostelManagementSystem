import React from "react";

export const Description = ({ name, address,city, description, amenities }) => {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold text-black">Description</h2>
      <br />
      <h3 className="text-3xl font-semibold">{name}</h3>
      <br />
      <h3 className="text-xl font-semibold mb-1">Location</h3>
      <div className="text-base text-gray-600">{address}</div>
      <div >{city}</div>
      <br />
      <h3  className="text-xl font-semibold mb-1" >Description</h3>
      <p className="text-base text-gray-600">{description}</p>
      <br />
      <h3 className="text-xl font-semibold mb-1" >Amenities</h3>
      <p className="text-base text-gray-600">{amenities}</p>
    </div>
  );
};
