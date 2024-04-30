import React from "react";

export const Description = ({ name, address, description, amenities }) => {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold text-black">Description</h2>
      <br />
      <h3 className="text-2xl">{name}</h3>
      <br />
      <h3>Location</h3>
      <div className="text-sm">{address}</div>
      <br />
      <h3>Description</h3>
      <p className="text-sm">{description}</p>
      <br />
      <h3>Amenities</h3>
      <p className="text-sm">{amenities}</p>
    </div>
  );
};
