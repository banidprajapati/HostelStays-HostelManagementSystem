import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-10 mb-7 text-left">Our Story.</h1>
      <div className="flex flex-wrap items-left justify-left font-poppins">
        <div className="w-full lg:w-1/2">
          <div className="mb-4 flex text-left gap-9">
            <div className="flex-1">
              <h1 className="font-bold pb-2 text-xl">Who are we?</h1>
              <p className="mt-3 w-64">
                At Hostel Stays, we are passionate about redefining the travel
                experience in Nepal. Born out of a desire to make exploration
                more accessible and affordable, we are a team of dedicated
                individuals committed to transforming the way travelers discover
                and experience Nepal.
              </p>
            </div>
            <div className="flex-1">
              <h1 className="font-bold pb-2 text-xl">What we do?</h1>
              <p className="mt-3 w-64">
                Hostel Stays is a pioneering platform that connects travelers
                with unique and budget-friendly accommodations across Nepal.
                From bustling cities to serene mountain villages, we curate a
                diverse selection of hostels that offer more than just a place
                to stay – they provide opportunities for cultural exchange,
                community engagement, and unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="mt-7 mb-4 flex text-left gap-9">
            <div className="flex-1">
              <h1 className="font-bold pb-2 text-xl">Our Mission?</h1>
              <p className="mt-3 w-64">
                Our mission at Hostel Stays goes beyond simply providing
                lodging; we strive to foster connections, promote
                sustainability, and empower local communities. By offering
                budget-friendly accommodations and promoting responsible tourism
                practices, we aim to create a positive impact on both travelers
                and the destinations they visit.
              </p>
            </div>
            <div className="flex-1">
              <h1 className="font-bold pb-2 text-xl">Our Vision?</h1>
              <p className="mt-3 w-64">
                Our vision at Hostel Stays is to become the leading platform for
                sustainable and enriching travel experiences in Nepal. We
                envision a future where travelers can immerse themselves in
                authentic cultural exchanges, support local economies, and
                contribute to environmental conservation efforts while exploring
                the beauty of Nepal.
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <img
            src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us Image"
            className="w-64 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
