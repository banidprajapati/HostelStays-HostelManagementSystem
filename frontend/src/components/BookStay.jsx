import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react"; // Import Alert component from Chakra UI

export const BookStay = ({ isLoggedIn, hostelID }) => {
  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split("T")[0]
  );
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const [checkOut, setCheckOut] = useState(
    tomorrowDate.toISOString().split("T")[0]
  );
  const [guests, setGuests] = useState(1);
  const [roomsRequired, setRoomsRequired] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const navigate = useNavigate();

  const handleGuestsChange = (event) => {
    let value = parseInt(event.target.value);
    if (isNaN(value) || value < 0) {
      value = 0;
    }
    setGuests(value);
  };

  const handleConfirmBooking = () => {
    if (!checkIn || !checkOut || guests < 1) {
      setError("Please fill in all fields and ensure at least 1 guest.");
      setTotalPrice("NAN");
    } else if (new Date(checkIn) >= new Date(checkOut)) {
      setError(
        "Provide the correct date. Check-in date should be before check-out date."
      );
      setTotalPrice("NAN");
    } else {
      setError("");
      if (isLoggedIn) {
        navigate("/billing", {
          state: {
            hostel_ID: hostelID,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
            roomsRequired: roomsRequired,
            totalPrice: totalPrice,
          },
        });
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/hostel_details/${hostelID}`
        );
        const { price } = response.data;
        if (guests === 0) {
          setRoomsRequired("0 Rooms required");
          setTotalPrice(0);
        } else {
          const roomsNeeded = Math.ceil(guests / 6);
          setRoomsRequired(
            roomsNeeded > 1
              ? `${guests} Guests, ${roomsNeeded} Rooms required`
              : `${guests} Guest, 1 Room required`
          );
          setTotalPrice(price); // Price for 1 person
        }
      } catch (error) {
        console.error("Error fetching hostel details:", error);
        setTotalPrice("NAN");
      }
    };
    fetchHostelDetails();
  }, [hostelID, guests]);

  const calculateTotalPrice = (
    hostelPrice,
    guests,
    checkInDate,
    checkOutDate
  ) => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Check if check-in and check-out dates are valid
    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
      return "NAN"; // Invalid date format, return "NAN"
    }

    const durationMs = checkOut - checkIn;
    const durationDays = durationMs / (1000 * 60 * 60 * 24);

    // Check if duration is valid (positive number)
    if (durationDays <= 0) {
      return "NAN"; // Invalid duration, return "NAN"
    }

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
              className="h-10 bg-gray-200 px-2 focus:outline-none rounded"
              value={checkIn}
              min={new Date().toISOString().split("T")[0]} // Sets min date to current date
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check out"
              className="h-10 bg-gray-200 px-2 focus:outline-none rounded"
              value={checkOut}
              min={new Date().toISOString().split("T")[0]} // Sets min date to current date
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <input
            type="number"
            className="h-10 bg-gray-200 px-2 focus:outline-none rounded"
            placeholder="Guests"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>
        {error && (
          <Alert status="error" className="mb-4">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <h3 className="font-bold text-lg text-black mb-1 text-left">
          Total Price
        </h3>
        <h4 className="text-black mb-4 text-left">{roomsRequired}</h4>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-black text-left text-4xl">
            NPR{" "}
            {totalPrice === "NAN"
              ? "NAN"
              : calculateTotalPrice(totalPrice, guests, checkIn, checkOut)}
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
