import React from "react";
import AdminSideBar from "./AdminSideBar";
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
      customerId: "CUS123",
      hotelName: "Hotel ABC",
      numberOfGuests: 2,
      room: "Standard",
      cost: 200,
      payment: true,
    },
    {
      customerId: "CUS456",
      hotelName: "Hotel XYZ",
      numberOfGuests: 3,
      room: "Deluxe",
      cost: 300,
      payment: false,
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
                <Th>Customer ID</Th>
                <Th>Hotel Name</Th>
                <Th>No. of Guests</Th>
                <Th>Room</Th>
                <Th>Cost</Th>
                <Th>Payment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bookings.map((booking, index) => (
                <Tr key={index}>
                  <Td>{booking.customerId}</Td>
                  <Td>{booking.hotelName}</Td>
                  <Td>{booking.numberOfGuests}</Td>
                  <Td>{booking.room}</Td>
                  <Td>{booking.cost}</Td>
                  <Td>{booking.payment ? "Paid" : "Not Paid"}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
