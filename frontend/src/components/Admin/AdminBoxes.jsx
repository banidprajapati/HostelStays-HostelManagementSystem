import React from "react";

export const AdminBoxes = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-left text-xl mb-4 font-medium">{title}</h2>
      <div className="text-6xl font-semibold flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};
