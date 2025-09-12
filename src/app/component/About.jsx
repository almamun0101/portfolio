"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock icons since we don't have react-icons
const IconWrapper = ({ children, className }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const techStack = [
  { name: "React", icon: "react.svg", color: "from-blue-400 to-blue-600" },
  {
    name: "Tailwind",
    icon: "tailwind.svg",
    color: "from-cyan-400 to-cyan-600",
  },
  { name: "Next.js", icon: "nextjs.png", color: "from-gray-700 to-gray-900" },
  {
    name: "MongoDB",
    icon: "mongodb.png",
    color: "from-green-400 to-green-600",
  },
  { name: "HTML5", icon: "html.svg", color: "from-orange-400 to-orange-600" },
  {
    name: "JavaScript",
    icon: "js.svg",
    color: "from-yellow-300 to-yellow-500",
  },
  { name: "Sass", icon: "sass.svg", color: "from-pink-400 to-pink-600" },
  { name: "CSS3", icon: "css.svg", color: "from-blue-400 to-blue-600" },
  {
    name: "Bootstrap",
    icon: "bootstrap.svg",
    color: "from-violet-500 to-violet-700",
  },
  { name: "Firebase", icon: "firebase.png", color: "from-red-400 to-red-600" },
  { name: "Express", icon: "express.png", color: "from-gray-600 to-gray-800" },
  { name: "Git", icon: "githublogo.png", color: "from-gray-600 to-gray-800" },
  { name: "Redux", icon: "redux.png", color: "from-gray-600 to-gray-800" },
  {
    name: "Postman",
    icon: "postmanlogo.png",
    color: "from-gray-600 to-gray-800",
  },
];

const designTools = [
  { name: "Figma", color: "from-purple-500 to-pink-500" },
  { name: "Adobe XD", color: "from-purple-600 to-blue-500" },
];

const devTools = [
  { name: "VS Code", color: "from-blue-500 to-blue-700" },
  { name: "GitHub", color: "from-gray-700 to-gray-900" },
  { name: "Postman", color: "from-orange-500 to-red-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // icons animate one after another
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
  hover: {
    y: -10,
    rotateX: 5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("tools");
  const [motionTab, setMotionTab] = useState(false);

  useEffect(() => {
    console.log("changed");
    setMotionTab(true);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting digital experiences with passion, precision, and a touch of
            magic ✨
          </motion.p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Who I Am Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            className="group"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-purple-500/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I am a passionate web developer dedicated to building clean,
                    modern, and efficient digital experiences that make a
                    difference.
                  </p>
                  <p>
                    My background combines both design aesthetics and front-end
                    coding skills, allowing me to deliver visually stunning and
                    performant interfaces.
                  </p>
                  <p>
                    I thrive on turning complex problems into intuitive,
                    user-friendly solutions that users love to interact with.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* My Approach Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            className="group"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Approach</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "User-centered design thinking",
                    "Performance-first development",
                    "Mobile-responsive solutions",
                    "Collaborative team player",
                    "Continuous learning mindset",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mr-3"></div>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex bg-slate-800/50 backdrop-blur-xl rounded-full p-2 border border-purple-500/20">
            {[
              { id: "skills", label: "Technical Skills", icon: "⚡" },
              { id: "design", label: "Design Tools", icon: "🎨" },
              { id: "tools", label: "Dev Tools", icon: "🛠️" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium hidden sm:inline">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" // <-- controlled animation instead of whileInView
          className="max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {activeTab === "skills" && (
              <motion.div
                key="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden" // animate out if you switch tab
                className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="group relative"
                  >
                    <div className="relative p-4 sm:p-6 bg-gradient-to-br text-black rounded-full cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-3">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          <img src={tech.icon} alt={tech.name} />
                        </div>
                        <span className="text-white font-medium text-xs sm:text-sm text-center leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {activeTab === "design" && motionTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {designTools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="group"
                >
                  <div
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${tool.color} shadow-xl cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-4">🎨</div>
                      <h3 className="text-white font-bold text-xl">
                        {tool.name}
                      </h3>
                    </div>
                    {console.log(tool)}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "tools" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {devTools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="group"
                >
                  <div
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${tool.color} shadow-xl cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-3">🛠️</div>
                      <h3 className="text-white font-bold text-lg">
                        {tool.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            Let's Build Something Amazing Together
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
