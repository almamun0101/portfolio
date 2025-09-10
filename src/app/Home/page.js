"use client";
import React, { useRef } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/Projects";
import Profile from "../component/Profile";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const profileRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    profile: profileRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar scrollToSection={scrollToSection} />

      <ScrollProgress />
      <section ref={homeRef} className="">
        <Header />
      </section>
      <section ref={aboutRef} className="">
        <About />
      </section>
      <section ref={projectsRef} className="">
        <Projects />
      </section>
      <section ref={profileRef} className="">
        <Profile />
      </section>
      <section ref={contactRef} className="">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;

// export default function HomePage() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);

//   const sectionRefs = { home: homeRef, about: aboutRef, projects: projectsRef, contact: contactRef };

//   const scrollToSection = (section) => {
//     sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main>
//       <Navbar scrollToSection={scrollToSection} />

//       <section ref={homeRef} className="h-screen flex items-center justify-center bg-gray-100">
//         <h1 className="text-4xl">Welcome</h1>
//       </section>

//       <section ref={aboutRef} className="h-screen flex items-center justify-center bg-gray-200">
//         <h2 className="text-3xl">About Me</h2>
//       </section>

//       <section ref={projectsRef} className="h-screen flex items-center justify-center bg-gray-300">
//         <h2 className="text-3xl">Projects</h2>
//       </section>

//       <section ref={contactRef} className="h-screen flex items-center justify-center bg-gray-400">
//         <h2 className="text-3xl">Contact</h2>
//       </section>
//     </main>
//   );
// }
