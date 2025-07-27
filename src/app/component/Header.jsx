import React from "react";

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

        <div className="w-full lg:w-full pt-5 lg:pb-110 relative md:w-60 md:h-60 mt-10">
          <div className="w-1/2  mx-auto">
            <img
              src="./Banner.png"
              alt="Al Mamun Khan"
              className="w-full h-full object-cover relative"
            />
          </div>
          <div className="w-full">
            <div className="flex rounded-full items-center gap-2 lg:gap-10  lg:w-40 lg:left-40 absolute top-0 left-20   border-3 border-gold px-4 py-1 bg-gray-400/70">
              <h2>Html </h2>
              <img src="./html.svg" alt="" className="w-10 " />
            </div>
            <div className="flex items-center gap-3 lg:gap-10 lg:right-40  absolute top-0 right-20 rounded-lg border-3 border-gold px-4 py-1   bg-gray-400/70">
              <h2>CSS </h2>
              <img src="./css.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 g:gap-10  lg:w-40 lg:top-60  absolute top-30 right-0 rounded-lg border-3 border-gold px-4 py-1   bg-gray-400/70">
              <h2>Bootstrap </h2>
              <img src="./bootstrap.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 lg:gap-10 lg:w-50 lg:top-60 absolute top-30 left-5 rounded-lg border-3 border-gold px-4 py-1   bg-gray-400/70">
              <h2>Tailwind </h2>
              <img src="./tailwind.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 lg:gap-10 lg:w-50 absolute lg:-bottom-20 bottom-0 left-15 rounded-lg border-3 border-gold px-4 py-1  bg-gray-400/70">
              <h2>Raect </h2>
              <img src="./react.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 lg:gap-10 lg:w-50 lg:-bottom-20 lg:right-15 absolute bottom-0 right-15 rounded-lg border-3 border-gold px-4 py-1  bg-gray-400/70">
              <h2>JS</h2>
              <img src="./js.svg" alt="" className="w-10" />
            </div>
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
