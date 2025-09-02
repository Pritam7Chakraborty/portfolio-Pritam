// src/pages/HomePage.jsx
import React from 'react';
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import MyWork from "../components/MyWork/MyWork";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    // This gap class now controls all the vertical space between your sections
    <div className="flex flex-col gap-20 sm:gap-24 px-6 sm:px-10 md:px-16 lg:px-24">
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default HomePage;