import React, {useState, useRef, useEffect} from "react";
import {DateRange} from "react-date-range";
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
    const {value} = event.target;
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

  let roomsRequired = "";
  let totalPrice = 2500; // Initial total price
  if (guests !== "") {
    const roomsNeeded = Math.ceil(guests / 6);
    const guestText = guests > 1 ? "Guests" : "Guest";
    roomsRequired =
      roomsNeeded > 1
        ? `${guests} ${guestText}, ${roomsNeeded} Rooms required`
        : `${guests} ${guestText}, 1 Room required`;
    totalPrice = roomsNeeded * 2500; // Cost per room is NPR 2500
  }

  return (
    <div className="flex flex-col items-start w-11/12 h-auto">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-black">Book</span> your stay
      </h2>
      <div className="relative bg-gray-300 p-8 border rounded-lg w-full flex flex-col justify-between">
        <div className="flex justify-between mb-4">
          <div ref={dateInputRef} className="relative">
            <input
              type="text"
              className="w-full h-10 bg-gray-200 px-2 focus:outline-none rounded"
              placeholder="Date"
              onClick={toggleCalendar} // Toggle calendar visibility on click
            />
            {showCalendar && ( // Render calendar if showCalendar is true
              <div className="absolute top-full bg-gray-200 rounded mt-1 w-full z-10">
                <DateRange
                  ranges={dateRange}
                  onChange={(ranges) => setDateRange([ranges.selection])}
                  className="px-2 focus:outline-none"
                />
              </div>
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
        <h3 className="font-bold text-lg text-black mb-1 text-left">
          Total Price (including all taxes)
        </h3>
        <h4 className="text-black mb-4 text-left">{roomsRequired}</h4>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-black text-left text-4xl">
            NPR {totalPrice}
          </h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
