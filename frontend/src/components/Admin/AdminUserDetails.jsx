// AdminUserDetails.jsx

import React, { useState, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Fetch user details from the backend when the component mounts
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/user_details");
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
              borderColor="blue.400"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setSearchTerm("")}>
                Clear
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <TableCaption>User Details</TableCaption>
            <Thead>
              <Tr>
                <Th>User ID</Th>
                <Th>Full Name</Th>
                <Th>Email</Th>
                <Th>
                  {showPassword ? "Password" : "Password (Hidden)"}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleShowPassword}
                    ml={2}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUserDetails.length > 0 ? (
                filteredUserDetails.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.user_ID}</Td>
                    <Td>{user.full_name}</Td>
                    <Td>{user.user_email}</Td>
                    <Td>{showPassword ? user.password : "********"}</Td>
                  </Tr>
                ))
              ) : searchTerm.trim() !== "" ? (
                <Tr>
                  <Td colSpan={4} className="text-red-500">
                    Not Found
                  </Td>
                </Tr>
              ) : (
                userDetails.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.user_ID}</Td>
                    <Td>{user.full_name}</Td>
                    <Td>{user.user_email}</Td>
                    <Td>{showPassword ? user.password : "********"}</Td>
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
