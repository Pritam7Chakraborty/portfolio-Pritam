// src/components/Hero/Hero.jsx
import React from "react";
import profile_img from "../../assets/hero.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Github, Linkedin } from 'lucide-react'; // Icons for social links

function Hero() {
  const resumeUrl = "/portfolio-client/src/assets/Pritam Chakraborty - Resume.pdf";

  const [skills] = useTypewriter({
    words: ['Full-Stack Developer', 'Java Specialist', 'React Enthusiast', 'Problem Solver'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  return (
    // The main container is now relative to position background elements
    <div id="home" className="relative flex items-center min-h-[calc(100vh-72px)] overflow-hidden">
      
      {/* --- Decorative Background Blobs --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-purple-900/40 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-[50rem] h-[50rem] bg-orange-900/40 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Main content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        
        {/* --- Left Column: Text Content --- */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Hi, I’m Pritam —
            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              {skills}
              <Cursor cursorStyle='|' />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-4">
            A software developer passionate about crafting impactful digital experiences. I enjoy transforming complex problems into scalable solutions and bringing ideas to life through code. 🚀
          </p>
          
          <div className="flex items-center flex-col sm:flex-row gap-6 mt-8 justify-center md:justify-start">
            <AnchorLink href="#contact" offset={50} className="w-full sm:w-auto">
              <div className="px-10 py-4 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xl font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105">
                Let’s Connect
              </div>
            </AnchorLink>
            <a href={resumeUrl} download="Pritam_Chakraborty_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full cursor-pointer border-2 border-white text-white text-xl font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black w-full sm:w-auto">
              View Resume
            </a>
          </div>

          {/* --- Social Links --- */}
          <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
              <a href="https://github.com/Pritam7Chakraborty" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Github size={32} /></a>
              <a href="www.linkedin.com/in/pritam-chakraborty-090532273" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={32} /></a>
          </div>
        </div>

        {/* --- Right Column: Image --- */}
        <div className="flex justify-center items-center">
          <img
            src={profile_img}
            alt="Profile of Pritam Chakraborty"
            className="w-80 md:w-[400px] rounded-full shadow-2xl shadow-purple-800/50 animate-float"
          />
        </div>

      </div>

      {/* --- Scroll Down Indicator --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <AnchorLink href="#about">
          <div className="w-8 h-8 flex items-center justify-center text-white/50 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </AnchorLink>
      </div>

    </div>
  );
}

export default Hero;