import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/Projects";
import Profile from "../component/Profile";
import Contact from "../component/Contact";

const Home = () => {
  return (
    <div className="mx-auto bg-black w-full ">
      <Navbar />
      <Header />
      <About />
      <Projects/>
      <Profile/>
     <Contact/>
    </div>
  );
};

export default Home;
