// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-lg font-bold hover:text-gray-400">
              MyLogo
            </a>
          </div>
          <nav className="mb-4 md:mb-0">
            <a href="#" className="px-3 hover:text-gray-400">
              Home
            </a>
            <a href="#" className="px-3 hover:text-gray-400">
              About
            </a>
            <a href="#" className="px-3 hover:text-gray-400">
              Services
            </a>
            <a href="#" className="px-3 hover:text-gray-400">
              Contact
            </a>
          </nav>
          <div>
            <p className="text-sm">
              &copy; 2024 MyCompany. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
