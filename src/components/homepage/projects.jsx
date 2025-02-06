import React from "react";
import INFO from "../../data/user";
import "./styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {INFO.projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Demo
              </a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
