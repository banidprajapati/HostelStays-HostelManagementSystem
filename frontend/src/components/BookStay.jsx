import React from "react";

export const BookStay = () => {
  return (
    <div
      className="flex flex-col items-start mt-2" // Adjusted margin of flex container
      style={{ width: "90%", height: "300px", marginTop: "100px" }} // Decreased height to 300px and added marginTop
    >
      <h2 className="text-3xl font-bold mb-2">
        {/* Adjusted margin of heading */}
        <span className="text-black">Book</span> your stay
      </h2>
      <div
        className="relative bg-gray-300 p-8 border rounded-lg w-full mx-auto flex flex-col justify-between" // Adjusted width to full width, added flex properties
        style={{ height: "calc(100% - 40px)" }}
      >
        <div className="flex justify-between mb-4">
          <input
            type="text"
            className="w-1/3 h-10 bg-gray-200 px-2 focus:outline-none rounded"
            placeholder="Date"
          />
          <input
            type="text"
            className="w-1/3 h-10 bg-gray-200 px-2 focus:outline-none rounded"
            placeholder="Guests"
          />
          <input
            type="text"
            className="w-1/3 h-10 bg-gray-200 px-2 focus:outline-none rounded"
            placeholder="Rooms"
          />
        </div>
        <hr className="border border-white" />
        <div className="flex flex-col">
          {/* Adjusted margin-top */}
          <h3
            className="font-bold text-lg text-black"
            style={{ textAlign: "left", marginBottom: "1px" }}
          >
            {/* Adjusted marginBottom */}
            Total Price (including all taxes)
          </h3>
          <h4
            className="text-black"
            style={{ textAlign: "left", marginBottom: "35px" }}
          >
            {/* Adjusted marginBottom */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <h3
            className="font-bold text-lg text-black"
            style={{ paddingLeft: "260px" }} // Add padding to the left
          >
            NPR 2500
          </h3>
        </div>
        <div className="flex justify-end">
          {/* Adjusted to justify-end */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
