"use client";
import { useState } from "react";







export default function GradientMenu() {
  const [hovered, setHovered] = useState(null); 

  return (
    <div className="flex items-center justify-center p-2 font-[Poppins]">
      <ul className="flex gap-6 relative">
        {menuItems.map((item, i) => (
          <li
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`
              relative list-none w-[60px] h-[60px] rounded-full 
              bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)]
              flex items-center justify-center cursor-pointer
              transition-all duration-500 overflow-hidden
              ${hovered === i ? "w-[150px]" : ""}
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
  );
}
