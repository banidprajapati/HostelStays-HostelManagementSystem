import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
export const BookStay = () => {
  const [guests, setGuests] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const dateInputRef = useRef(null); // Ref for date input field
  const handleGuestsChange = (event) => {
    const { value } = event.target;
    setGuests(value);
  };
  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  // Function to handle click outside of calendar to close it
  const handleClickOutside = (event) => {
    if (dateInputRef.current && !dateInputRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };
  // Add event listener for clicks outside of calendar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
      style={{ width: "98%", height: "300px", marginTop: "0" }}
    >
      <h2 className="text-3xl font-bold mb-4" style={{ marginBottom: "28px" }}>
        <span className="text-black">Book</span> your stay
      </h2>
      <div
        className="relative bg-gray-300 p-8 border rounded-lg w-full mx-auto flex flex-col justify-between"
        style={{ height: "calc(100% - 40px)" }}
      >
        <div className="flex justify-between mb-4">
          <div ref={dateInputRef}>
            <input
              type="text"
              className="w-full h-10 bg-gray-200 px-2 focus:outline-none rounded"
              placeholder="Date"
              onClick={toggleCalendar} // Toggle calendar visibility on click
            />
            {showCalendar && ( // Render calendar if showCalendar is true
              <DateRange
                ranges={dateRange}
                onChange={(ranges) => setDateRange([ranges.selection])}
                className="w-full bg-gray-200 px-2 focus:outline-none rounded mt-1"
              />
            )}
          </div>
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
          <h3
            className="font-bold text-lg text-black"
            style={{ textAlign: "left", marginBottom: "1px" }}
          >
            Total Price (including all taxes)
          </h3>
          <h4
            className="text-black"
            style={{ textAlign: "left", marginBottom: "35px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <h3
            className="font-bold text-lg text-black"
            style={{
              textAlign: "left",
              fontSize: "24px",
            }}
          >
            NPR 2500
          </h3>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
