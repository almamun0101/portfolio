"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { RiHome2Line } from "react-icons/ri";
import { TiInfoLarge } from "react-icons/ti";

import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const menuItems = [
  {
    title: "Home",
    icon: <RiHome2Line size={25} />,
    gradient: ["from-[#a955ff]", "to-[#ea51ff]"],
  },
  {
    title: "About",
    icon: <TiInfoLarge size={25} />,
    gradient: ["from-[#56CCF2]", "to-[#2F80ED]"],
  },
  {
    title: "Projects",
    icon: <MdWeb size={25} />,
    gradient: ["from-[#FF9966]", "to-[#FF5E62]"],
  },
  {
    title: "Git",
    icon: <FaGithub size={25} />,
    gradient: ["from-[#80FF72]", "to-[#7EE8FA]"],
  },
  {
    title: "Contact",
    icon: <MdOutlineContactSupport size={25} />,
    gradient: ["from-[#ffa9c6]", "to-[#f434e2]"],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuRef = useRef(null);
  const navItems = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="py-2">
      <div className="container">
        <nav className=" z-10 px-5 py-5 rounded-full flex md:flex-row flex-col gap-5  justify-center items-center shadow-md relative">
          {/* <a href="/" className="px-10 h-[50px] rounded-full 
              bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]
              flex items-center justify-center font-bold text-xl text-black">
            Al Mamun Khan
          </a> */}

          {/* Desktop Menu */}
          <div className="flex items-center justify-center font-[Poppins]">
            <ul className="flex gap-6 relative">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`
              relative list-none w-[50px] h-[50px] rounded-full 
              bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]
              flex items-center justify-center cursor-pointer
              transition-all duration-500 overflow-hidden
              ${hovered === i ? "w-[120px]" : ""}
            `}
                >
                  {/* gradient bg overlay */}
                  <div
                    className={`
                absolute inset-0 rounded-full bg-gradient-to-tr 
                ${item.gradient.join(" ")}
                transition-opacity duration-500
                ${hovered === i ? "opacity-100" : "opacity-0"}
              `}
                  ></div>

                  {/* glow effect */}
                  <div
                    className={`
                absolute top-2 w-full h-full rounded-full bg-gradient-to-tr 
                ${item.gradient.join(" ")}
                blur-xl transition-opacity duration-500 -z-10
                ${hovered === i ? "opacity-50" : "opacity-0"}
              `}
                  ></div>

                  {/* icon */}
                  {item.icon}

                  {/* class={`text-gray-500 text-[1.75em] transition-all duration-500 
                ${hovered === i ? "scale-0 text-white delay-0" : "delay-200"}`}
            ></> */}

                  {/* title */}
                  <span
                    className={`
                absolute uppercase text-white tracking-wide text-[1.1em]
                transition-all duration-500
                ${hovered === i ? "scale-100 delay-200" : "scale-0"}
              `}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

         
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
