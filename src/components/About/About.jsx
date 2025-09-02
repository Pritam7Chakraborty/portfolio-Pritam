// src/components/About/About.jsx
import React from "react";
import profile_img from "../../assets/about_profile.png"; // <-- Import your new image

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-16 md:gap-20"
    >
      {/* --- Main Heading --- */}
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
      </div>

      {/* --- Two-Column Layout Container --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-6xl">
        
        {/* --- Left Column: Image & Stats --- */}
        <div className="flex flex-col items-center gap-12">
          <img 
            src={profile_img} 
            alt="Pritam Chakraborty" 
            className="rounded-2xl w-full max-w-sm shadow-2xl shadow-purple-900/40"
          />
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 w-full text-center">
            {[
              { value: "2+", label: "Years of Experience" },
              { value: "5+", label: "Projects Completed" },
              { value: "0", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  {stat.value}
                </h2>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Text & Skills --- */}
        <div className="flex flex-col justify-center gap-10">
          {/* About Text (Now left-aligned) */}
          <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6 text-left">
            <p>
              From a young age, I was fascinated by how technology shapes the world
              around us. This curiosity led me to explore programming, and today, I
              am a developer passionate about crafting efficient and scalable
              solutions. I thrive on turning ideas into reality through code.
            </p>
            <p>
              Beyond coding, I enjoy diving into problem-solving, optimizing
              systems, and continuously learning new technologies. My journey is
              driven by a commitment to growth, innovation, and creating meaningful
              digital experiences that make an impact.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-left">
              Skills Snapshot
            </h2>
            <div className="flex flex-wrap justify-start gap-4">
              {["MERN Stack", "Java", "SQL", "Spring Boot"].map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full cursor-pointer
                             bg-gradient-to-r from-purple-800 to-orange-700
                             text-white text-lg font-semibold
                             transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;