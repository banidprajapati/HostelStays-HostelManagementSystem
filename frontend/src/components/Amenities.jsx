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
    "Lorem ipsum",
    "Gym",
    "Laundry Facilities",
    "24/7 Reception",
    "Barbecue Area",
    "Bike Rental",
    "Library",
    "Games Room",
    "Outdoor Terrace",
    "Fitness Classes",
    "Organized Tours",
    "Breakfast Included",
    "Housekeeping Services",
    "Luggage Storage",
    "Airport Shuttle",
    "Business Center",
    "Meeting Rooms",
    "Concierge Service",
    "Gift Shop",
    "Pet-Friendly",
    "Elevator",
    "Safety Deposit Box",
    "Spa Facilities",
  ];

  // Splitting the amenities array into two halves
  const firstHalf = amenities.slice(0, Math.ceil(amenities.length / 2));
  const secondHalf = amenities.slice(Math.ceil(amenities.length / 2));

  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold">
        <span className="text-black">Ame</span>nities
      </h2>
      <br />
      <div className="flex">
        <ul className="flex flex-col w-1/2">
          {firstHalf.map((amenity, index) => (
            <li key={index} className="flex items-center">
              <span className="text-white bg-green-500 my-1 rounded-md mr-2 flex items-center justify-center w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
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
        <ul className="flex flex-col w-1/2 ml-auto pl-4">
          {secondHalf.map((amenity, index) => (
            <li key={index} className="flex items-center">
              <span className="text-white bg-green-500 my-1 rounded-md mr-2 flex items-center justify-center w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
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
    </div>
  );
};
