import React from "react";
const skills = [
  {
    text: "Html",
    icon: "./html.svg",
    position: "top-[0%] left-0 sm:left-20 lg:left-50",
  },
  {
    text: "Bootstrap",
    icon: "./bootstrap.svg",
    position: "top-[0%] right-0 sm:left-20 lg:left-50",
  },
  {
    text: "CSS",
    icon: "./css.svg",
    position: "top-[30%] left-0 sm:right-20 lg:right-50",
  },
  {
    text: "Sass",
    icon: "./sass.svg",
    position: "top-[30%] right-0 sm:left-20 lg:left-50",
  },
  {
    text: "JS",
    icon: "./js.svg",
    position: "top-[60%] left-0 sm:left-20 lg:left-50",
  },
  {
    text: "Next",
    icon: "./next.svg",
    position: "top-[60%] right-0 sm:left-20 lg:left-50",
  },
  {
    text: "React",
    icon: "./react.svg",
    position: "top-[90%] left-0 sm:left-20 lg:left-50",
  },
  {
    text: "Tailwind",
    icon: "./tailwind.svg",
    position: "top-[90%] right-0 sm:left-20 lg:left-50",
  },
];

const Header = () => {
  return (
    <header className="bg-black  text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hello! I'm
          <span className="text-gold ml-3 animate-pulse">Al Mamun Khan</span>
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
            Hire Me
          </button>
        </div>
        <div className="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-purple-500">
          .......
        </div>

        <div className="w-full  pt-5 lg:pb-110 relative mt-10">
          <div className="w-1/2  mx-auto">
            <img
              src="./Banner.png"
              alt="Al Mamun Khan"
              className="w-full h-full object-cover relative hover:scale-110 transition duration-300 hover:shadow-yellow-400/30"
            />
          </div>

          <div className="w-full">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className={`
            ${s.position} 
            absolute  hover:scale-110 transition duration-300 hover:shadow-[0_0_20px_#facc15] flex justify-between sm:w-30 md:w-35 md:py-2 rounded-2xl items-center gap-1 border-3 border-gold px-2 py-1 hover:bg-white/20 hover:text-gold bg-gray-400/40`}
              >
                <h2 className="text-sm md:text-lg font-bold italic ">
                  {s.text}{" "}
                </h2>
                <img src={s.icon} alt={s.text} className="w-5 sm:w-8" />
                {console.log(s.position)}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Scroll down arrow */}
        <div className="mt-10 animate-bounce">
          <span className="text-gold text-xl">↓</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
