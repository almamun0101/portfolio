import React from "react";
const skills = [
  {
    text: "Html",
    icon: "./html.svg",
    position: "top-[0%] left-[0%] sm:left-[10%]",
  },
  {
    text: "Bootstrap",
    icon: "./bootstrap.svg",
    position: "top-[0%] right-[0%] sm:right-[10%]",
  },
  {
    text: "CSS",
    icon: "./css.svg",
    position: "top-[30%] left-0 sm:left-[0%]",
  },
  {
    text: "Sass",
    icon: "./sass.svg",
    position: "top-[30%] right-0 sm:right-[0%] ",
  },
  {
    text: "JS",
    icon: "./js.svg",
    position: "top-[60%] left-0  sm:left-[0%]",
  },
  {
    text: "Next",
    icon: "./next.svg",
    position: "top-[60%] right-0 sm:right-[0%]",
  },
  {
    text: "React",
    icon: "./react.svg",
    position: "top-[90%] left-0 sm:left-[5%] ",
  },
  {
    text: "Tailwind",
    icon: "./tailwind.svg",
    position: "top-[90%] right-0 sm:right-[5%]",
  },
];

const Header = () => {
  return (
    <header className="bg-black  text-white py-6 md:py-16 lg:py-16 px-6">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hello! I'm
            <span className="text-gold ml-3 flex flex-wrap md:inline lg:inline animate-pulse">
              Al Mamun Khan
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            Front-End Developer | MERN Stack Developer
          </h2>

          <p className="text-gray-400 text-sm md:text-base">
            1 Year of Experience
          </p>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <button className="bg-gold text-black px-6 py-2 rounded-full font-medium transition-all hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 hover:scale-105 duration-300">
              Resume
            </button>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-medium transition-all hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 hover:scale-105 duration-300">
              <a
                href="/cv.pdf" // Place cv.pdf inside your public folder
                download="cv.pdf" // Name for downloaded file
                     >
                Download CV
              </a>
            </button>
          </div>

          <div className="w-full lg:h-[80vh] pt-5 relative  lg:mt-15 ">
            <div className="w-full max-w-[500px] mx-auto relative z-10">
              <img
                src="./Banner.png"
                className="w-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            <div className="w-full  grid grid-cols-3 gap-1 my-10">
              {skills.map((s, idx) => (
                <div
                  key={idx}
                  className={`
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
              ))}
            </div>
          </div>

          {/* Optional: Scroll down arrow */}
          <div className="md:mt-10 lg:mt-10 animate-bounce">
            <span className="text-gold text-xl">↓</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
