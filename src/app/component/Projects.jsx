"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { FaHtml5 ,FaJs ,FaSass,FaCss3 ,FaBootstrap   } from "react-icons/fa";

const techIcons = {
  React: <FaReact className="text-blue-400 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
  Nextjs: <SiNextdotjs className="text-black text-2xl" />,
  MERN: <SiMongodb className="text-green-500 text-2xl" />,
  Html: <FaHtml5 className="text-orange-500 text-2xl" />,
  Js: <FaJs className="text-yellow-300 text-2xl" />,
  Sass : <FaSass className="text-pink-300 text-2xl" />,
  Css : <FaCss3  className="text-blue-500 text-2xl" />,
  Bootstrap  : <FaBootstrap   className="text-violet-600 text-2xl" />,
};

const projects = [
  {
    name: "Chatting App",
    cat: "E-commerce",
    based: "React",
    img: "/chattingapp.png",
    tech: ["Tailwind", "Html", "React"],
    github: "https://github.com/almamun0101/Chatting-App",
    live: "https://chattingappalmamun0101.netlify.app",
  },
  {
    name: "Protfolio",
    cat: "Content",
    based: "Nextjs",
    img: "/protfolio.png",
    tech: ["Nextjs", "React", "Tailwind"],
    github: "https://github.com/almamun0101/portfolio",
    live: "https://almamun0101.netlify.app/",
  },
  {
    name: "Vagitable-mart",
    cat: "Portfolio",
    based: "React",
    img: "/vegitablemart.png",
    tech: ["React", "Tailwind","Js"],
    github: "https://github.com/almamun0101/E-mart",
    live: "https://e-martalmamun0101.netlify.app/",
  },
  {
    name: "Finsweet",
    cat: "Productivity",
    based: "MERN",
    img: "/fineset.png",
    tech: ["Sass", "Html", "Css","Bootstrap"],
    github: "https://github.com/almamun0101/finsweet",
    live: "https://finsweetalmamun0101.netlify.app/",
  },
  {
    name: "Gamer-web",
    cat: "Content",
    based: "React",
    img: "/gammerweb.png",
    tech: ["React","Tailwind",  "Html"],
    github: "https://github.com/almamun0101/Gamer-web",
    live: "https://gamerwebalmamunkha.netlify.app/",
  },
  {
    name: "Honcok",
    cat: "Content",
    based: "Bootstrap",
    img: "/hancok.png",
    tech: ["Bootstrap", "Html", "Css"],
    github: "https://github.com/almamun0101/honcok",
    live: "https://honcokalmamun0101.netlify.app/",
  },
  {
    name: "Holmberg",
    cat: "Content",
    based: "React",
    img: "/holmberg.png",
    tech: ["React", "Tailwind", "Html","Js"],
    github: "https://github.com/almamun0101/Holmberg",
    live: "https://holmbergalmamun0101.netlify.app/",
  },
  {
    name: "innovate",
    cat: "Content",
    based: "Sass",
    img: "/innovate.png",
    tech: ["Sass", "Html", "Css","Js"],
    github: "https://github.com/almamun0101/innovate",
    live: "https://innovatealmamun0101.netlify.app/",
  },
  {
    name: "omah",
    cat: "Content",
    based: "Tailwind",
    img: "/omah.png",
    tech: ["Tailwind", "Html", "React"],
    github: "https://github.com/almamun0101/omah",
    live: "https://omahalmamun0101.netlify.app/",
  },
  {
    name: "SaulDesign",
    cat: "Content",
    based: "Tailwind",
    img: "/sauldesign.png",
    tech: ["Tailwind", "Html", "React"],
    github: "https://github.com/almamun0101/SaulDesign",
    live: "https://sauldesign-almamun0101.netlify.app/",
  },
  {
    name: "To Do List",
    cat: "Content",
    based: "Tailwind",
    img: "/todolist.png",
    tech: ["Tailwind", "Html", "React"],
    github: "https://github.com/almamun0101/to-do-list",
    live: "https://todolistalmamunkhan0101.netlify.app/",
  },
];

const Projects = () => {
  const getIcon = (icon) => {
    return icon?.map((i, index) => (
      <span
        key={index}
        className="bg-white rounded-full p-2 hover:scale-110 transition duration-200"
      >
        {techIcons[i]}
      </span>
    ));
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] py-16 px-4 sm:px-6 lg:px-20 text-white">
      <h2 className="text-3xl  items-center mx-auto font-extrabold text-center mb-16">
        <span className="italic p-5 text-6xl text-gold font-extrabold">
          {projects.length}
        </span>
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => {
          return (
            <div
              key={i}
              className="group z-50 relative overflow-hidden rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#facc15]"
            >
              {/* Icon Badge */}
              <div className="flex items-center  justify-between">
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
                {/* <div className="flex gap-1">{getIcon(p.tech)}</div> */}
              </div>
              <div className="">
                <img
                  src={p?.img || "/missing.jpg"}
                  alt={p.name}
                  className="hover:scale-110 transition duration-500 my-5 w-full"
                />
              </div>
              <div className="">
                <h2>Tech I Used </h2>
                <div className=" flex gap-3 p-2">{getIcon(p?.tech)}</div>
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
          );
        })}
      </div>

      {/* Blurred Bubbles */}
      <div className="absolute top-[30%] left-10 w-[180px] h-[180px] bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse delay-300" />
    </div>
  );
};

export default Projects;
