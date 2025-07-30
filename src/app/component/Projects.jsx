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
    <div>
       <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] py-16 px-4 sm:px-6 lg:px-20 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-gray-500 px-5 py-5 rounded-2xl duration-300 hover:bg-white/20 hover:translate-y-1 flex flex-col justify-between z-50  hover:shadow-[0_0_30px_#facc15] overflow-hidden group"
            >
              <div className="">
                <div className="flex items-center gap-3 ">

                <div className="flex  gap-2 items-center group-hover:bg-white/60 p-1 rounded-full duration-200 transition group-hover:scale-120">
                  {techIcons[p.based]}
                </div>
                  <h3 className="text-white italic group-hover:text-gold text-xl font-semibold transition duration-300">
                    {p?.name}
                  </h3>
                </div>
                <div className="italic flex justify-between  pt-5 text-sm text-gold">
                  <a href={p.github}
                target="_blank"
                rel="noopener noreferrer" className="underline hover:text-yellow-100">
                    Git Code
                  </a>
                  <a  href={p.github}
                target="_blank"
                rel="noopener noreferrer"className="underline hover:text-yellow-100">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <div className="absolute animate-pulse  top-[30%] left-20 bg-gold w-50 h-50 rounded-full blur-2xl hover:bg-yellow-400 duration-300 transform-3d">
          
        </div>
        <div className="absolute bottom-[5%] right-20 bg-gold w-50 h-50 rounded-full blur-2xl hover:bg-yellow-400 duration-300 transform-3d">
          
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
