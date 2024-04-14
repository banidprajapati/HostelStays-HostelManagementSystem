// import React from "react";

// export const AdminBoxes = ({title, children}) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-left text-lgmb-4">{title}</h2>
//       <div className="text-6xl font-semibold py-2 ">{children}</div>
//     </div>
//   );
// };

import React from "react";

export const AdminBoxes = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-left text-lg mb-4">{title}</h2>{" "}
      {/* Corrected className */}
      <div className="text-6xl font-semibold py-2">{children}</div>
    </div>
  );
};
