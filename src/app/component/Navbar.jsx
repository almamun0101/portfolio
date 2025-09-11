"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { RiHome2Line } from "react-icons/ri";
import { TiInfoLarge } from "react-icons/ti";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    title: "Home",
    href: "home",
    icon: <RiHome2Line size={25} />,
    gradient: ["from-[#a955ff]", "to-[#ea51ff]"],
  },
  {
    title: "About",
    href: "about",
    icon: <TiInfoLarge size={25} />,
    gradient: ["from-[#56CCF2]", "to-[#2F80ED]"],
  },
  {
    title: "Projects",
    href: "projects",
    icon: <MdWeb size={25} />,
    gradient: ["from-[#FF9966]", "to-[#FF5E62]"],
  },
  {
    title: "Git",
    href: "profile",
    icon: <FaGithub size={25} />,
    gradient: ["from-[#80FF72]", "to-[#7EE8FA]"],
  },
  {
    title: "Contact",
    href: "contact",
    icon: <MdOutlineContactSupport size={25} />,
    gradient: ["from-[#ffa9c6]", "to-[#f434e2]"],
  },
];

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuRef = useRef(null);

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
    <header className="relative container flex justify-center">
      <div className="fixed top-0 z-50 w-full">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex z-10 my-3 rounded-full gap-5 justify-center items-center relative">
          <div className="flex justify-end md:items-center md:justify-center font-[Poppins] opacity-90 hover:opacity-100">
            <ul className="flex md:flex-row gap-6 relative">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => scrollToSection(item.href)}
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
                  />
                  {/* glow effect */}
                  <div
                    className={`
                      absolute top-2 w-full h-full rounded-full bg-gradient-to-tr 
                      ${item.gradient.join(" ")}
                      blur-xl transition-opacity duration-500 -z-10
                      ${hovered === i ? "opacity-50" : "opacity-0"}
                    `}
                  />
                  {/* icon */}
                  {item.icon}
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

        {/* Mobile Navbar */}
        <div
          ref={menuRef}
          className="md:hidden fixed bottom-6 right-6 flex flex-col items-end gap-3"
        >
          {/* Menu items animation */}
          <AnimatePresence>
            {isOpen &&
              menuItems.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-tr ${item.gradient.join(
                    " "
                  )}`}
                >
                  {item.icon}
                </motion.button>
              ))}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center shadow-lg"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
