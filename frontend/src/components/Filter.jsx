import React from "react";
import { Checkbox, Radio } from "@material-tailwind/react";

export const Filter = () => {
  return (
    <div className="bg-gray-200 w-96 text-left p-4">
      <div>
        <h1 className="text-xl font-bold mb-4">Filters</h1>
        <p className="mb-2">Popular locations in Kathmandu, Bagmati, Nepal</p>
        <h2 className="text-lg font-bold mb-2">Prices</h2>
        <p className="mb-2">900</p>
        <h2 className="text-lg font-bold mb-2">Facilities</h2>
        <div className="space-y-2">
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Spa</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Swimming Pool</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">TV</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Open Mic</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Kitchen</span>
          </label>
          {/* Add similar labels for other options */}
        </div>
        <h2 className="text-lg font-bold mb-2">Reviews</h2>
        <div className="space-y-2">
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">5</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">4+</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">3+</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">2+</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">1+</span>
          </label>
        </div>
        <p className="mb-2">900</p>
        <h2 className="text-lg font-bold mb-2">Popular Filter</h2>
        <div className="space-y-2">
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">5 Stars</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Breakfast Included</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Parking</span>
          </label>
          <label className="block">
            <Checkbox name="type" />
            <span className="ml-2">Free Wi-Fi</span>
          </label>
          {/* Add similar labels for other options */}
        </div>
      </div>
    </div>
  );
};
