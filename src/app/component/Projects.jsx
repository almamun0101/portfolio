"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock icons since we can't import react-icons
const techIcons = {
  React: <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>,
  Tailwind: <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold">T</div>,
  Nextjs: <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">N</div>,
  MERN: <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>,
  Html: <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">H</div>,
  Js: <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold">J</div>,
  Sass: <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>,
  Css: <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>,
  Bootstrap: <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>,
  Firebase: <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold">F</div>,
  Git: <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>,
};

const projects = [
  {
    name: "Chatting App",
    cat: "E-commerce",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Tailwind", "React", "Firebase", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/Chatting-App",
    live: "https://chattingappalmamun0101.netlify.app",
    description: "Real-time messaging application with modern UI"
  },
  {
    name: "HealthCare",
    cat: "Appointment System",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Nextjs","React", "Tailwind", "Html", "Js", "Git"],
    github: "https://github.com/almamun0101/doctor-apointment-system",
    live: "https://doctor-apontment-system-almamun0101.netlify.app/",
    description: "Medical appointment booking system"
  },
  {
    name: "Positivus",
    cat: "Digital Marketing",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Nextjs","React", "Tailwind", "Html", "Js", "Git"],
    github: "https://github.com/almamun0101/Devsaround-Positivus",
    live: "https://positivus-almamun0101.netlify.app/",
    description: "Digital marketing agency website"
  },
  {
    name: "Planto",
    cat: "Tree Plant Commerce",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Nextjs","React", "Tailwind", "Html", "Js", "Git"],
    github: "https://github.com/almamun0101/Planto",
    live: "https://plantoalmamun0101.netlify.app/",
    description: "E-commerce platform for plant enthusiasts"
  },
  {
    name: "Exclusive",
    cat: "E-commerce",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Nextjs","React", "Tailwind", "Html", "Js", "Git"],
    github: "https://github.com/almamun0101/exclusive",
    live: "https://exclusivealmamun0101.netlify.app/",
    description: "Premium shopping experience platform"
  },
  {
    name: "Portfolio",
    cat: "Content",
    based: "React",
    img: "/api/placeholder/400/250",
    tech: ["Nextjs", "React", "Tailwind", "Git", "Html", "Js"],
    github: "https://github.com/almamun0101/portfolio",
    live: "https://almamun0101.netlify.app/",
    description: "Personal portfolio showcase"
  }
];

const filterCategories = ["All", "E-commerce", "Content", "Appointment System", "Digital Marketing"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.cat === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const getIcon = (techArray) => {
    return techArray?.map((tech, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="relative group"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300">
          {techIcons[tech]}
        </div>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {tech}
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="text-6xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {filteredProjects.length}
            </motion.span>
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Projects
              </h2>
              <p className="text-gray-400 text-lg mt-2">Crafted with passion & precision</p>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  filter === category
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-400/25"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${index}`}
                variants={projectVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-6 h-full transition-all duration-500 hover:border-yellow-400/50">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/5 group-hover:to-yellow-400/10 transition-all duration-500" />
                  
                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {techIcons[project.based]}
                      </motion.div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-medium">
                          {project.cat}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <motion.div 
                    className="relative mb-4 rounded-lg overflow-hidden bg-gray-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {getIcon(project.tech)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 border border-white/20 hover:border-white/40 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="inline-block mr-2">🔗</span>
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-4 py-2 rounded-lg font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="inline-block mr-2">🚀</span>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div 
          className="flex justify-center items-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/almamun0101"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-black rounded-full font-bold text-white border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(250, 204, 21, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs"
              >
                G
              </motion.div>
              View All Projects on GitHub
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/20 group-hover:to-yellow-400/10 transition-all duration-500" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;