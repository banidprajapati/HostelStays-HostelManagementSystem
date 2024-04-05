import React from "react";

export const Amenities = () => {
  const amenities = [
    "Free Wi-Fi",
    "Parking",
    "Community Area",
    "Access to Kitchen",
    "Shared / Personal Bathroom",
    "Free Cancellation",
    "Swimming pool",
    "lorem ipsum",
  ];

  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold">
        <span className="text-black">Ame</span>nities
      </h2>
      <br /> {/* Two lines of space */}
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-center">
            <span className="text-white bg-green-500 my-1 rounded-md mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};
