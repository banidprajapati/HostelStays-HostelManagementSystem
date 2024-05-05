import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminSideBar } from "./AdminSideBar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const AdminBookings = ({ isAdminLoggedIn, handleAdminLogout }) => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [bookingsCount, setBookingsCount] = useState(0);

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  useEffect(() => {
    fetchBookings()
      .then((bookingsData) => {
        setBookings(bookingsData);
        setBookingsCount(bookingsData.length);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error.message);
      });
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3000/booked_details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      return data.bookings; // Assuming the response structure has a 'bookings' property containing the bookings array
    } catch (error) {
      throw new Error(`Error fetching bookings: ${error.message}`);
    }
  };
  console.log(bookings);
  return (
    <div className="flex h-screen">
      <AdminSideBar
        handleAdminLogout={handleAdminLogout}
        bookingsCount={bookingsCount}
      />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-left">Bookings</h1>
        <TableContainer maxW="800px">
          <Table variant="simple">
            <TableCaption>Bookings</TableCaption>
            <Thead>
              <Tr>
                <Th>Booking ID</Th>
                <Th>User Name</Th>
                <Th>User Email</Th>
                <Th>No of Guests</Th>
                <Th>Check-in</Th>
                <Th>Check-out</Th>
                <Th>No of Rooms</Th>
                <Th>Hostel Name</Th>
                <Th>Total Cost</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bookings.map((booking) => (
                <Tr key={booking.booking_id}>
                  <Td>{booking.booking_id}</Td>
                  <Td>{booking.user_name}</Td>
                  <Td>{booking.user_email}</Td>
                  <Td>{booking.no_guests}</Td>
                  <Td>{booking.check_in}</Td>
                  <Td>{booking.check_out}</Td>
                  <Td>{booking.no_rooms}</Td>
                  <Td>{booking.hostel_name}</Td>
                  <Td>{booking.hostel_cost}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
