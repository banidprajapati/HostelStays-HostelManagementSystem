import React from "react";

export const Gallery = () => {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold ">
        <span>Gal</span>lery
      </h2>
      <br />
      <div className="bg-gray-300 p-2 border rounded-lg w-3/5 mx-auto h-60 py-8"></div>
      <div className="flex justify-center mt-5">
        <div className="flex justify-between w-3/5">
          <div className="bg-gray-300 p-12 border "></div>
          <div className="bg-gray-300 p-12 border "></div>
          <div className="bg-gray-300 p-12 border "></div>
        </div>
      </div>
    </div>
  );
};
