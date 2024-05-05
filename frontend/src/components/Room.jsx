import React from "react";
import { useNavigate } from "react-router-dom";

export const Room = ({ id, name, image, location, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="max-w-96 bg-gray-200 rounded-lg text-left cursor-pointer"
      onClick={handleClick}>
      <img
        src={image}
        alt="About Us Image"
        className="rounded-tl-lg rounded-tr-lg w-96"
      />
      <div className="px-4 py-2 flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{location}</p>
        <h1 className="text-2xl font-semibold">NRs. {price}</h1>
      </div>
    </div>
  );
};
