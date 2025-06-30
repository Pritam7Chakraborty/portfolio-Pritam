import React from "react";
import "./About.css";

import profile_image from "../../assets/hero.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="Profile of Pritam Chakraborty" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              From a young age, I was fascinated by how technology shapes the
              world around us. This curiosity led me to explore programming, and
              today, I am a developer passionate about crafting efficient and
              scalable solutions. I thrive on turning ideas into reality through
              code.
            </p>

            <p>
              Beyond coding, I enjoy diving into problem-solving, optimizing
              systems, and continuously learning new technologies. My journey is
              driven by a commitment to growth, innovation, and creating
              meaningful digital experiences that make an impact.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Spring boot</p>
              <hr style={{ width: "45%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Moved the about-achievements section here */}
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>0</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
