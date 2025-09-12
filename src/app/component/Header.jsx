"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Typewriter component (simplified version)
const Typewriter = ({
  text,
  speed = 70,
  className,
  waitTime = 1500,
  deleteSpeed = 40,
  cursorChar = "_",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const textArray = Array.isArray(text) ? text : [text];
    const fullText = textArray[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), waitTime);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    text,
    speed,
    waitTime,
    deleteSpeed,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>
        {cursorChar}
      </span>
    </span>
  );
};

// Shooting Stars component (simplified)
const ShootingStars = ({
  starColor,
  trailColor,
  minSpeed,
  maxSpeed,
  minDelay,
  maxDelay,
}) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -10,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        delay: Math.random() * (maxDelay - minDelay) + minDelay,
      };
      return star;
    };

    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-5), createStar()]);
    }, 2000);

    return () => clearInterval(interval);
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: star.x, y: -10, opacity: 0 }}
          animate={{
            x: star.x + 200,
            y: window.innerHeight + 10,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.speed / 10,
            delay: star.delay / 1000,
            ease: "linear",
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: starColor,
            boxShadow: `0 0 6px ${trailColor}`,
          }}
        />
      ))}
    </div>
  );
};

// const skills = [
//   {
//     text: "Html",
//     icon: "./html.svg",
//     position: { desktop: "top-[5%] left-[8%]", mobile: "order-1" },
//     direction: { x: -100, y: -50 },
//   },
//   {
//     text: "Bootstrap",
//     icon: "./bootstrap.svg",
//     position: { desktop: "top-[5%] right-[8%]", mobile: "order-2" },
//     direction: { x: 100, y: -50 },
//   },
//   {
//     text: "CSS",
//     icon: "./css.svg",
//     position: { desktop: "top-[25%] left-[2%]", mobile: "order-3" },
//     direction: { x: -100, y: 0 },
//   },
//   {
//     text: "Sass",
//     icon: "./sass.svg",
//     position: { desktop: "top-[25%] right-[2%]", mobile: "order-4" },
//     direction: { x: 100, y: 0 },
//   },
//   {
//     text: "JS",
//     icon: "./js.svg",
//     position: { desktop: "top-[45%] left-[5%]", mobile: "order-5" },
//     direction: { x: -100, y: 50 },
//   },
//   {
//     text: "Next",
//     icon: "./next.svg",
//     position: { desktop: "top-[45%] right-[5%]", mobile: "order-6" },
//     direction: { x: 100, y: 50 },
//   },
//   {
//     text: "React",
//     icon: "./react.svg",
//     position: { desktop: "top-[65%] left-[8%]", mobile: "order-7" },
//     direction: { x: -100, y: 100 },
//   },
//   {
//     text: "Tailwind",
//     icon: "./tailwind.svg",
//     position: { desktop: "top-[65%] right-[8%]", mobile: "order-8" },
//     direction: { x: 100, y: 100 },
//   },
// ];
const skills = [
  {
    text: "HTML",
    icon: "./html.svg",
    color: "from-orange-400 to-red-500",
    position: { desktop: "top-[5%] left-[8%]", mobile: "order-1" },
    direction: { x: -100, y: -50 },
  },
  {
    text: "Bootstrap",
    icon: "./bootstrap.svg",
    color: "from-purple-400 to-pink-500",
    position: { desktop: "top-[5%] right-[8%]", mobile: "order-2" },
    direction: { x: 100, y: -50 },
  },
  {
    text: "CSS",
    icon: "./css.svg",
    color: "from-blue-400 to-cyan-500",
    position: { desktop: "top-[25%] left-[2%]", mobile: "order-3" },
    direction: { x: -100, y: 0 },
  },
  {
    text: "Sass",
    icon: "./sass.svg",
    color: "from-pink-400 to-rose-500",
    position: { desktop: "top-[25%] right-[2%]", mobile: "order-4" },
    direction: { x: 100, y: 0 },
  },
  {
    text: "JavaScript",
    icon: "./js.svg",
    color: "from-yellow-400 to-orange-500",
    position: { desktop: "top-[45%] left-[5%]", mobile: "order-5" },
    direction: { x: -100, y: 50 },
  },
  {
    text: "Next.js",
    icon: "./nextjs.png",
    color: "from-gray-400 to-gray-600",
    position: { desktop: "top-[45%] right-[5%]", mobile: "order-6" },
    direction: { x: 100, y: 50 },
  },
  {
    text: "React",
    icon: "./react.svg",
    color: "from-cyan-400 to-blue-500",
    position: { desktop: "top-[65%] left-[8%]", mobile: "order-7" },
    direction: { x: -100, y: 100 },
  },
  {
    text: "Tailwind",
    icon: "./tailwind.svg",
    color: "from-teal-400 to-cyan-500",
    position: { desktop: "top-[65%] right-[8%]", mobile: "order-8" },
    direction: { x: 100, y: 100 },
  },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />

        {/* Interactive cursor effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, rgba(250, 204, 21, 0) 70%)`,
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        {/* Animated stars background */}
        <div className="stars absolute inset-0" />
      </div>

      {/* Shooting Stars */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />

      <div className="relative z-10 container mx-auto">
        <motion.div
          className="flex flex-col items-center text-center gap-8 pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold leading-tight"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                Hello! I'm
              </motion.h1>
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.05 }}
              >
                Al Mamun Khan
              </motion.h1>
            </div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-xl md:text-3xl font-semibold">
                <Typewriter
                  text={[
                    "Web Designer...",
                    "Frontend Developer...",
                    "Backend Developer (Enrolling)...",
                    "MERN Stack Developer...",
                    "Making ideas visible in the Cloud",
                  ]}
                  speed={70}
                  className="text-yellow-400"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </h2>

              <motion.p
                className="text-gray-300 text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                1 Year of Experience • Passionate Developer
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex  gap-6 mt-8 flex-wrap justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="group relative border-2 border-yellow-400 text-yellow-400 duration-300 transition-colors 
                hover:bg-gradient-to-r from-yellow-400 to-yellow-50 px-4 py-4 rounded-full font-bold text-lg shadow-lg overflow-hidden hover:text-black"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">View Resume</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: .6,
                  }}
                />
              </motion.button>

              <motion.button
                className="group relative border-2 border-yellow-400 text-yellow-400 px-5 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-50 hover:text-black transition-colors duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-yellow-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                />
                <span className="relative z-10">Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image and Skills Section */}
          <motion.div
            className="relative w-full max-w-6xl mx-auto py-10"
            variants={itemVariants}
          >
            {/* Profile Image */}
            <motion.div
              className="relative z-20 w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 blur-xl opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative  p-2 rounded-2xl">
                  <img
                    src="./Banner.png"
                    alt="Al Mamun Khan"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Skills Grid - Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-5 mt-12">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.1 + idx * 0 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered(idx)}
                  onHoverEnd={() => setIsHovered(null)}
                  className={`relative p-4 rounded-xl flex justify-center border-2 hover:bg-amber-400 backdrop-blur-sm border-yellow-500 hover:border-2 shadow-lg cursor-pointer transition-all `}
                >
                  <div className="flex items-center gap-5">
                    <img src={skill.icon} alt={skill.text} className="w-8" />
                    <span className="font-bold text-white text-lg">
                      {skill.text}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isHovered === idx && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Skills Positioned - Desktop */}
            <div className="hidden lg:block">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, ...skill.direction }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setIsHovered(idx)}
                  onHoverEnd={() => setIsHovered(null)}
                  className={`absolute ${skill.position.desktop} cursor-pointer`}
                >
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-r ${skill.color} backdrop-blur-sm border-2 border-white/30 shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={skill.icon} alt={skill.text} className="w-8" />
                      <span className="font-bold text-white text-lg xl:text-xl">
                        {skill.text}
                      </span>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0"
                      style={{
                        background: `linear-gradient(45deg, ${
                          skill.color.split(" ")[1]
                        }, ${skill.color.split(" ")[3]})`,
                        filter: "blur(20px)",
                      }}
                      animate={{
                        opacity: isHovered === idx ? 0.6 : 0,
                        scale: isHovered === idx ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-yellow-400 text-3xl cursor-pointer"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              rgba(255, 255, 255, 0.8),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(255, 255, 255, 0.6),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
              2px 2px at 50px 160px,
              rgba(255, 255, 255, 0.4),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
              2px 2px at 90px 40px,
              rgba(255, 255, 255, 0.7),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
              2px 2px at 130px 80px,
              rgba(255, 255, 255, 0.5),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
              2px 2px at 160px 120px,
              rgba(255, 255, 255, 0.3),
              rgba(0, 0, 0, 0)
            );
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 8s ease-in-out infinite;
          opacity: 0.8;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1);
          }
          75% {
            opacity: 0.9;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        .container {
          max-width: 1200px;
        }
      `}</style>
    </header>
  );
};

export default Header;
