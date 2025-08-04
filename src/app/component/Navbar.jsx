"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="p-5">
      <div className="container">

      <nav className="bg-white px-5 py-3 rounded-full flex justify-between items-center shadow-md relative">
        <a href="/" className="font-bold text-xl text-black">Al Mamun Khan</a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-black font-medium">
          {navItems.map(item => (
            <li key={item} className="hover:text-gold cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 bg-black text-white rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-20 right-5 w-3/4 sm:w-1/2 bg-white p-5 rounded-xl shadow-lg z-50">
            <ul className="flex flex-col gap-4 text-black font-medium">
              {navItems.map(item => (
                <li key={item} className="hover:text-gold cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
