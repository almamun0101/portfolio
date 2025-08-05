import React from 'react'
import { FaFileDownload } from "react-icons/fa";

const Profile = () => {
  return (
     <div className="w-full bg-black text-white my-10 ">
            <h2 className='text-gold text-center text-4xl italic font-bold my-10 '>Check Out My Resume</h2>
       <div className="border border-gray-50 rounded-2xl bg-[#171717] py-10 px-10 w-3/4 mx-auto flex flex-col justify-center items-center">
            <div className="lg:w-80  rounded-full bord-4  border-black">
                <img src="/mamun.jpg" alt="mamun" className=' rounded-full animate-pulse ring-10 shadow shadow-white hover:-rotate-20 hover:shadow-xl hover:shadow-gold transition duration-300'/>
            </div>
            <h1 className='mt-6 text-3xl lg:text-5xl text-gold  font-bold'>Al Mamun Khan</h1>
            <p className='mt-2 text-white/60'>Web Designer || Web Developer || MEARN Dev</p>
            <button className='flex py-2 mt-5 bg-gold/10 text-gold animate-bounce hover:animate-none hover:bg-gold transition duration-300 hover:text-white  items-center gap-5 border px-4 rounded-xl border-gold  '>Resume <FaFileDownload /></button>
        </div>
    </div>
  )
}

export default Profile