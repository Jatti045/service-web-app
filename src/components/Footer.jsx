import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-32">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Bullseye Advisors</h2>
          <p className="text-sm">
            Designed by
            <a
              className={"hover:opacity-90"}
              target="_blank"
              href={"https://james-attia.vercel.app/"}
            >
              {" "}
              James Attia{" "}
            </a>
            &
            <a
              className={"hover:opacity-90"}
              target="_blank"
              href={"https://edward-joseph.vercel.app/"}
            >
              {" "}
              Edward-Joseph Fattouch
            </a>
            .
          </p>
          <div className="flex space-x-4 mt-2">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map(({ icon, label }) => {
              const Icon = icon;
              return (
                <Icon
                  key={label}
                  size={24}
                  className="hover:text-primary-red transition-colors cursor-pointer"
                />
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About Us", "Contact Us"].map((link) => (
              <li
                key={link}
                className="hover:text-primary-red transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {["Blog", "FAQ", "Support", "Careers"].map((resource) => (
              <li
                key={resource}
                className="hover:text-primary-red transition-colors cursor-pointer"
              >
                {resource}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-sm">123 Bank Street, Ottawa, On</p>
          <p className="text-sm">(613) 123-4567</p>
          <p className="text-sm">info@bullseyeadvisors.com</p>
          <h3 className="text-xl font-semibold mt-6">Stay Updated</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
            <button
              type="submit"
              className="bg-primary-red px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-32">
          <p className="text-sm">
            &copy; {currentYear} Bullseye Advisors. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-primary-red transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-primary-red transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
