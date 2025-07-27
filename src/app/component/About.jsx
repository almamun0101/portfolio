import React from 'react'

const About = () => {
  return (
    <div>
        <div className="w-full mx-auto h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <h2 className='p-10 text-gold text-2xl font-bold text-center'>About Me</h2>

            <div className="grid grid-cols-2 gap-4 mx-auto w-full">
                <div className="border-2 bg-white/50 border-gold rounded-lg p-5 m-10">
                    <h3 className='text-gold text-xl font-semibold'>Who I Am</h3>
                    <p className='text-gray-800 mt-2'>I am a passionate web</p>
                </div>
                <div className="border-2 border-gold rounded-lg p-5 m-10">

                </div>
            </div>
        </div>
    </div>
  )
}

export default About