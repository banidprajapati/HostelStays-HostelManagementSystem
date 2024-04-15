// AdminBookings.jsx
import React from "react";
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

export const AdminBookings = () => {
  // Sample data for bookings
  const bookings = [
    {
      bookingId: "BKG123",
      customerId: "CUS123",
      hostelId: "HSTL456",
      checkIn: "2024-04-15",
      checkOut: "2024-04-20",
      status: "Confirmed",
    },
    {
      bookingId: "BKG456",
      customerId: "CUS456",
      hostelId: "HSTL789",
      checkIn: "2024-04-18",
      checkOut: "2024-04-22",
      status: "Pending",
    },
    // Add more booking data here
  ];

  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-left">Bookings</h1>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Bookings</TableCaption>
            <Thead>
              <Tr>
                <Th>Booking ID</Th>
                <Th>Customer ID</Th>
                <Th>Hostel ID</Th>
                <Th>Check-In</Th>
                <Th>Check-Out</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bookings.map((booking, index) => (
                <Tr key={index}>
                  <Td>{booking.bookingId}</Td>
                  <Td>{booking.customerId}</Td>
                  <Td>{booking.hostelId}</Td>
                  <Td>{booking.checkIn}</Td>
                  <Td>{booking.checkOut}</Td>
                  <Td>{booking.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
