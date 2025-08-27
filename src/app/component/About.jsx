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
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DotScreenShader } from "@/components/dot-shader-background";

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

const design = [
  { name: "Figma", logo: "/figma.png" },
  { name: "Adobe XD", logo: "/adobexd.png" },
];
const tools = [
  { name: "VS Code", logo: "/vscodelogo.png" },
  { name: "Git Hub", logo: "/githublogo.png" },
  { name: "Postman", logo: "/postmanlogo.png" },
];

const About = () => {
  const techIconsArray = Object.entries(techIcons);
  const firstRow = techIconsArray?.slice(0, 6);
  const secRow = techIconsArray.slice(6);

  return (
    <div className=" w-full h-300 flex flex-col  items-center justify-center relative bg-black px-5">
      <div className="hidden md:block absolute inset-0">
        <DotScreenShader />
      </div>

      <div className="container py-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto py-5">
          {/* Who I Am Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="bg-gray-800 bg-opacity-60 border border-yellow-500 backdrop-blur-md rounded-xl shadow-xl p-6  hover:-translate-y-2 hover:shadow-yellow-400/30 transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-2">
                I am a passionate web developer dedicated to building clean,
                modern, and efficient digital experiences.
              </p>
              <p className="text-gray-300 mb-2">
                My background combines both design aesthetics and front-end
                coding skills, allowing me to deliver visually appealing and
                performant interfaces.
              </p>
              <p className="text-gray-300">
                I thrive on turning complex problems into intuitive,
                user-friendly designs.
              </p>
            </div>
          </motion.div>

          {/* My Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="bg-gray-800 bg-opacity-60 border border-yellow-500 hover:-translate-y-2 backdrop-blur-md rounded-xl shadow-xl p-6 hover:shadow-yellow-400/30 transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                My Skills
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js, Redux Toolkit</li>
                <li>Responsive Web Design</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Version Control with Git & GitHub</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-5 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-5">
          Design I Used
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {design.map((d, index) => (
            <div
              key={index}
              className="bg-white flex gap-2 justify-between items-center pr-4  rounded-full hover:scale-110 trasition duration-200"
            >
              <img
                src={d.logo}
                alt=""
                className="w-10 h-10 border bg-white  rounded-full hover:scale-110 trasition duration-200"
              />
              <h3 className="text-black ">{d.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="py-5 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-5">
          Skill's
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {firstRow.map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-6 rounded-full hover:scale-110 trasition duration-200"
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-5">
          {secRow.map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-6 rounded-full hover:scale-110 trasition duration-200"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="py-5 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-5">
          Tools I Used
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {tools.map((d, index) => (
            <div
              key={index}
              className="bg-white flex gap-5 py-1 justify-between items-center px-4  rounded-full hover:scale-110 trasition duration-200"
            >
              <img
                src={d.logo}
                alt=""
                className="w-10 h-10 border bg-white  rounded-full hover:scale-110 trasition duration-200"
              />
              <h3 className="text-black ">{d.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
