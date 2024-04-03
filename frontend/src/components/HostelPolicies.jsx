import React from "react";

export const HostelPolicies = () => {
  return (
    <div>
      <h2>
        <strong style={{ color: "black" }}>
          <span
            style={{
              borderBottom: "2px solid blue",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Hos
          </span>
          tel Policies
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#808080",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          width: "80%",
          margin: "auto",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h3>Check-in</h3>
          <p style={{ fontWeight: "bold" }}>10:00 am</p>
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "center",
            borderLeft: "1px solid white",
          }}
        >
          <h3>Check-out</h3>
          <p style={{ fontWeight: "bold" }}>10:00 am</p>
        </div>
      </div>
      <ul
        style={{
          marginTop: "20px",
          paddingLeft: "12%",
          listStyleType: "circle",
          listStyleColor: "#333333",
        }}
      >
        <li>
          Free cancellation up to 24 hours before arrival after which a fee
          applies.
        </li>
        <li>
          Payment required upon check-in; credit card pre-authorisation may be
          held.
        </li>
        <li>Accessible parking, rooms, and facilities available.</li>
        <li>Quiet hours enforced from 10:00 PM to 7:00 AM.</li>
        <li>Guests responsible for reporting damages; charges may apply.</li>
        <li>Guests must adhere to noise and behavior standards.</li>
      </ul>
    </div>
  );
};
