"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-400 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
  Nextjs: <SiNextdotjs className="text-white text-2xl" />,
  MERN: <SiMongodb className="text-green-500 text-2xl" />,
};

const projects = [
  {
    name: "Chatting App",
    cat: "E-commerce",
    based: "React,React",
    img : "/chattingapp.png",
    github: "https://github.com/almamun0101/Chatting-App",
    live: "https://chattingappalmamun0101.netlify.app",
  },
  {
    name: "Vagitable-mart",
    cat: "Portfolio",
    based: "Nextjs",
    img : "/vegitablemart.png",
    github: "https://github.com/almamun0101/E-mart",
    live: "https://e-martalmamun0101.netlify.app/",
  },
  {
    name: "Finsweet",
    cat: "Productivity",
    based: "MERN",
    img : "/fineset.png",
    github: "https://github.com/almamun0101/finsweet",
    live: "https://finsweetalmamun0101.netlify.app/",
  },
  {
    name: "Gamer-web",
    cat: "Content",
    based: "Tailwind",
    img : "/gammerweb.png",
    github: "https://github.com/almamun0101/Gamer-web",
    live: "https://gamerwebalmamunkha.netlify.app/",
  },
  {
    name: "Honcok",
    cat: "Content",
    based: "Tailwind",
    img : "/hancok.png",
    github: "https://github.com/almamun0101/honcok",
    live: "https://honcokalmamun0101.netlify.app/",
  },
  {
    name: "Holmberg",
    cat: "Content",
    based: "Tailwind",
    img : "/holmberg.png",
    github: "https://github.com/almamun0101/Holmberg",
    live: "https://holmbergalmamun0101.netlify.app/",
  },
  {
    name: "innovate",
    cat: "Content",
    based: "Tailwind",
    img : "/innovate.png",
    github: "https://github.com/almamun0101/innovate",
    live: "https://innovatealmamun0101.netlify.app/",
  },
  {
    name: "omah",
    cat: "Content",
    based: "Tailwind",
    img : "/omah.png",
    github: "https://github.com/almamun0101/omah",
    live: "https://omahalmamun0101.netlify.app/",
  },
  {
    name: "SaulDesign",
    cat: "Content",
    based: "Tailwind",
    img : "",
    github: "https://github.com/almamun0101/SaulDesign",
    live: "https://sauldesignalmamun0101.netlify.app/",
  },
  {
    name: "To Do List",
    cat: "Content",
    based: "Tailwind",
    img : "/todolist.png",
    github: "https://github.com/almamun0101/to-do-list",
    live: "https://todolistalmamunkhan0101.netlify.app/",
  },
  
];

const Projects = () => {
  return (
   <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] py-16 px-4 sm:px-6 lg:px-20 text-white">
  <h2 className="text-3xl  items-center mx-auto font-extrabold text-center mb-16">
    <span className="italic p-5 text-6xl text-gold font-extrabold">
      {projects.length} 
      </span>
    Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {projects.map((p, i) => (
      <div
        key={i}
        className="group z-50 relative overflow-hidden rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#facc15]"
      >
        {/* Icon Badge */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-md group-hover:scale-110 transition">
            {techIcons[p.based]}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition">
              {p.name}
            </h3>
            <p className="text-sm text-gray-400 italic">{p.cat}</p>
          </div>
        </div>
        <div className="">
          <img src={p?.img || "/missing.jpg" } alt="" />
        </div>

        {/* Links */}
        <div className="mt-6 flex justify-between text-sm text-yellow-300 font-medium">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 underline"
          >
            GitHub Code
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 underline"
          >
            Live Preview
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Blurred Bubbles */}
  <div className="absolute top-[30%] left-10 w-[180px] h-[180px] bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
  <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse delay-300" />
</div>
  );
};

export default Projects;
