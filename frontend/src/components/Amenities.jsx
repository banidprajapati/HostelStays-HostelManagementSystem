// Amenities.jsx
import React from "react";

export const Amenities = () => {
  return (
    <div>
      <h2>
        <strong style={{color: "black"}}>
          <span
            style={{
              borderBottom: "2px solid blue",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}>
            Ame
          </span>
          nities
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <ul>
        <li>
          <span style={{color: "green"}}>☑</span> Free Wi-Fi
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Parking
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Community Area
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Access to Kitchen
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Shared / Personal Bathroom
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Free Cancelation
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> Swimming pool
        </li>
        <li>
          <span style={{color: "green"}}>☑</span> lorem ipsum
        </li>
        {/* Add more amenities as needed */}
      </ul>
    </div>
  );
};
