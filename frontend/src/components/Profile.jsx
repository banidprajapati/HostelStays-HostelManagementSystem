import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

export const Profile = () => {
  const [userId, setUserId] = useState("");
  const [bookedHostels, setBookedHostels] = useState([]);
  const [cancelledHostels, setCancelledHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userID");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setError("User ID not found in localStorage");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/user_hostel_booking?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookedHostels(data.booked);
        setCancelledHostels(data.cancelled);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (userId) {
      fetchBookings();
    }
  }, [userId]);

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:3000/cancel_booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingId }),
      });
      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }
      // Refresh the page
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p className="text-left text-2xl font-bold p-8">Hostel Bookings</p>
      <TableContainer>
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
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookedHostels.map((booking) => (
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
                    onClick={() => handleCancelBooking(booking.booking_id)}>
                    Cancel
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <p className="text-left text-2xl font-bold p-8">Cancelled Bookings</p>
      <TableContainer wordWrap="break-word">
        <Table variant="simple">
          <TableCaption>Cancelled Bookings</TableCaption>
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
            {cancelledHostels.map((booking) => (
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
  );
};
