import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BookStay = () => {
  const [guests, setGuests] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleGuestsChange = (event) => {
    const { value } = event.target;
    setGuests(value);
  };

  let roomsRecommended = "";
  if (guests !== "") {
    const roomsNeeded = Math.ceil(guests / 6);
    roomsRecommended =
      roomsNeeded > 1
        ? `${roomsNeeded} rooms recommended`
        : "1 room recommended";
  }

  return (
    <div
      className="flex flex-col items-start"
      style={{ width: "98%", height: "300px", marginTop: "0" }} // Increased width to 98%
    >
      {/* Adjusted margin of flex container */}
      <h2 className="text-3xl font-bold mb-2">
        {/* Adjusted margin of heading */}
        <span className="text-black">Book</span> your stay
      </h2>
      <div
        className="relative bg-gray-300 p-8 border rounded-lg w-full mx-auto flex flex-col justify-between"
        style={{ height: "calc(100% - 40px)" }}
      >
        {/* Adjusted width to full width, added flex properties */}
        <div className="flex justify-between mb-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full h-10 bg-gray-200 px-2 mr-2 focus:outline-none rounded" // Set width to full width
            placeholderText="Date"
          />
          <input
            type="text"
            className="w-1/2 h-10 bg-gray-200 px-2 focus:outline-none rounded"
            placeholder="Guests"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>
        {roomsRecommended && <p className="text-black">{roomsRecommended}</p>}
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
            style={{
              textAlign: "left",
              fontSize: "24px",
              marginLeft: "370px", // Change marginLeft to a positive value
            }}
          >
            {/* Remove paddingLeft */}
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
