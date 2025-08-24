"use client"
import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/Projects";
import Profile from "../component/Profile";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mx-auto bg-black w-full ">
      <Navbar />
      <Header />
     
      <About />
    
      <Projects />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
