import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About</h2>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon">
            <img src="https://cdn0.iconfinder.com/data/icons/data-science-1-4/66/70-512.png" alt="Software Developer Icon" />
          </div>
          <h3 className="about-card-title">Software Developer</h3>
          <p className="about-card-description">
            I specialize in developing robust software solutions, leveraging frameworks like ReactJS, Spring Boot, and Flask. 
            My expertise includes full-stack development, delivering scalable, efficient applications tailored to meet client needs. 
            Additionally, I have a sound knowledge of data structures and algorithms (DSA) and excel in problem-solving, 
            which helps me build optimized and high-performance software systems.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <img src="https://www.shutterstock.com/image-photo/confident-female-data-scientist-works-260nw-1798108867.jpg" alt="Data Scientist Icon" />
          </div>
          <h3 className="about-card-title">Data Scientist</h3>
          <p className="about-card-description">
            With a passion for data-driven insights, I create predictive models and analytics solutions using Python, TensorFlow, 
            and machine learning libraries. I have publications accepted by acclaimed journal in the field of machine learning 
            and AI, particularly focusing on video data. My skills include data preprocessing, visualization, and deployment 
            of AI solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
