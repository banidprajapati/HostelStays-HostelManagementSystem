import React from "react";

const AdminSideBar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-400 text-black w-64 h-full p-4">
        <div className="text-white text-xl font-bold mb-8">Admin Dashboard</div>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-xl font-semibold hover:text-blue-800">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-xl font-semibold hover:text-blue-800">
              Hostel List
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-xl font-semibold hover:text-blue-800">
              Bookings
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-xl font-semibold hover:text-blue-800">
              User Details
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-xl font-semibold hover:text-blue-800">
              Settings
            </a>
          </li>
        </ul>
        <div className="mt-auto">
          <a href="#" className="text-xl hover:text-blue-800">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
