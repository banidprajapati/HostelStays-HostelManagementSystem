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
  Button,
  Tfoot,
} from "@chakra-ui/react";

export const AdminBookings = ({ isAdminLoggedIn, handleAdminLogout }) => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [bookingsCount, setBookingsCount] = useState(0); // Initialize bookings count

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  useEffect(() => {
    fetchBookings()
      .then((bookingsData) => {
        // Filter out cancelled bookings
        const activeBookings = bookingsData.filter(
          (booking) => !booking.cancelled
        );
        setBookings(activeBookings);
        setBookingsCount(
          activeBookings.filter((booking) => !booking.completed).length
        ); // Set initial count of incomplete bookings
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error.message);
      });
  }, []); // Only fetch bookings on initial render

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
      return data.bookings;
    } catch (error) {
      throw new Error(`Error fetching bookings: ${error.message}`);
    }
  };

  const handleCompleteToggle = async (bookingId, isCompleted) => {
    try {
      // Update completion status in the database
      const response = await fetch(
        `http://localhost:3000/update_booking_status/${bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: !isCompleted }), // Send the updated completion status
        }
      );
      if (!response.ok) {
        throw new Error("Failed to toggle completion status");
      }
      // Update completion status locally
      const updatedBookings = bookings.map((booking) => {
        if (booking.booking_id === bookingId) {
          return { ...booking, completed: !isCompleted };
        }
        return booking;
      });
      setBookings(updatedBookings);

      // Update bookings count in sidebar
      if (!isCompleted) {
        setBookingsCount((prevCount) => prevCount - 1); // Decrease count
      } else {
        setBookingsCount((prevCount) => prevCount + 1); // Increase count
      }
    } catch (error) {
      console.error("Error toggling completion status:", error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <AdminSideBar
        handleAdminLogout={handleAdminLogout}
        bookingsCount={bookingsCount}
        allBookings={bookings}
      />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-left">Bookings</h1>
        <TableContainer
          maxW="800px"
          maxHeight="700px"
          overflowY="auto"
          overflowX="auto">
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
                <Th>Notification</Th>
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
                  <Td>
                    <Button
                      colorScheme={booking.completed ? "green" : "gray"}
                      onClick={() =>
                        handleCompleteToggle(
                          booking.booking_id,
                          booking.completed
                        )
                      }>
                      {booking.completed ? "Completed" : "Complete"}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
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
                <Th>Notification</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
