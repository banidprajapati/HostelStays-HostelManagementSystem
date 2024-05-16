import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Billing = ({ isLoggedIn }) => {
  const location = useLocation();

  // Destructure properties from location.state with default values to prevent errors
  const {
    checkIn = "",
    checkOut = "",
    guests = 0,
    totalPrice = 0,
    roomsRequired = 0,
    hostel_ID = "",
  } = location.state || {};

  const hostelId = hostel_ID;
  const [userData, setUserData] = useState({});
  const [hostelData, setHostelData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get userId from localStorage
    if (!isLoggedIn) {
    }
    const userId = localStorage.getItem("userID");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/combined_data_booking?userId=${userId}&hostelId=${hostelId}`
        );
        const { userData, hostelData } = response.data;

        // Set the fetched data into state
        setUserData(userData[0]); // Assuming userData is an array with one object
        setHostelData(hostelData[0]); // Assuming hostelData is an array with one object
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, [hostelId]); // Only fetch data when hostelId changes

  const postBookingData = async (bookingData) => {
    try {
      const response = await fetch("http://localhost:3000/booking/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) {
        throw new Error("Failed to add booking");
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error adding booking: ${error.message}`);
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

  const handleBooking = () => {
    // Create booking data
    const bookingData = {
      user_name: userData.full_name,
      user_email: userData.user_email,
      user_id: localStorage.getItem("userID"),
      no_guests: guests,
      check_in: checkIn,
      check_out: checkOut,
      no_rooms: roomsRequired,
      hostel_name: hostelData.hostel_name,
      hostel_id: hostelId,
      status: "booked", // Set the initial status of the booking
      hostel_cost: calculateTotalPrice(totalPrice, guests, checkIn, checkOut), // Assuming you have this data in hostelData
    };

    postBookingData(bookingData)
      .then((data) => {
        console.log(data);
        // Redirect to Profile page after successful booking
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="text-left">
      <p className="text-3xl font-bold my-6">Billing</p>
      <div className="text-xl">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Personal Details Section */}
          <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Personal Details</p>
              <div className="py-2">
                <p>Name:</p>
                <h1 className="text-2xl font-medium">{userData.full_name}</h1>
              </div>
              <div className="py-2">
                <p>Email:</p>
                <h1 className="text-2xl font-medium">{userData.user_email}</h1>
              </div>
            </div>
          </div>
          {/* Reservation Details Section */}
          <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Reservation Details</p>
              <div className="py-2">
                <p>Check In/Out Date:</p>
                <h1 className="text-2xl font-medium">
                  {checkIn} | {checkOut}
                </h1>
              </div>
              <div className="py-2">
                <p>No of Guests:</p>
                <h1 className="text-2xl font-medium">{guests}</h1>
              </div>
              <div className="py-2">
                <p>No of Rooms:</p>
                <h1 className="text-2xl font-medium">{roomsRequired}</h1>
              </div>
            </div>
          </div>
          {/* Hostel Details Section */}
          <div className="col-span-2 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Hostel Details</p>
              <div className="py-2">
                <p>Hostel Name:</p>
                <h1 className="text-2xl font-medium">
                  {hostelData.hostel_name}
                </h1>
              </div>

              <div className="py-2">
                <p>Address:</p>
                <h1 className="text-2xl font-medium">
                  {hostelData.hostel_location}
                </h1>
              </div>
              <div className="text-right px-4 -mt-24">
                <p className="mb-2">Total Amount:</p>
                <h1 className="text-5xl text-green-600 font-bold mb-2">
                  Rs.{" "}
                  {calculateTotalPrice(totalPrice, guests, checkIn, checkOut)}
                </h1>
                <button
                  onClick={handleBooking}
                  className="text-white w-46 p-2 rounded-lg bg-blue-600  hover:bg-blue-700"
                >
                  Confirm Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
