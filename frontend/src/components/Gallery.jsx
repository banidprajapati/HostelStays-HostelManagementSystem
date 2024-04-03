import React from "react";

export const Gallery = () => {
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
            Gal
          </span>
          lery
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <div
        style={{
          background: "#808080",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          width: "80%",
          margin: "auto",
          height: "400px",
        }}>
        {/* Big gray box */}
      </div>
      <div
        style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}>
          <div
            style={{
              background: "#808080",
              padding: "70px",
              border: "1px solid black",
              borderRadius: "10px",
              width: "30%",
            }}>
            {/* Small gray box 1 */}
          </div>
          <div
            style={{
              background: "#808080",
              padding: "70px",
              border: "1px solid black",
              borderRadius: "10px",
              width: "30%",
            }}>
            {/* Small gray box 2 */}
          </div>
          <div
            style={{
              background: "#808080",
              padding: "70px",
              border: "1px solid black",
              borderRadius: "10px",
              width: "30%",
            }}>
            {/* Small gray box 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};
