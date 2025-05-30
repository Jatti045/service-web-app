import React, { useState } from "react";
import { Menu, X, Target } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-primary-navy shadow-md">
      <div className="container mx-auto px-4 sm:px-8 md:px-24 lg:px-32 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary-red rounded-full">
            <Target className="w-full h-full text-white" />
          </div>
          <h1 className="text-lg font-bold text-white">Bullseye Advisors</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center text-white">
            <li className="hover:text-primary-red cursor-pointer">Home</li>
            <li className="hover:text-primary-red cursor-pointer">Services</li>
            <li className="hover:text-primary-red cursor-pointer">About</li>
          </ul>
          <button className="bg-primary-red text-white px-4 py-2 rounded-md hover:opacity-90">
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute w-full left-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-800">
            {["Home", "Services", "About"].map((label) => (
              <li
                key={label}
                className="hover:text-primary-red cursor-pointer"
                onClick={toggleMenu}
              >
                {label}
              </li>
            ))}
            <button
              className="bg-primary-red text-white px-4 py-2 rounded-md hover:opacity-90 mt-4"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
