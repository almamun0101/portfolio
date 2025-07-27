import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white py-16 px-6">
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

        <div className="w-full relative md:w-60 md:h-60 mt-10">
          <div className="w-1/2 mx-auto">
            <img
              src="./Banner.png"
              alt="Al Mamun Khan"
              className="w-full h-full object-cover relative"
            />
          </div>
          <div className="">
            <div className="flex items-center gap-2 absolute top-0 left-20 rounded-lg border px-5 py-2 bg-gray-400/70">
              HTML
              <img src="./html.svg" alt="" className="w-10 " />
            </div>

            <div className="flex items-center gap-3 absolute top-0 right-20 rounded-lg border px-5 py-2   bg-gray-400/70">
              <h2>CSS </h2>
              <img src="./css.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 absolute top-30 right-0 rounded-lg border px-5 py-2   bg-gray-400/70">
              <h2>Bootstrap </h2>
              <img src="./bootstrap.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 absolute top-30 left-5 rounded-lg border px-5 py-2   bg-gray-400/70">
              <h2>Tailwind </h2>
              <img src="./tailwind.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 absolute bottom-0 left-15 rounded-lg border px-5 py-2  bg-gray-400/70">
              <h2>Raect </h2>
              <img src="./react.svg" alt="" className="w-10" />
            </div>
            <div className="flex items-center gap-3 absolute bottom-0 right-15 rounded-lg border px-5 py-2  bg-gray-400/70">
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
