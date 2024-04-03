// Description.jsx
import React from "react";

export const Description = () => {
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
            Des
          </span>
          cription
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <h3>
        <strong>Last Garden Apartment and Guest House</strong>
      </h3>
      <div style={{display: "flex", alignItems: "center"}}>
        <div
          style={{
            background: "green",
            color: "white",
            padding: "5px",
            marginRight: "10px",
            borderRadius: "5px",
            height: "30px",
            width: "40px",
          }}>
          ★ 4
        </div>
        <div style={{fontSize: "small"}}>100 Reviews</div>
      </div>
      <br /> {/* One line space */}
      <h3>
        <strong>Location</strong>
      </h3>
      <div style={{fontSize: "small"}}>Address Line 1</div>
      <div style={{fontSize: "small"}}>Address Line 2</div>
      <br /> {/* One line space */}
      <h3>
        <strong>Description</strong>
      </h3>
      <p style={{fontSize: "small"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna
        a ipsum tincidunt laoreet. Cras nec dolor justo. Donec vel libero eu
        enim pretium vulputate. Integer nec arcu felis.
      </p>
    </div>
  );
};
