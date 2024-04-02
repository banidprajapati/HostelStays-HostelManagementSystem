import React from "react";
import {useToast, Button} from "@chakra-ui/react";

export const Room = () => {
  return (
    <div className="max-w-96 bg-gray-200 rounded-lg text-left">
      <img
        src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=2"
        alt="About Us Image"
        className="rounded-tl-lg rounded-tr-lg w-96"
      />
      <div className="px-4 py-2 flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">OYO 136 Hotel Om Plaza</h2>
        <p>Bhatbhatini, Naxal</p>
        <div className="flex flex-row gap-6">
          <div className="bg-green-400 flex gap-2">
            <p>stricn</p>
            <p>5.2</p>
          </div>
          <div>
            <p>100 reviews</p>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">NRs. 1500</h1>
      </div>
    </div>
  );
};
