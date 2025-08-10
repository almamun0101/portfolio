import React from "react";
import { FaUser,FaMobileAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

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
];

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20">
      <div className="container my-20">
        <h2 className="text-gold text-4xl font-bold text-center">
          Conect With Me
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 ">
          {contacts?.map((c, index) => (
            <div
              key={index}
              className="group hover:translate-y-1 px-2 transition-all duration-300 bg-white pr-5 flex items-center w-50 justify-between mx-auto   rounded-3xl "
            >
              <img
                src={c.logo}
                alt=""
                className="w-15 group-hover:scale-110 duration-600"
              />
              <a href={c.link} className="text-blue-400 text-2xl font-bold italic"  target="_blank">
                {" "}
                {c.name}{" "}

              </a>
            </div>
          ))}
        </div>
        <img src="/3davater.png" alt="" className="w-100 mx-auto" />
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
                <FaMobileAlt  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
              <textarea placeholder="Your message here..." className=" focus:outline-none bg-gray-100 w-full mt-5 rounded-2xl p-10 min-h-[150px]"></textarea>
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
