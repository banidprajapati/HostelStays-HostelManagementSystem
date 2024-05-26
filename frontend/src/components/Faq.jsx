import React from "react";
import { Footer } from "./Footer";

export const Faq = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-left mt-7">Frequently Asked Questions<span className="text-red-500 font-bold"> (FAQs)</span></h1>
         
            <h2 className="font-bold text-xl text-left mt-7">
              How do I make a booking?
            </h2>
            <p className="text-lg text-justify">
              Answer: You can make a booking by visiting our website, selecting
              your desired hostel, entering your booking details, and completing
              the payment process.
            </p>
            <h2 className=" mt-7 font-bold text-xl text-left">
              Can I cancel or modify my booking?{" "}
            </h2>
            <p className="text-lg text-justify">
              Answer: Yes, you can modify your booking during the booking
              process through your account on our website. Otherwise, please
              refer to our cancellation policy for details on cancellations
              after confirmation.
            </p>
            <h2 className=" mt-7 font-bold text-xl text-left">
              How can I contact customer support?
            </h2>
            <p className="text-lg text-justify">
              Answer: You can reach our customer support team through the
              contact information listed under "Contact Us" for assistance with
              your booking or any inquiries.
            </p>
        </div>

        <div className="w-1/2 p-4 mb-14">
          <div className="mb-4 mt-24">
            <h2 className="font-bold text-xl text-left">
              What is your check-in/check-out policy?
            </h2>
            <p className="text-lg text-justify">
              Answer: Our check-in and check-out times are from 10:00 am to
              10:00 pm. You can find this information on the booking
              confirmation or our website.
            </p>
            <h2 className=" mt-12 font-bold text-xl text-left">
              Are there age restrictions for booking a hostel?
            </h2>
            <p className="text-lg text-justify">
              Answer: Some hostels may have age restrictions or policies
              regarding unaccompanied minors. Please check the specific hostel's
              terms before booking.
            </p>
            <h2 className=" mt-8 font-bold text-xl text-left">
              Is my personal information secure?
            </h2>
            <p className="text-lg text-justify">
              Answer: We take data security seriously and use industry-standard
              encryption and security measures to protect your personal
              information.
            </p>
          </div>
        </div>
      </div>
          <Footer />
    </div>
  );
};
