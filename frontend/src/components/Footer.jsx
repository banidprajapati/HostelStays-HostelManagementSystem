import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Cancellation</a>
            </li>
            <li>
              <a href="#">Report Problems</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 ">Other Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 ">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+9779800000000">+977-9800000000</a>
            </li>
            <li>
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>
              <a href="#">Follow us on social media</a>
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
