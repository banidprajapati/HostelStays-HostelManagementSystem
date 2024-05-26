import React from "react";

export const Footer = () => {
  const handleCopyNumber = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/helpcenter" className="hover:text-blue-600 hover:underline">Help Center</a>
            </li>
            
            <li>
              <a href="/helpcenter" className="hover:text-blue-600 hover:underline">Report Problems</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 ">Other Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="/aboutUs" className="hover:text-blue-600 hover:underline">About Us</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-600 hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-600 hover:underline">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 ">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+9779800000000" className="hover:text-blue-600 hover:underline" onClick={() => handleCopyNumber("+977-9864231151")}>+977-9864231151</a>
            </li>
            <li>
              <a href="https://mail.google.com/" className="hover:text-blue-600 hover:underline "target="_blank">Gmail</a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="hover:text-blue-600 hover:underline"target="_blank">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-gray-500">
        © {new Date().getFullYear()} Hostel Stays
      </p>
    </footer>
  );
};
