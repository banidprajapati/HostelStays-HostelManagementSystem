// Feedback_Reviews.jsx
import React from "react";

export const Feedback_Reviews = () => {
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
            Fee
          </span>
          dback and Reviews
        </strong>
      </h2>
      <br /> {/* One line of space */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
              marginRight: "10px",
            }}
          ></div>{" "}
          {/* Dot symbol */}
          <strong>Sonam Yunjan, 13 Apr 2023</strong>
          <span
            style={{
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {/* Space before the rating symbol */}
            <div
              style={{
                background: "green",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                height: "30px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★ 3
            </div>
          </span>
        </div>
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Gap before the review paragraph */}
          Short review goes here...
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
              marginRight: "10px",
            }}
          ></div>{" "}
          {/* Dot symbol */}
          <strong>John Doe, 15 Apr 2023</strong>
          <span
            style={{
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {/* Space before the rating symbol */}
            <div
              style={{
                background: "green",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                height: "30px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★ 4
            </div>
          </span>
        </div>
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Gap before the review paragraph */}
          Another short review goes here...
        </div>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
              marginRight: "10px",
            }}
          ></div>{" "}
          {/* Dot symbol */}
          <strong>Jane Smith, 17 Apr 2023</strong>
          <span
            style={{
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {/* Space before the rating symbol */}
            <div
              style={{
                background: "green",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                height: "30px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ★ 5
            </div>
          </span>
        </div>
        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Gap before the review paragraph */}
          Yet another short review goes here...
        </div>
      </div>
    </div>
  );
};
