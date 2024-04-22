// AdminUserDetails.jsx (clear button)
import React, { useState } from "react";
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
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export const AdminUserDetails = () => {
  // Sample data for user details
  const [searchTerm, setSearchTerm] = useState("");
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

  // Filter user details based on search term
  const filteredUserDetails = userDetails.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">User Details</h1>
          <InputGroup maxW="xs">
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderColor="blue.400" // Set border color to blue
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setSearchTerm("")}>
                Clear
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
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
              {filteredUserDetails.length > 0 ? (
                // Render filtered user details if found
                filteredUserDetails.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.customerId}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.location}</Td>
                    <Td>{user.contact}</Td>
                    <Td>{user.email}</Td>
                  </Tr>
                ))
              ) : searchTerm.trim() !== "" ? ( // Show error message if search term is not empty but no results found
                <Tr>
                  <Td colSpan={5} className="text-red-500">
                    Not Found
                  </Td>
                </Tr>
              ) : (
                // Render all user details if search term is empty
                userDetails.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.customerId}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.location}</Td>
                    <Td>{user.contact}</Td>
                    <Td>{user.email}</Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
