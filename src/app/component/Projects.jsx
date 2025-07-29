"use client";
import React from "react";

const project = [
  {
    name: " Project !",
    cat: "e-comerce",
    based: "react",
    github: "jhdsjsdjsjds",
    live: "sjjhcss",
  },
  {
    name: " Project !",
    cat: "e-comerce",
    based: "react",
    github: "jhdsjsdjsjds",
    live: "sjjhcss",
  },
  {
    name: " Project !",
    cat: "e-comerce",
    based: "react",
    github: "jhdsjsdjsjds",
    live: "sjjhcss",
  },
  {
    name: " Project !",
    cat: "e-comerce",
    based: "react",
    github: "jhdsjsdjsjds",
    live: "sjjhcss",
  },
];
const Projects = () => {
  return (
    <div>
      <div className="">
        <h2 className="p-10 text-gold text-2xl font-bold text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-2 ">
          {project.map((p) => (
            <div className="border-2 bg-white/50 border-gold rounded-lg p-5 m-10 hover:bg-white/70 hover:text-yellow-500 duration-300">
              <h3 className="text-gold text-xl font-semibold">Project 1</h3>
              <div className="w-full flex justify-between px-2 pt-5">
                <a href="">Git Code</a>
                <a href="">Live Preview</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
