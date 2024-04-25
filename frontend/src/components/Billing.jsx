import React from "react";

export const Billing = () => {
  return (
    <div className="text-left">
      <p className="text-3xl font-bold my-6">Billing</p>
      <div className="text-xl">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Personal Details</p>
              <div className="py-2">
                <p>Name:</p>
                <h1 className="text-2xl font-medium">Banid Prajajati</h1>
              </div>
              <div className="py-2">
                <p>Email:</p>
                <h1 className="text-2xl font-medium">banid@gmail.com</h1>
              </div>
              <div className="py-2">
                <p>Phone Number:</p>
                <h1 className="text-2xl font-medium">9800000000</h1>
              </div>
              <div className="text-right px-4">
                <button className="text-black w-46 p-2 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                  Edit Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Reservation Details</p>
              <div className="py-2">
                <p>Check In/Out Date:</p>
                <h1 className="text-2xl font-medium">Date</h1>
              </div>
              <div className="py-2">
                <p>No of Guests:</p>
                <h1 className="text-2xl font-medium">5</h1>
              </div>
              <div className="py-2">
                <p>No of Rooms:</p>
                <h1 className="text-2xl font-medium">1</h1>
              </div>
              <div className="text-right px-4">
                <button className="text-black w-46 p-2 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
                  Change Reservations
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <p className="pb-2 font-medium">Hostel Details</p>
              <div className="py-2">
                <p>Hostel Name:</p>
                <h1 className="text-2xl font-medium">
                  Lost Garden Apartment Hostel
                </h1>
              </div>
              <div className="py-2">
                <p>City:</p>
                <h1 className="text-2xl font-medium">Kathmandu</h1>
              </div>
              <div className="py-2">
                <p>Address:</p>
                <h1 className="text-2xl font-medium">Naxal</h1>
              </div>
              <div className="text-right px-4 -mt-24 ">
                <p className="mb-2">Total Amount:</p>
                <h1 className="text-5xl text-green-600 font-bold mb-2">
                  Rs. 600
                </h1>
                <button className="text-white w-46 p-2 rounded-lg bg-blue-600  hover:bg-blue-700">
                  Confirm Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
