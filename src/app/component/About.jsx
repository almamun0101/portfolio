import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-10">
    <div className="container py-30">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Who I Am Card */}
        <div className="bg-gray-800 bg-opacity-60 border border-yellow-500 backdrop-blur-md rounded-xl shadow-xl p-6 hover:shadow-yellow-400/30 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Who I Am</h3>
          <p className="text-gray-300 mb-2">
            I am a passionate web developer dedicated to building clean, modern, and efficient digital experiences.
          </p>
          <p className="text-gray-300 mb-2">
            My background combines both design aesthetics and front-end coding skills, allowing me to deliver visually appealing and performant interfaces.
          </p>
          <p className="text-gray-300">
            I thrive on turning complex problems into intuitive, user-friendly designs.
          </p>
        </div>

        {/* My Skills Card */}
        <div className="bg-gray-800 bg-opacity-60 border border-yellow-500 backdrop-blur-md rounded-xl shadow-xl p-6 hover:shadow-yellow-400/30 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">My Skills</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Redux Toolkit</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design & Prototyping</li>
            <li>Version Control with Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
};

export default About;
