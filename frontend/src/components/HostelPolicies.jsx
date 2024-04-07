import React from "react";

export const HostelPolicies = () => {
  return (
    <div className="text-left mt-0">
      {/* Adjusted margin top */}
      <h2 className="text-3xl font-bold">
        <span className="text-black">Hostel</span> Policies
      </h2>
      <br />
      <div className="flex justify-center bg-gray-300 border w-full rounded-lg">
        <div className="w-96 text-center m-3">
          <h3 className="text-xl">Check-in</h3>
          <p className="font-bold text-2xl my-2">10:00 am</p>
        </div>
        <div className="w-96 text-center border-l border-white m-3">
          <h3 className="text-xl">Check-out</h3>
          <p className="font-bold text-2xl my-2">10:00 am</p>
        </div>
      </div>
      <ul className="mt-5 list-none text-gray-800">
        {" "}
        {/* Removed list-disc and added list-none */}
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
        <li>
          Quiet hours enforced from 10:00 PM to 7:00 AM, promoting a peaceful
          environment for all guests to rest and relax.
        </li>
        <li>
          Smoking is prohibited in all indoor areas to maintain a healthy
          environment for everyone.
        </li>
      </ul>
    </div>
  );
};
