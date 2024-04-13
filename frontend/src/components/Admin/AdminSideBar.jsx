// import React from "react";

// export const AdminSideBar = () => {
//   return (
//     <div className="flex h-screen">
//       <div className="bg-gray-400 text-black w-64 h-full p-4">
//         <div className="text-white text-xl font-bold mb-8">Admin Dashboard</div>
//         <ul>
//           <li className="mb-4">
//             <a href="#" className="text-xl font-semibold hover:text-blue-800">
//               Dashboard
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-xl font-semibold hover:text-blue-800">
//               Hostel List
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-xl font-semibold hover:text-blue-800">
//               Bookings
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-xl font-semibold hover:text-blue-800">
//               User Details
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-xl font-semibold hover:text-blue-800">
//               Settings
//             </a>
//           </li>
//         </ul>
//         <div className="mt-auto">
//           <a href="#" className="text-xl hover:text-blue-800">
//             Logout
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

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
              className="text-xl font-semibold hover:text-blue-800"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/hostel-list"
              className="text-xl font-semibold hover:text-blue-800"
            >
              Hostel List
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/bookings"
              className="text-xl font-semibold hover:text-blue-800"
            >
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/user-details"
              className="text-xl font-semibold hover:text-blue-800"
            >
              User Details
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/settings"
              className="text-xl font-semibold hover:text-blue-800"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <Link to="/logout" className="text-xl hover:text-blue-800">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
