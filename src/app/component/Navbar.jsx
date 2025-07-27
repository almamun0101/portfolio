"use client";
import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide icons

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="p-5">
        <nav>
          <div className="bg-white p-2 relative text-black px-5 rounded-full flex justify-between items-center">
            <div className="logo">
              <a href="/">
                <h2>Al Mamun Khan</h2>
              </a>
            </div>
            <div className="bg-black text-white pl-4  rounded-full flex gap-3  items-center justify-center">
              <h2>Menu </h2>
              <div className="flex justify-center items-center bg-gold w-full h-full rounded-full p-3">
                <button
                  className=""
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>{" "}
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-20 right-8 w-1/4 bg-white p-4 rounded-lg shadow-lg">
              <ul className="text-black md:flex space-x-4">
                <li className="border-b border-gray-200 p-2 rounded-2xl hover:bg-gray-200">
                  Home
                </li>
                <li className="border-b border-gray-200 p-2 rounded-2xl hover:bg-gray-200">
                  About
                </li>
                <li className="border-b border-gray-200 p-2 rounded-2xl hover:bg-gray-200">
                  Services
                </li>
                <li className="p-2 rounded-2xl hover:bg-gray-200">Contact</li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default navbar;
