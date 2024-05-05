import React from "react";
import { Footer } from "./Footer";

export const Privacy = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-4 text-left ">
          <h1 className="font-bold text-3xl mb-7">Privacy Policy</h1>
          <h1 className="text-xl  ">
            Our role in your{" "}
            <span className="text-red-600 font-semibold">privacy</span>
          </h1>
          <p className="mt-4 text-justify">
            {" "}
            {/* Added text-justify class */}
            Our role in your privacy is to ensure that your personal information
            is collected, used, and protected responsibly. We prioritize
            transparency and security in handling your data, aiming to provide
            you with a safe and enjoyable experience while using our hostel
            management system. Your trust is important to us, and we are
            committed to upholding the highest standards of privacy protection
            throughout your interactions with Hoste Stays.
          </p>
          <h1 className="text-xl  mt-7">
            Your{" "}
            <span className="text-red-600 font-semibold">Responsibilities</span>
          </h1>
          <ul className="list-disc pl-5 mt-4">
            <li>Provide accurate information during booking.</li>
            <li>Make timely payments for bookings.</li>
            <li>Follow our terms and policies.</li>
            <li>Secure login credentials and personal data.</li>
            <li>Use the system respectfully and legally.</li>
            <li>Keep contact information updated.</li>
            <li>Respect others' privacy.</li>
          </ul>
        </div>

        <div className="w-1/2 mt-7 mb-7">
          <img
          className="ml-8 "
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/207304974.jpg?k=3a180bedb7c395e6891fb7bdfff43b70af8a8682698dd3a5cacf7bfd925965e6&o=&hp=1"
            alt="Hostel Room"
            style={{ width: "478px", height: "550px" }}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
