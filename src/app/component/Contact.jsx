"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaUser, FaMobileAlt, FaCode, FaLaptopCode } from "react-icons/fa";
import { MdEmail, MdWeb } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiLink } from "react-icons/ci";
import { SiGithub, SiLinkedin, SiFacebook, SiWhatsapp, SiGmail } from "react-icons/si";
import WordPullUp from "@/components/ui/WordPullUp";

const contacts = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    color: "#0077B5",
    link: "https://linkedin.com/",
    description: "Professional Network"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#333333",
    link: "https://github.com/almamun0101",
    description: "Code Repository"
  },
  {
    name: "Gmail",
    icon: SiGmail,
    color: "#EA4335",
    link: "mailto:almamunkhan0101@gmail.com",
    description: "Email Contact"
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    color: "#25D366",
    link: "https://wa.me/8801327119888",
    description: "Quick Chat"
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    color: "#1877F2",
    link: "https://www.facebook.com/mahan.khan.shahir/",
    description: "Social Profile"
  },
];

// Code-themed animations
const codeBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const socialCardVariants = {
  hidden: { 
    scale: 0,
    opacity: 0,
    rotateY: -90,
  },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.08,
    y: -8,
    rotateX: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const terminalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const controls = useAnimation();

  const fullText = "const developer = { name: 'Your Name', status: 'ready to connect' };";

  useEffect(() => {
    let i = 0;
    const typewriter = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typewriter);
      }
    }, 50);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typewriter);
      clearInterval(cursorBlink);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await controls.start({
      scale: [1, 1.05, 1],
      backgroundColor: ["#3b82f6", "#10b981", "#3b82f6"],
      boxShadow: [
        "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
        "0 8px 20px 0 rgba(16, 185, 129, 0.4)",
        "0 4px 14px 0 rgba(59, 130, 246, 0.3)"
      ],
      transition: { duration: 0.8 }
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['<div/>', '{...}', '()=>', 'const', 'function', 'return'].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 font-mono text-lg md:text-xl font-bold"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Terminal-style Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-slate-800 rounded-t-lg p-4 border border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-slate-400 text-sm font-mono">contact.js</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-purple-400">1</span>
              <span className="text-slate-500 ml-4">// Let's connect and build something amazing</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-b-lg p-6 border-x border-b border-slate-700">
            <div className="font-mono text-green-400">
              <span className="text-slate-500">$</span> {terminalText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
            <WordPullUp text="Let's Connect" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 max-w-4xl mx-auto"
          variants={codeBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={socialCardVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full"
                  whileHover={{
                    background: `linear-gradient(135deg, ${contact.color}20, transparent)`,
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      className="inline-block p-4 rounded-xl mb-3"
                      style={{ backgroundColor: `${contact.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent 
                        className="text-2xl" 
                        style={{ color: contact.color }}
                      />
                    </motion.div>
                    <h3 className="text-white font-semibold text-lg mb-1">{contact.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{contact.description}</p>
                    <motion.a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CiLink className="text-sm" />
                      Connect
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Developer Avatar */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <motion.div
            className="relative"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 scale-110"></div>
            <img
              src="/3davater.png"
              alt="Developer Avatar"
              className="w-64 md:w-80 relative z-10 rounded-full border-4 border-white/20"
            />
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCode className="text-lg" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={terminalVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* Form Header */}
            <div className="bg-slate-800/70 p-6 border-b border-slate-700/50">
              <div className="flex items-center gap-4">
                <MdWeb className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-white text-2xl font-bold">Start a Project</h3>
                  <p className="text-slate-400">Tell me about your next big idea</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    animate={focusedInput === 'name' ? { 
                      scale: 1.2, 
                      color: '#3b82f6',
                      y: -2 
                    } : {}}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400"
                  >
                    <FaUser />
                  </motion.div>
                  <input
                    className="w-full p-4 pl-12 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    type="text"
                    placeholder="Full Name"
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    animate={focusedInput === 'email' ? { 
                      scale: 1.2, 
                      color: '#3b82f6',
                      y: -2 
                    } : {}}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400"
                  >
                    <MdEmail />
                  </motion.div>
                  <input
                    className="w-full p-4 pl-12 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    type="email"
                    placeholder="Email Address"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    animate={focusedInput === 'phone' ? { 
                      scale: 1.2, 
                      color: '#3b82f6',
                      y: -2 
                    } : {}}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400"
                  >
                    <FaMobileAlt />
                  </motion.div>
                  <input
                    className="w-full p-4 pl-12 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    type="tel"
                    placeholder="Phone Number"
                    onFocus={() => setFocusedInput('phone')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    animate={focusedInput === 'project' ? { 
                      scale: 1.2, 
                      color: '#3b82f6',
                      y: -2 
                    } : {}}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400"
                  >
                    <FaLaptopCode />
                  </motion.div>
                  <select
                    className="w-full p-4 pl-12 bg-slate-900/50 border border-slate-600 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none"
                    onFocus={() => setFocusedInput('project')}
                    onBlur={() => setFocusedInput(null)}
                  >
                    <option value="">Project Type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <textarea
                  placeholder="Tell me about your project idea, timeline, and budget..."
                  className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  rows="6"
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                animate={controls}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all relative overflow-hidden group"
                type="submit"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaCode />
                  Let's Build Together
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-lg">
            Available for freelance projects and full-time opportunities
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 mt-4 text-green-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="font-mono">Currently available</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;