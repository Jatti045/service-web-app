import React, { useState } from "react";
import { Menu, X, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <nav className="relative bg-primary-navy ">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-32 py-4 flex justify-between items-center ">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary-red p-1 rounded-full">
            <Target className="w-full h-full text-white" />
          </div>
          <h1 className="text-lg font-bold text-white">Bullseye Advisors</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center text-white">
            <li
              onClick={() => navigate("/")}
              className="hover:text-gold cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/services")}
              className="hover:text-gold cursor-pointer"
            >
              Services
            </li>
            {/*            <li
              onClick={() => navigate("/about")}
              className="hover:text-gold cursor-pointer"
            >
              About
            </li> */}
          </ul>
          <button
            onClick={() => navigate("/schedule")}
            className="bg-primary-red text-white px-4 py-2 rounded-md hover:opacity-90 hover:cursor-pointer"
          >
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
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ].map((route) => (
              <li
                key={route.name}
                className="hover:text-primary-red cursor-pointer"
                onClick={() => {
                  navigate(route.path);
                  setIsOpen(false);
                }}
              >
                {route.name}
              </li>
            ))}
            <button
              className="bg-primary-red text-white px-4 py-2 rounded-md hover:opacity-90 mt-4"
              onClick={() => {
                navigate("/schedule");
                setIsOpen(false);
              }}
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
