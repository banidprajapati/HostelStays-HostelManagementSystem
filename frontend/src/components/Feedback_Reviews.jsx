import React from "react";

export const Feedback_Reviews = () => {
  return (
    <div className="text-left ml-2 mr-0">
      <h2 style={{ fontSize: "1.5rem" }}>
        <strong className="text-black">
          <span>Feedback and Reviews</span>
        </strong>
      </h2>
      <br /> {/* One line of space */}
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <strong className="mr-6">Sonam Yunjan, 13 Apr 2023</strong>
          <div className="flex items-center">
            <div className="bg-green-500 text-white px-2 py-1 rounded mr-4">
              ★ 3
            </div>
          </div>
        </div>
        <div className="ml-0 text-left">Short review goes here...</div>{" "}
        {/* Gap before the review paragraph */}
      </div>
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <strong className="mr-6">John Doe, 15 Apr 2023</strong>
          <div className="flex items-center">
            <div className="bg-green-500 text-white px-2 py-1 rounded mr-4">
              ★ 4
            </div>
          </div>
        </div>
        <div className="ml-0 text-left">Another short review goes here...</div>{" "}
        {/* Gap before the review paragraph */}
      </div>
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <strong className="mr-6">Jane Smith, 17 Apr 2023</strong>
          <div className="flex items-center">
            <div className="bg-green-500 text-white px-2 py-1 rounded mr-4">
              ★ 5
            </div>
          </div>
        </div>
        <div className="ml-0 text-left">
          Yet another short review goes here...
        </div>{" "}
        {/* Gap before the review paragraph */}
      </div>
    </div>
  );
};
