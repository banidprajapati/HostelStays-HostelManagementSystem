import React, { useState, useEffect, useRef } from "react";
import { AdminSideBar } from "./AdminSideBar";

export const AdminSettings = () => {
  const [admins, setAdmins] = useState([]); // State to store fetched admins
  const [showAddAdminForm, setShowAddAdminForm] = useState(false);
  const [editAdmin, setEditAdmin] = useState(null); // State to store currently edited admin
  const [adminInfo, setAdminInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    // Fetch admin data from backend on component mount
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin_details");
      if (!response.ok) {
        throw new Error("Failed to fetch admins");
      }
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  const handleAddAdmin = () => {
    // Make POST request to add admin
    fetch("http://localhost:3000/admin_details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add admin");
        }
        return response.json();
      })
      .then((data) => {
        alert("Admin added successfully");
        fetchAdmins(); // Fetch updated admin details
        // Reset form fields
        setAdminInfo({ fullName: "", email: "", password: "" });
        // Hide add admin form
        setShowAddAdminForm(false);
      })
      .catch((error) => {
        console.error("Error adding admin:", error);
        alert("Failed to add admin. Please try again.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      // Click occurred outside the form box, so close the form
      setShowAddAdminForm(false);
    }
  };

  useEffect(() => {
    // Add event listener when the form is shown
    if (showAddAdminForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the form is hidden
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAddAdminForm]);

  const handleEdit = (admin) => {
    // Set the current admin being edited
    setEditAdmin(admin);
    // Populate the form fields with the admin's details
    setAdminInfo({
      fullName: admin.fullName,
      email: admin.email,
      password: admin.password,
    });
    // Show the add admin form
    setShowAddAdminForm(true);
  };

  const handleUpdateAdmin = () => {
    // Make PUT request to update admin details
    fetch(`http://localhost:3000/admin_details/${editAdmin.fullName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update admin");
        }
        return response.json();
      })
      .then((data) => {
        alert("Admin details updated successfully");
        fetchAdmins(); // Fetch updated admin details
        // Reset editAdmin state and form fields
        setEditAdmin(null);
        setAdminInfo({ fullName: "", email: "", password: "" });
        // Hide add admin form
        setShowAddAdminForm(false);
      })
      .catch((error) => {
        console.error("Error updating admin:", error);
        alert("Failed to update admin. Please try again.");
      });
  };

  const handleDelete = (adminName) => {
    // Logic to handle deleting of admin
    fetch(`http://localhost:3000/admin_details/${adminName}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete admin");
        }
        return response.json();
      })
      .then((data) => {
        alert("Admin deleted successfully");
        fetchAdmins(); // Fetch updated admin details
      })
      .catch((error) => {
        console.error("Error deleting admin:", error);
        alert("Failed to delete admin. Please try again.");
      });
  };

  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100 relative">
        <h1 className="text-3xl font-bold mb-4 text-left">Settings</h1>
        <div className="mb-4 flex justify-between items-center pl-2">
          <button
            className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowAddAdminForm(true)}>
            Add Admin
          </button>
          <span className="text-lg font-bold">
            Total Admin = {admins.length}
          </span>
        </div>
        {showAddAdminForm && (
          <form
            ref={formRef}
            className="absolute top-0 left-0 right-0 bg-white p-4 rounded-md shadow-lg max-w-md mx-auto border border-transparent hover:border-blue-500"
            onSubmit={(e) => {
              e.preventDefault();
              if (editAdmin) {
                handleUpdateAdmin(); // Call handleUpdateAdmin if editing an admin
              } else {
                handleAddAdmin(); // Call handleAddAdmin if adding a new admin
              }
            }}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-bold mb-1">
                FullName
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={adminInfo.fullName}
                onChange={handleInputChange}
                className="border-solid border border-black rounded-md px-3 py-2 w-full text-sm bg-gray-200 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={adminInfo.email}
                onChange={handleInputChange}
                className="border-solid border border-black rounded-md px-3 py-2 w-full text-sm bg-gray-200 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={adminInfo.password}
                onChange={handleInputChange}
                className="border-solid border border-black rounded-md px-3 py-2 w-full text-sm bg-gray-200 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 block mx-auto">
              {editAdmin ? "Update" : "Submit"}
            </button>
          </form>
        )}
        <div className="mb-2"></div> {/* Reduce space below the form */}
        {/* Table and Add Admin button container */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="mb-4"></div>
            <div className="mb-4"></div> {/* Reduce space below the table */}
            {/* Table displaying admin information */}
            <table className="table-auto border-collapse border border-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-black">Admin ID</th>
                  <th className="px-4 py-2 border border-black">
                    Admin FullName
                  </th>
                  <th className="px-4 py-2 border border-black">Admin Email</th>
                  <th className="px-4 py-2 border border-black">
                    Admin Password
                  </th>
                  <th className="px-4 py-2 border border-black">Actions</th>{" "}
                  {/* New column for actions */}
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-black">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-black">
                      {admin.fullName}
                    </td>
                    <td className="px-4 py-2 border border-black">
                      {admin.email}
                    </td>
                    <td className="px-4 py-2 border border-black">
                      {admin.password}
                    </td>
                    <td className="px-4 py-2 border border-black">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md mr-2"
                        onClick={() => handleEdit(admin)}>
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
                        onClick={() => handleDelete(admin.fullName)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-2"></div> {/* Reduce space below the table */}
      </div>
    </div>
  );
};
