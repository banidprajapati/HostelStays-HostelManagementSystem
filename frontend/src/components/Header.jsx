import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn, userFullName, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 h-16 flex items-center justify-between px-4">
      <h1 className="text-lg font-bold text-black">
        <button onClick={() => navigate("/")} className="text-black float-left">
          Hostel
          <br />
          Stays.
        </button>
      </h1>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <div className="flex gap-6 items-center ">
            <p className="text-black text-xl">{userFullName}</p>
            <button
              onClick={handleLogout}
              className="text-black text-l hover:underline border-2 border-blue-500 hover:bg-blue-600 hover:text-white rounded-md p-2">
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-black hover:text-blue-600 hover:underline">
            Login/SignUp
          </button>
        )}
      </div>
    </div>
  );
};
