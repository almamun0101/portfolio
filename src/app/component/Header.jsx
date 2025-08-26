"use client";
import React from "react";
import { animate, motion } from "framer-motion";

import { Typewriter } from "@/components/magicui/typewriter";
import { ShootingStarsDemo } from "@/components/magicui/ShootingStarsDemo ";
import { ShootingStars } from "@/components/magicui/shootingStar";

const skills = [
  {
    text: "Html",
    icon: "./html.svg",
    position: "top-[0%] left-[0%] sm:left-[10%]",
    direction: { x: -100 },
  },
  {
    text: "Bootstrap",
    icon: "./bootstrap.svg",
    position: "top-[0%] right-[0%] sm:right-[10%]",
    direction: { x: 100 },
  },
  {
    text: "CSS",
    icon: "./css.svg",
    position: "top-[30%] left-0 sm:left-[0%]",
    direction: { x: -100 },
  },
  {
    text: "Sass",
    icon: "./sass.svg",
    position: "top-[30%] right-0 sm:right-[0%] ",
    direction: { x: 100 },
  },
  {
    text: "JS",
    icon: "./js.svg",
    position: "top-[60%] left-0  sm:left-[0%]",
    direction: { x: -100 },
  },
  {
    text: "Next",
    icon: "./next.svg",
    position: "top-[60%] right-0 sm:right-[0%]",
    direction: { x: 100 },
  },
  {
    text: "React",
    icon: "./react.svg",
    position: "top-[90%] left-0 sm:left-[5%] ",
    direction: { x: -100 },
  },
  {
    text: "Tailwind",
    icon: "./tailwind.svg",
    position: "top-[90%] right-0 sm:right-[5%]",
    direction: { x: 100 },
  },
];

const Header = () => {
  return (
    <header className="bg-black text-white">
 
        <div className="mx-auto flex flex-col items-center text-center gap-6">
          <div className="py-5 w-full bg-black relative overflow-hidden">
            {/* Background with stars */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
              <div className="stars absolute inset-0" />
            </div>
            <div className="container relative z-10 flex flex-col  justify-center  text-center">
              <div className="flex flex-wrap justify-center gap-2 items-center ">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Hello! I'm
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h1 className=" text-5xl md:text-6xl text-gold ml-3 font-extrabold leading-tight animate-pulse">
                    Al Mamun Khan
                  </h1>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="py-2 text-lg md:text-2xl font-semibold text-white">
                  <Typewriter
                    text={[
                      "Web Designer...",
                      "Frontend Developer...",
                      "Backend Develpoer (Onrolling)...",
                      "MERN Stack Developer...",
                      "Make your ideas to visable in Cloud",
                    ]}
                    speed={70}
                    className="text-yellow-500"
                    waitTime={1500}
                    deleteSpeed={40}
                    cursorChar={"_"}
                  />
                </h2>

                <p className="text-gray-400 py-2 text-sm md:text-base">
                  1 Year of Experience
                </p>
              </motion.div>

              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <button className="bg-gold text-black px-6 py-2 rounded-full font-medium transition-all hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 hover:scale-105 duration-300">
                    Resume
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <button className="bg-gold text-black px-6 py-2 rounded-full font-medium transition-all hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 hover:scale-105 duration-300">
                    <a
                      href="/Al Mamun khan CV For Frontend Dev.pdf" // Place cv.pdf inside your public folder
                      download="Al Mamun khan CV For Frontend Dev.pdf" // Name for downloaded file
                    >
                      Download CV
                    </a>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* baner img */}
            <div className="container py-10 lg:h-[80vh]  relative  lg:mt-15 ">
                <div className="w-full max-w-[500px] mx-auto relative z-10">
                <img
                  src="./Banner.png"
                  className="w-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
                />
              </div>
              <div className="w-full  grid grid-cols-3 gap-1 my-10">
                {skills.map((s, idx) => (
                  <div key={idx} className="">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, ...s.direction }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`z-10
                    ${s.position} 
                    lg:absolute lg:px-10 md:absolute  sm:absolute mt-2 hover:scale-110 transition duration-300 hover:shadow-[0_0_20px_#facc15] flex justify-between w-auto sm:w-30 md:w-35 lg:w-auto  md:py-2 rounded-2xl items-center gap-1 border-3 border-gold px-2 py-1 hover:bg-white/20 hover:text-gold bg-gray-400/40`}
                      >
                        <h2 className="text-sm md:text-lg lg:text-2xl font-bold italic ">
                          {s.text}{" "}
                        </h2>
                        <img
                          src={s.icon}
                          alt={s.text}
                          className="w-5 sm:w-8 md:w-10 lg:w-10"
                        />
                        {console.log(s.position)}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

            
            </div>
          </div>

          {/* Optional: Scroll down arrow */}
          <div className="py-5 animate-bounce">
            <span className="text-gold text-xl">↓</span>
          </div>
        </div>
      

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
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
