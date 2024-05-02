import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BookStay = ({ isLoggedIn }) => {
  // Pass isLoggedIn as a prop
  const [guests, setGuests] = useState("");
  const navigate = useNavigate();

  const handleGuestsChange = (event) => {
    const { value } = event.target;
    setGuests(value);
  };

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

  // Function to handle click on confirm booking button
  const handleConfirmBooking = () => {
    if (isLoggedIn) {
      navigate("/billing");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-start w-11/12 h-auto">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-black">Book</span> your stay
      </h2>
      <div className="relative bg-gray-300 p-8 border rounded-lg w-full flex flex-col justify-between">
        <div className="flex justify-between mb-4">
          <div className="relative">
            <input
              type="date"
              placeholder="Check in"
              className="h-10 bg-gray-200  px-2 focus:outline-none rounded"
            />
            <input
              type="date"
              placeholder="Check out"
              className="h-10 bg-gray-200   px-2 focus:outline-none rounded"
            />
          </div>
          <input
            type="text"
            className="h-10 bg-gray-200   px-2 focus:outline-none rounded"
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
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
