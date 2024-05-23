import React from "react";
import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export const HelpCenter = () => {
  return (
    <div>
      <div className="container mb-20 mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-semibold text-center">How can we <span className="text-red-500 font-bold"> help</span> you?</h2>
        </div>
        <div className="rounded-lg flex items-center justify-center w-full gap-4 mb-10">
          <input
            type="text"
            placeholder="Report a problem"
            className="px-4 py-3 border-r-2 border-gray-400 bg-gray-200 focus:bg-gray-200 focus:outline-none h-12 rounded-lg placeholder-gray-700 w-3/5"
          />
          <button className="bg-blue-500 text-xl text-white px-10 py-2 rounded-lg hover:bg-blue-600 focus:outline-none  h-12 w-1/5">
            Submit
          </button>
        </div>
        <div className="grid grid-cols-1 ml-20 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:bg-gray-200 h-64 md:w-72">
            <div>
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-blue-500 mr-2 mt-4"
                size="2xl"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">About Us</h3>
              <p className="text-gray-700">
              For more information about us, explore our story or get in touch with our team at support.
              </p>
            </div>
            <a href="/aboutUs" className="  text-blue-500 hover:underline mt-5">
              About Us
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:bg-gray-200 h-64 md:w-72">
            <div>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-blue-500 mr-2 mt-4"
                size="2xl"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">FAQs</h3>
              <p className="text-gray-700">
                Looking for quick answers? Check out our FAQ section for
                commonly asked questions and solutions.
              </p>
            </div>
            <a href="/faq" className="text-blue-500 hover:underline mt-5  ">
              View FAQs
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:bg-gray-200 h-64 md:w-72">
            <div>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-blue-500 mr-2 mt-4"
                size="2x"
                flip="horizontal"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Contact Us</h3>
              <p className="text-gray-700">
                For reporting any issues or problems, please refer to our
                support or contact us for assistance.
              </p>
            </div>
            <a href="#" className="text-blue-500 hover:underline mt-5 ">
              Call Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
