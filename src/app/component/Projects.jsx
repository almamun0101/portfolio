"use client";
import React from "react";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import {
  FaHtml5,
  FaJs,
  FaSass,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { animate, motion } from "framer-motion";

const techIcons = {
  React: <FaReact className="text-blue-400 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
  Nextjs: <SiNextdotjs className="text-black text-2xl" />,
  MERN: <SiMongodb className="text-green-500 text-2xl" />,
  Html: <FaHtml5 className="text-orange-500 text-2xl" />,
  Js: <FaJs className="text-yellow-300 text-2xl" />,
  Sass: <FaSass className="text-pink-300 text-2xl" />,
  Css: <FaCss3 className="text-blue-500 text-2xl" />,
  Bootstrap: <FaBootstrap className="text-violet-600 text-2xl" />,
  Firebase: <IoLogoFirebase className="text-red-400 text-2xl" />,
  Git: <FaGithub className="text-black text-2xl" />,
};

const projects = [
  {
    name: "Chatting App",
    cat: "E-commerce",
    based: "React",
    img: "/chattingapp.png",
    tech: ["Tailwind", "Html", "React", "Firebase", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/Chatting-App",
    live: "https://chattingappalmamun0101.netlify.app",
  },
  {
    name: "Planto",
    cat: "Content",
    based: "Nextjs",
    img: "/planto.png",
    tech: ["React", "Tailwind", "Html", "Firebase", "Js", "Git"],
    github: "https://github.com/almamun0101/to-do-list",
    live: "https://plantoalmamun0101.netlify.app/",
  },
  {
    name: "Exclusive",
    cat: "E-shop",
    based: "Nextjs",
    img: "/Exclusive.png",
    tech: ["React", "Tailwind", "Html", "Firebase", "Js", "Git"],
    github: "https://github.com/almamun0101/exclusive",
    live: "https://exclusivealmamun0101.netlify.app/",
  },
  {
    name: "Protfolio",
    cat: "Content",
    based: "Nextjs",
    img: "/protfolio.png",
    tech: ["Nextjs", "React", "Tailwind", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/portfolio",
    live: "https://almamun0101.netlify.app/",
  },
  {
    name: "Vagitable-mart",
    cat: "Portfolio",
    based: "React",
    img: "/vegitablemart.png",
    tech: ["React", "Tailwind", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/E-mart",
    live: "https://e-martalmamun0101.netlify.app/",
  },
  {
    name: "Finsweet",
    cat: "Productivity",
    based: "MERN",
    img: "/fineset.png",
    tech: ["Sass", "Git", "Html", "Css", "Bootstrap"],
    github: "https://github.com/almamun0101/finsweet",
    live: "https://finsweetalmamun0101.netlify.app/",
  },
  {
    name: "Gamer-web",
    cat: "Content",
    based: "React",
    img: "/gammerweb.png",
    tech: ["React", "Tailwind", "Git", "Html"],
    github: "https://github.com/almamun0101/Gamer-web",
    live: "https://gamerwebalmamunkha.netlify.app/",
  },
  {
    name: "Honcok",
    cat: "Content",
    based: "Bootstrap",
    img: "/hancok.png",
    tech: ["Bootstrap", "Git", "Html", "Css"],
    github: "https://github.com/almamun0101/honcok",
    live: "https://honcokalmamun0101.netlify.app/",
  },
  {
    name: "Holmberg",
    cat: "Content",
    based: "React",
    img: "/holmberg.png",
    tech: ["React", "Tailwind", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/Holmberg",
    live: "https://holmbergalmamun0101.netlify.app/",
  },
  {
    name: "innovate",
    cat: "Content",
    based: "Sass",
    img: "/innovate.png",
    tech: ["Sass", "Git", "Html", "Css", "Js"],
    github: "https://github.com/almamun0101/innovate",
    live: "https://innovatealmamun0101.netlify.app/",
  },
  {
    name: "omah",
    cat: "Content",
    based: "Tailwind",
    img: "/omah.png",
    tech: ["Html", "Css", "Git"],
    github: "https://github.com/almamun0101/omah",
    live: "https://omahalmamun0101.netlify.app/",
  },
  {
    name: "SaulDesign",
    cat: "Content",
    based: "Tailwind",
    img: "/sauldesign.png",
    tech: ["React", "Tailwind", "Html", "Git", "Js"],
    github: "https://github.com/almamun0101/SaulDesign",
    live: "https://sauldesign-almamun0101.netlify.app/",
  },
  {
    name: "To Do List",
    cat: "Content",
    based: "Tailwind",
    img: "/todolist.png",
    tech: ["React", "Tailwind", "Html", "Firebase", "Js", "Git"],
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
      <div className="container">
        <h2 className="text-3xl  items-center mx-auto font-extrabold text-center mb-16">
          <span className="italic p-5 text-6xl text-gold font-extrabold">
            {projects.length}
          </span>
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => {
            const columns = 3;
            const colIndex = i % columns;
            let initial;
            if (colIndex === 0) {
              initial = { opacity: 0, x: -100 }; // From left
            } else if (colIndex === columns - 1) {
              initial = { opacity: 0, x: 100 }; // From right
            } else {
              initial = { opacity: 0, y: 100 }; // From bottom
            }
            return (
              <motion.div
                key={i}
                initial={initial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
                  <div className=" flex flex-wrap gap-3 p-2">
                    {getIcon(p?.tech)}
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
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center items-center my-10">
          <a className="  px-5 py-2 flex items-center gap-5  rounded-full font-medium transition-all bg-gold/10 text-yellow-400 border-2 border-yellow-400 hover:scale-105 duration-300">
            <FaGithub className="border border-gold rounded-full " size={25} />
            My Git
          </a>
        </div>

        {/* Blurred Bubbles */}
        <div className="absolute top-[30%] left-10 w-[180px] h-[180px] bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse delay-300" />
      </div>
    </div>
  );
};

export default Projects;
