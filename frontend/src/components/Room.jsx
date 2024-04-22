import React from "react";

export const Room = ({ hostel }) => {
  if (!hostel) {
    // Handle case where hostel object is undefined or null
    return <div>No hostel data available</div>;
  }

  return (
    <div className="max-w-96 bg-gray-200 rounded-lg text-left">
      <img
        src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2"
        alt="About Us Image"
        className="rounded-tl-lg rounded-tr-lg w-96"
      />
      <div className="px-4 py-2 flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{hostel.hostel_name}</h2>
        <p>{hostel.hostel_location}</p>
        <div className="flex flex-row gap-2">
          <div className="bg-green-500 text-white px-2 py-1 rounded">
            ★ {hostel.ratings}
          </div>
          <div>
            <p className="mt-1">{hostel.reviews} reviews</p>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">{hostel.price}</h1>
      </div>
    </div>
  );
};
