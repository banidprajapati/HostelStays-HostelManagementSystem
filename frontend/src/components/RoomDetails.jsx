import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const RoomDetails = () => {
  return (
    <div className="flex font-poppins">
      <img
        src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2"
        alt="About Us Image"
        className="w-72 rounded-lg"
      />
      <div className="text-left ml-5 w-full ">
        <h1 className="text-2xl mt-3">Bhatbhatini Super Hostel Store</h1>
        <p className="text-xl mb-1">Bhatbhatini, Naxal</p>
        <div className="flex flex-row items-center gap-2">
          <div className="bg-[#4caf50] p-1 rounded-md flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-white mr-1 text-sm">5.2</p>
          </div>
          <div>
            <p>100 reviews</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-lg font-bold mt-7">NRs. 1500</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-transparent border border-black border-2 text-black px-3 py-2 rounded-lg shadow-md transition-shadow duration-300 focus:outline-none hover:shadow-lg hover:bg-gray-100">
              View Details
            </button>

            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 focus:outline-none">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
