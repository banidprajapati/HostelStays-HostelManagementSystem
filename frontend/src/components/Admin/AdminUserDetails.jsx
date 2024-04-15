// AdminUserDetails.jsx
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

export const AdminUserDetails = () => {
  // Sample data for user details
  const userDetails = [
    {
      customerId: "CUS123",
      name: "John Doe",
      location: "New York",
      contact: "+1234567890",
      email: "john@example.com",
    },
    {
      customerId: "CUS456",
      name: "Alice Smith",
      location: "Los Angeles",
      contact: "+9876543210",
      email: "alice@example.com",
    },
    // Add more user detail data here
  ];

  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-left">User Details</h1>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>User Details</TableCaption>
            <Thead>
              <Tr>
                <Th>Customer ID</Th>
                <Th>Name</Th>
                <Th>Location</Th>
                <Th>Contact</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userDetails.map((user, index) => (
                <Tr key={index}>
                  <Td>{user.customerId}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.location}</Td>
                  <Td>{user.contact}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
