import React from "react";

export const BookStay = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold">
        <span>Book</span> your stay
      </h2>
      <div className="relative bg-gray-300 p-8 border rounded-lg w-3/4 mx-auto h-96">
        <div className="absolute top-16 left-16 w-3/4 h-10 flex border rounded px-2">
          <input
            type="text"
            className="w-1/3 h-10 bg-white px-2"
            placeholder="Date"
          />
          <div className="w-px bg-gray-500 mx-2"></div>
          <input
            type="text"
            className="w-1/3 h-10 bg-white px-2"
            placeholder="Guests"
          />
          <div className="w-px bg-gray-500 mx-2"></div>
          <input
            type="text"
            className="w-1/3 h-10 bg-white px-2"
            placeholder="Rooms"
          />
        </div>
        <hr className="absolute top-32 left-16 w-3/4 border border-white" />
        <h3 className="absolute top-36 left-16 font-bold text-lg text-black">
          Total Price (including all taxes)
        </h3>
        <h4 className="absolute top-44 left-16 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
        <h3 className="absolute bottom-16 right-12 font-bold text-lg text-black">
          NPR 2500
        </h3>
        <button className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};
