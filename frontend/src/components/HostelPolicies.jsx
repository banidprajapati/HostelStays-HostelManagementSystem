import React from "react";

export const HostelPolicies = () => {
  return (
    <div className="text-left">
      <h2 style={{ fontSize: "1.5rem" }}>
        <strong className="text-black">
          <span>Hos</span>
          tel Policies
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <div className="flex justify-center bg-gray-300 p-5 border  rounded-lg w-80">
        <div className="w-1/2 text-center">
          <h3>Check-in</h3>
          <p className="font-bold">10:00 am</p>
        </div>
        <div className="w-1/2 text-center border-l border-white">
          <h3>Check-out</h3>
          <p className="font-bold">10:00 am</p>
        </div>
      </div>
      <ul className="mt-5 list-none text-gray-800">
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
