// AdminSideBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-400 text-black w-64 h-full p-4">
        <div className="text-white text-xl font-bold mb-8">Admin Dashboard</div>
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="text-xl font-semibold hover:text-blue-800">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/hostel-list"
              className="text-xl font-semibold hover:text-blue-800">
              Hostel List
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/bookings"
              className="text-xl font-semibold hover:text-blue-800">
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/user-details"
              className="text-xl font-semibold hover:text-blue-800">
              User Details
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admindetails"
              className="text-xl font-semibold hover:text-blue-800">
              Admin Details
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <button
            className="text-xl text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
            onClick={() => {
              // Add logout functionality here
              console.log("Logged out");
              // Redirect to AdminLogin
              window.location.href = "/admin";
            }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
