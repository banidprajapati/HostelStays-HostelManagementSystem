import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const BookStay = ({ isLoggedIn, hostelID }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomsRequired, setRoomsRequired] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  // Initial total price
  const navigate = useNavigate();

  const handleGuestsChange = (event) => {
    const { value } = event.target;
    setGuests(value);
  };
  useEffect(() => {
    // Fetch hostel details including total cost from the database
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/hostel_details/${hostelID}`
        );
        const { price } = response.data; // Accessing the price field from the response
        // Set total price based on fetched total cost and number of guests
        const roomsNeeded = Math.ceil(guests / 6);
        setRoomsRequired(
          roomsNeeded > 1
            ? `${guests} Guests, ${roomsNeeded} Rooms required`
            : `${guests} Guest, 1 Room required`
        );
        setTotalPrice(guests * price);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, [hostelID, guests]);

  const handleConfirmBooking = () => {
    if (isLoggedIn) {
      navigate("/billing", {
        state: {
          hostel_ID: hostelID,
          checkIn: checkIn,
          checkOut: checkOut,
          guests: guests,
          roomsRequired: roomsRequired,
          totalPrice: totalPrice, // Pass the calculated total price to the billing page
        },
      });
    } else {
      navigate("/login");
    }
  };

  const calculateTotalPrice = (
    hostelPrice,
    guests,
    checkInDate,
    checkOutDate
  ) => {
    // Convert check-in and check-out dates to JavaScript Date objects
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Calculate the duration of stay in milliseconds
    const durationMs = checkOut - checkIn;

    // Convert the duration to days
    const durationDays = durationMs / (1000 * 60 * 60 * 24);

    // Calculate the total price
    const totalPrice = hostelPrice * guests * durationDays;

    return totalPrice;
  };

  return (
    <div className="flex flex-col items-start w-11/12 h-auto">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-black">Book your stay</span>
      </h2>
      <div className="relative bg-gray-300 p-8 border rounded-lg w-full flex flex-col justify-between">
        <div className="flex justify-between mb-4">
          <div className="relative">
            <input
              type="date"
              placeholder="Check in"
              className="h-10 bg-gray-200  px-2 focus:outline-none rounded"
              value={checkIn}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check out"
              className="h-10 bg-gray-200 px-2 focus:outline-none rounded"
              value={checkOut}
              min={
                checkIn
                  ? new Date(new Date(checkIn).getTime() + 86400000)
                      .toISOString()
                      .split("T")[0]
                  : new Date().toISOString().split("T")[0]
              }
              onChange={(e) => setCheckOut(e.target.value)}
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
          Total Price
        </h3>
        <h4 className="text-black mb-4 text-left">{roomsRequired}</h4>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-black text-left text-4xl">
            NPR {calculateTotalPrice(totalPrice, guests, checkIn, checkOut)}
          </h3>
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
