import React from "react";

export const BookStay = () => {
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
            Book
          </span>{" "}
          you stay
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <div
        style={{
          background: "#808080",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          width: "60%",
          margin: "auto",
          height: "300px",
          position: "relative",
        }}>
        {/* Big rectangle box */}
        <input
          type="text"
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "400px",
            height: "50px",
            background: "white",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        />
        <input
          type="text"
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            width: "300px",
            height: "50px",
            background: "white",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        />
        <hr
          style={{
            position: "absolute",
            top: "110px",
            left: "40px",
            width: "calc(100% - 80px)",
            border: "1px solid white",
          }}
        />
        <h3
          style={{
            position: "absolute",
            bottom: "90px",
            left: "40px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "black",
          }}>
          Total Price (including all taxes)
        </h3>
        {/* Removed the second horizontal line */}
        {/* <hr style={{ position: 'absolute', top: '160px', left: '40px', width: 'calc(100% - 80px)', border: '1px solid white' }} /> */}
        <h4
          style={{
            position: "absolute",
            bottom: "60px",
            left: "40px",
            color: "black",
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
        <br />
        <button
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            background: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
          }}>
          Confirm Booking
        </button>
        <br />
        <h3
          style={{
            position: "absolute",
            bottom: "65px",
            right: "70px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "black",
          }}>
          NPR 2500
        </h3>
      </div>
    </div>
  );
};
