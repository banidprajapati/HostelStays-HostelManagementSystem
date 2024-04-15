// AdminSettings.jsx
import React from "react";
import { AdminSideBar } from "./AdminSideBar";

export const AdminSettings = () => {
  const handleAddAdmin = () => {
    // Logic to add admin
    alert("Admin added!");
  };

  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-left">Settings</h1>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Common Settings Features</h2>
          {/* Add common settings features */}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Add Admin</h2>
          <button
            className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleAddAdmin}
          >
            Add Admin
          </button>
        </div>
      </div>
    </div>
  );
};
