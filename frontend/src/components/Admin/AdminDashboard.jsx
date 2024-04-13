import React from "react";
import { AdminBoxes } from "./AdminBoxes";
import { AdminSideBar } from "./AdminSideBar";

export const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="flex-1 p-8 bg-gray-100">
        {/* Overview Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-left">Overview</h1>
          <div className="grid grid-cols-3 gap-4">
            <AdminBoxes title="Total Hostels:" />
            <AdminBoxes title="Room Booked:" />
            <AdminBoxes title="No of Guests:" />
            <AdminBoxes title="Beds Reserved:">15</AdminBoxes>
            <AdminBoxes title="Settings:" />
            {/* Add more AdminBoxes components here */}
          </div>
        </div>
        {/* Finances Section */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-4 text-left">Finances</h1>
          <div className="grid grid-cols-3 gap-4">
            <AdminBoxes title="Total Revenue:" />
            <AdminBoxes title="Total Expenses:" />
            <AdminBoxes title="Net Profit:" />
            {/* Add more AdminBoxes components here */}
          </div>
        </div>
      </div>
    </div>
  );
};
