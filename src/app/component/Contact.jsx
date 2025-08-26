import React from "react";
import { FaUser, FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import WordPullUp from "@/components/ui/WordPullUp";

const contacts = [
  {
    name: "LinkDin",
    logo: "/linkdin.png",
    link: "",
  },
  {
    name: "Facebook",
    logo: "/fb.png",
    link: "https://www.facebook.com/mahan.khan.shahir/",
  },
  {
    name: "Whatsapp",
    logo: "/whatsapp.png",
    link: "https://wa.me/8801327119888",
  },
  {
    name: "Gamil",
    logo: "/gmail.png",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=almamunkhan0101@gmail.com",
  },
  {
    name: "Git",
    logo: "/gitlogo.png",
    link: "https://github.com/almamun0101",
  },
];

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20">
      <div className="container my-20">
        <h2 className="text-gold text-4xl font-bold text-center">
          <WordPullUp text="Connect With Me" />
        </h2>

        <div className="mt-10 grid grid-cols-3 md:grid-cols-5 gap-10 py-5">
          {contacts?.map((c, index) => (
            <div key={index} className="relative group  h-[10vh] cursor-pointer">
              {/* Slide 1 (Icon) */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700  rounded-4xl group-hover:bg-transparent translate-y-0 group-hover:-translate-y-10 z-10">
                <img
                  src={c.logo}
                  alt=""
                  className="w-25 group-hover:scale-110 duration-600"
                />
              </div>

              {/* Slide 2 (Text) */}
              <div className="absolute w-full md:w-3/4 mx-auto h-1/2 inset-0 flex flex-col items-center justify-center bg-white opacity-0 group-hover:opacity-100 shadow-xl rounded-4xl transition-transform duration-700 -translate-y-0 group-hover:translate-y-15">
                <a
                  href={c.link}
                  className="text-blue-400 text-sm md:text-lg gap-4 flex justify-between items-center font-bold italic"
                  target="_blank"
                >
                 <CiLink />

                  {c.name}{" "}
                </a>
                {/* <div className="absolute bottom-4 w-8 h-1 bg-blue-600 rounded-full"></div> */}
              </div>
            </div>
            // <div
            //   key={index}
            //   className="group hover:translate-y-1 px-2 transition-all duration-300 bg-white pr-5 flex items-center w-50 justify-between mx-auto   rounded-3xl "
            // >

            // </div>
          ))}
        </div>
        <img src="/3davater.png" alt="" className="w-100 mx-auto m-5" />
        <div className="bg-white pt-5 rounded-2xl mt-10  text-center text-black">
          <h2 className="text-3xl py-5 ">Contact Me</h2>
          <form action="" className="p-10 max-w-4xl mx-auto">
            <div className=" flex w-full flex-col md:flex-row justify-between mx-auto gap-5 mb-5">
              <div className="relative w-full">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full p-3 pl-10 rounded-2xl bg-gray-100  focus:outline-none "
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div className="relative w-full">
                <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full p-3 pl-10 rounded-2xl bg-gray-100  focus:outline-none"
                  placeholder="Email*"
                  type="text"
                />
              </div>
            </div>
            <div className=" flex w-full flex-col md:flex-row justify-between mx-auto gap-5 mb-5">
              <div className="relative w-full">
                <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full pl-10 bg-gray-100 p-3 rounded-2xl focus:outline-none"
                  placeholder="Mobile*"
                  type="text"
                />
              </div>
              <div className="relative w-full">
                <BiCategory className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full pl-10 bg-gray-100 p-3 rounded-2xl focus:outline-none"
                  placeholder="Subject*"
                  type="text"
                />
              </div>
            </div>

            <div className="">
              <textarea
                placeholder="Your message here..."
                className=" focus:outline-none bg-gray-100 w-full mt-5 rounded-2xl p-10 min-h-[150px]"
              ></textarea>
            </div>
            <button className="bg-yellow-500 text-white px-10 mt-2 p-4 rounded-2xl border-3 transition duration-300 font-bold border-transparent hover:bg-white/60 hover:text-gold hover:border-gold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
