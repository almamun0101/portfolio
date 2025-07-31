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
    name: "E-commerce App",
    cat: "E-commerce",
    based: "React",
    github: "https://github.com/yourname/ecommerce-app",
    live: "https://your-ecommerce-app.netlify.app",
  },
  {
    name: "Portfolio Website",
    cat: "Portfolio",
    based: "Nextjs",
    github: "https://github.com/yourname/portfolio",
    live: "https://your-portfolio-site.vercel.app",
  },
  {
    name: "Task Manager",
    cat: "Productivity",
    based: "MERN",
    github: "https://github.com/yourname/task-manager",
    live: "https://task-manager-app.vercel.app",
  },
  {
    name: "Blog Platform",
    cat: "Content",
    based: "Tailwind",
    github: "https://github.com/yourname/blog-platform",
    live: "https://blog-platform.netlify.app",
  },
];

const Projects = () => {
  return (
   <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] py-16 px-4 sm:px-6 lg:px-20 text-white">
  <h2 className="text-4xl font-extrabold text-center mb-16">Projects</h2>

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

<div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] py-16 px-4 sm:px-6 lg:px-20 text-white">
  <h2 className="text-4xl font-extrabold text-center mb-16">💼 My Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {projects.map((p, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#facc15]"
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
</div>;
