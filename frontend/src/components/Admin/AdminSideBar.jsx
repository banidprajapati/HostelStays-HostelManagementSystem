// AdminSideBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const AdminSideBar = ({ handleAdminLogout }) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-neutral-300 text-black w-80 h-full p-4">
        <div className="text-black text-2xl font-bold mb-8 mt-6">
          Admin Dashboard
        </div>
        <ul className="text-xl font-medium">
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="hover:text-blue-600 hover:underline">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/hostel-list"
              className="hover:text-blue-600 hover:underline">
              Hostel List
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/bookings"
              className="hover:text-blue-600 hover:underline">
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/user-details"
              className="hover:text-blue-600 hover:underline">
              User Details
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/admindetails"
              className="hover:text-blue-600 hover:underline">
              Admin Details
            </Link>
          </li>
        </ul>
        <div className="mt-auto ">
          <button
            className="text-xl text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mt-14"
            onClick={() => {
              handleAdminLogout();
              console.log("Logged out");
            }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
