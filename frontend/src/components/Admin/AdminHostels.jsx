import React, { useState, useEffect, useRef } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AdminHostels = ({ isAdminLoggedIn, handleAdminLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Redirect to admin login if not logged in
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  const [hostels, setHostels] = useState([]); // State to store fetched hostels
  const [showAddHostelForm, setShowAddHostelForm] = useState(false);
  const [editHostel, setEditHostel] = useState(null); // State to store currently edited hostel
  const [hostelInfo, setHostelInfo] = useState({
    hostel_name: "",
    hostel_location: "",
    hostel_city: "", // Corrected state variable name
    facilities: "",
    photos: "",
    hostel_description: "",
    price: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    // Add event listener to detect clicks outside the form
    const handleOutsideClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowAddHostelForm(false); // Close the form if click is outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostel_details");
      if (!response.ok) {
        throw new Error("Failed to fetch hostels");
      }
      const data = await response.json();
      setHostels(data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };
fetchHostels(); // Fetch hostels on component mount
  const handleAddHostel = () => {
    // Make POST request to add hostel
    fetch("http://localhost:3000/hostel_details/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hostelInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add hostel");
        }
        return response.json();
      })
      .then((data) => {
        alert("Hostel added successfully");
        fetchHostels(); // Fetch updated hostel details
        setHostelInfo({
          hostel_name: "",
          hostel_location: "",
          hostel_city: "",
          facilities: "",
          photos: "",
          hostel_description: "",
          price: 0,
        });
        setShowAddHostelForm(false);
      })
      .catch((error) => {
        console.error("Error adding hostel:", error);
        alert("Failed to add hostel. Please try again.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHostelInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEditHostel = (hostel) => {
    // Set the current hostel being edited
    setEditHostel(hostel);
    // Populate the form fields with the hostel's details
    setHostelInfo({
      hostel_name: hostel.hostel_name,
      hostel_location: hostel.hostel_location,
      hostel_city: hostel.hostel_city,
      facilities: hostel.facilities,
      photos: hostel.photos,
      hostel_description: hostel.hostel_description,
      price: hostel.price,
    });
    // Show the add hostel form
    setShowAddHostelForm(true);
  };

  const handleUpdateHostel = () => {
    // Make PUT request to update hostel details
    fetch(`http://localhost:3000/hostel_details/${editHostel.hostel_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hostelInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update hostel");
        }
        return response.json();
      })
      .then((data) => {
        alert("Hostel details updated successfully");
        fetchHostels(); // Fetch updated hostel details
        // Reset editHostel state and form fields
        setEditHostel(null);
        setHostelInfo({
          hostel_name: "",
          hostel_location: "",
          hostel_city: "",
          facilities: "",
          photos: "",
          hostel_description: "",
          price: 0,
        });
        // Hide add hostel form
        setShowAddHostelForm(false);
      })
      .catch((error) => {
        console.error("Error updating hostel:", error);
        alert("Failed to update hostel. Please try again.");
      });
  };

  const handleDeleteHostel = (hostelId) => {
    // Corrected function parameter
    fetch(`http://localhost:3000/hostel_details/${hostelId}`, {
      // Corrected URL
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete hostel");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message); // Show success message
        fetchHostels(); // Fetch updated hostel details
      })
      .catch((error) => {
        console.error("Error deleting hostel:", error);
        alert("Failed to delete hostel. Please try again.");
      });
  };

  return (
    <div className="flex h-screen">
      <AdminSideBar handleAdminLogout={handleAdminLogout} />

      <div className="flex-1 p-8 bg-gray-100 relative">
        <h1 className="text-3xl font-bold mb-4 text-left">Hostel Details</h1>

        {/* Form for adding/editing hostels */}
        {/* Form for adding/editing hostels */}
        {showAddHostelForm && (
          <form
            ref={formRef}
            className="absolute top-0 left-0 right-0 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto border border-gray-300"
            onSubmit={(e) => {
              e.preventDefault();
              if (editHostel) {
                handleUpdateHostel(); // Call function for updating hostel details
              } else {
                handleAddHostel(); // Call function for adding hostel
              }
            }}>
            {/* Input fields for hostel information */}
            <div className="mb-4">
              <label
                htmlFor="hostel_name"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Hostel Name
              </label>
              <input
                type="text"
                id="hostel_name"
                name="hostel_name"
                value={hostelInfo.hostel_name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hostel_location"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Hostel Location
              </label>
              <input
                type="text"
                id="hostel_location"
                name="hostel_location"
                value={hostelInfo.hostel_location}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="hostel_city"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Hostel City
              </label>
              <input
                type="text"
                id="hostel_city"
                name="hostel_city"
                value={hostelInfo.hostel_city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="facilities"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Facilities
              </label>
              <input
                type="text"
                id="facilities"
                name="facilities"
                value={hostelInfo.facilities}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photos"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Photos
              </label>
              <input
                type="text"
                id="photos"
                name="photos"
                value={hostelInfo.photos}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hostel_description"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Hostel Description
              </label>
              <textarea
                id="hostel_description"
                name="hostel_description"
                value={hostelInfo.hostel_description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-semibold text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={hostelInfo.price}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-gray-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4 block mx-auto">
              {editHostel ? "Update" : "Submit"}
            </button>
          </form>
        )}

        {/* Table displaying hostel information */}
        <div className="flex justify-center w-full flex-col items-center">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Hostel Name</Th>
                <Th>Location</Th>
                <Th>City</Th>
                <Th>Facilities</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {hostels.map((hostel) => (
                <Tr key={hostel.hostel_ID}>
                  <Td>{hostel.hostel_name}</Td>
                  <Td>{hostel.hostel_location}</Td>
                  <Td>{hostel.hostel_city}</Td>
                  <Td>{hostel.facilities}</Td>
                  <Td>{hostel.hostel_description}</Td>
                  <Td>{hostel.price}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      variant="solid"
                      size="sm"
                      onClick={() => handleEditHostel(hostel)}>
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      variant="solid"
                      size="sm"
                      onClick={() => handleDeleteHostel(hostel.hostel_ID)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>

        {/* Button to toggle add hostel form */}
        <button
          className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-4 p-2 rounded-md"
          onClick={() => setShowAddHostelForm(true)}>
          Add Hostel
        </button>
      </div>
    </div>
  );
};
