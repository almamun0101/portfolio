"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiLink } from "react-icons/ci";
import WordPullUp from "@/components/ui/WordPullUp";

const contacts = [
  {
    name: "LinkedIn",
    logo: "/linkdin.png",
    link: "https://linkedin.com/",
  },
  {
    name: "Facebook",
    logo: "/fb.png",
    link: "https://www.facebook.com/mahan.khan.shahir/",
  },
  {
    name: "WhatsApp",
    logo: "/whatsapp.png",
    link: "https://wa.me/8801327119888",
  },
  {
    name: "Gmail",
    logo: "/gmail.png",
    link: "mailto:almamunkhan0101@gmail.com",
  },
  {
    name: "GitHub",
    logo: "/gitlogo.png",
    link: "https://github.com/almamun0101",
  },
];

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-4xl md:text-5xl font-extrabold text-center"
        >
          <WordPullUp text="Connect With Me" />
        </motion.h2>

        {/* Social Links */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
          {contacts.map((c, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
              className="relative group w-24 h-24 cursor-pointer"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href={c.link}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-600 font-semibold"
                >
                  <CiLink className="text-lg" />
                  {c.name}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Avatar */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="/3davater.png"
          alt="Avatar"
          className="w-64 md:w-80 mx-auto mt-16 drop-shadow-xl"
        />

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/95 backdrop-blur-md pt-5 rounded-2xl mt-14 text-center text-black shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold py-5">Contact Me</h2>
          <form className="p-8 md:p-12 max-w-3xl mx-auto space-y-5">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative w-full">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full p-3 pl-10 rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none"
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div className="relative w-full">
                <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full p-3 pl-10 rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none"
                  type="email"
                  placeholder="Email*"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative w-full">
                <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full p-3 pl-10 rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Mobile*"
                  type="tel"
                />
              </div>
              <div className="relative w-full">
                <BiCategory className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full p-3 pl-10 rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Subject*"
                  type="text"
                />
              </div>
            </div>

            {/* Message */}
            <textarea
              placeholder="Your message here..."
              className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none min-h-[150px]"
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-xl font-bold shadow-md transition hover:bg-yellow-600"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
