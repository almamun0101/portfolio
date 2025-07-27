import React from 'react'

const About = () => {
  return (
    <div>
        <div className="w-full mx-auto h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h2 className='p-10 text-gold text-2xl font-bold text-center'>About Me</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap- mx-auto w-full">
                <div className="border-2 bg-white/50 border-gold rounded-lg p-5 m-10  hover:bg-white/70 hover:text-yellow-500 duration-300">
                    <h3 className='text-gold text-xl font-semibold'>Who I Am</h3>
                    <p className='text-gray-800 mt-2'>I am a passionate web</p>
                    <p className='text-gray-800'>developer with a love for creating beautiful and functional user interfaces.</p>
                    <p className='text-gray-800'>With a background in design and development, I strive to bridge the gap between aesthetics and functionality.</p>
                </div>
                <div className="border-2 border-gold rounded-lg p-5 m-10 hover:bg-white/70 hover:text-yellow-500 duration-300 bg-white/50">
                    <h3 className='text-gold text-xl font-semibold'>My Skills</h3>
                    <ul className='list-disc list-inside text-gray-800 mt-2'>
                        <li>HTML, CSS, JavaScript</li>
                        <li>React, Redux</li>
                        <li>Responsive Design</li>
                        <li>UI/UX Design Principles</li>
                        <li>Version Control (Git)</li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About