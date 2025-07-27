import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/Projects";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects/>
    </div>
  );
};

export default Home;
