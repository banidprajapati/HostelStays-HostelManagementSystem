import React from "react";

export const Description = () => {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold">
        <strong className="text-black">
          <div className="font-bold">Description</div>
        </strong>
      </h2>
      <br /> {/* Two lines of space */}
      <h3>
        <strong>Last Garden Apartment and Guest House</strong>
      </h3>
      <div className="flex items-center">
        <div className="bg-green-500 text-white px-2 py-1 mr-4 rounded">
          ★ 4
        </div>
        <div className="text-sm">100 Reviews</div>
      </div>
      <br /> {/* One line space */}
      <h3>
        <strong>Location</strong>
      </h3>
      <div className="text-sm">Address Line 1</div>
      <div className="text-sm">Address Line 2</div>
      <br /> {/* One line space */}
      <h3>
        <strong>Description</strong>
      </h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna
        a ipsum tincidunt laoreet. Cras nec dolor justo. Donec vel libero eu
        enim pretium vulputate. Integer nec arcu felis.
      </p>
    </div>
  );
};
