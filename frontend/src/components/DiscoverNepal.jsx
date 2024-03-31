import React from "react";

export const DiscoverNepal = () => {
  const places = [
    {
      name: "Kathmandu",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
    {
      name: "Pokhara",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
    {
      name: "Biratnagar",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
    {
      name: "Jhapa",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
    {
      name: "Nepalgunj",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
    {
      name: "Nepalgunj",
      image:
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2",
    },
  ];

  return (
    <>
      <h1 className=" text-2xl font-bold text-left">Discover Nepal.</h1>
      <div className="flex flex-col items-left  font-poppins">
        <div className="flex justify-left items-left gap-14">
          {places.map((place) => (
            <div key={place.name} className=" mb-4">
              <img
                src={place.image}
                alt="About Us Image"
                className="w-40 h-40 object-cover rounded-full"
              />
              <p className="text-center mt-2">{place.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
