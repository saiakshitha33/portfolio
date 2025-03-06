import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si"; // Import only required icons

import "./styles/socials.css";

const Socials = () => {
  const socials = {
    github: "https://github.com/saiakshitha33",
    linkedin: "https://www.linkedin.com/in/saiakshitha33/",
    gmail: "mailto:saiakshitha33@gmail.com",

  };

  return (
    <div className="socials">
      <div className="social">
        <a href={socials.github} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FaGithub className="icon" />
          </div>
          <div className="social-text">GitHub</div>
        </a>
      </div>

      <div className="social">
        <a href={socials.linkedin} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FaLinkedin className="icon" />
          </div>
          <div className="social-text">LinkedIn</div>
        </a>
      </div>

      <div className="social">
        <a href={socials.gmail} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <SiGmail className="icon" />
          </div>
          <div className="social-text">Email Me</div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
