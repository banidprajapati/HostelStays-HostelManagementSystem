import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminBoxes } from "./AdminBoxes";
import { AdminSideBar } from "./AdminSideBar";

export const AdminDashboard = ({ isAdminLoggedIn, handleAdminLogout }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    // Fetch admin data from backend on component mount
    fetchData()
      .then((fetchedData) => {
        // Set the fetched data to state
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/combined_data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const {
        success,
        hostelCount,
        userCount,
        adminCount,
        bookingCount,
        revenueCount,
      } = data;
      if (!success) {
        throw new Error("Failed to fetch data");
      }
      return { hostelCount, userCount, adminCount, bookingCount, revenueCount };
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    // Redirect to admin login if not logged in
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  // Render UI based on the fetched data
  return (
    <div className="flex h-screen">
      <AdminSideBar handleAdminLogout={handleAdminLogout} />
      <div className="flex-1 p-8 bg-gray-100">
        {data && ( // Render only if data is not null
          <>
            {/* Overview Section */}
            <div>
              <h1 className="text-3xl font-bold mb-4 text-left">Overview</h1>
              <div className="grid grid-cols-3 gap-4">
                <AdminBoxes title="Total Hostels:">
                  {data.hostelCount}
                </AdminBoxes>
                <AdminBoxes title="No of Guests:">
                  {data.bookingCount}
                </AdminBoxes>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-4 text-left">Accounts</h1>
              <div className="grid grid-cols-3 gap-4">
                <AdminBoxes title="No. of users:">{data.userCount}</AdminBoxes>
                <AdminBoxes title="No. of admins:">
                  {data.adminCount}
                </AdminBoxes>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-4 text-left">Finances</h1>
              <div className="grid grid-cols-3 gap-4">
                <AdminBoxes title="Total Revenue:">
                  Rs.{data.revenueCount}
                </AdminBoxes>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};