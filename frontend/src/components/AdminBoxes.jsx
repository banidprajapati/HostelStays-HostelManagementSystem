import React from "react";

const AdminBoxes = ({title, children}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-left text-lgmb-4">{title}</h2>
      <p className="text-6xl font-semibold py-2 ">{children}</p>
    </div>
  );
};

export default AdminBoxes;
