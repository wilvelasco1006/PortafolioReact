import React from 'react';
import './CardProject.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const CardProject = ({ image, title, description, githubUrl, demoUrl }) => {
  return (
    <div className="card-project" data-aos="fade-up">
      <div className="card-project-inner">
        <div className="card-project-front">
          <img src={image} alt={title} className="project-image" />
          <div className="project-overlay">
            <h3 className="project-title">{title}</h3>
          </div>
        </div>
        <div className="card-project-back">
          <p className="project-description">{description}</p>
          <div className="project-links">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link github-link"
              aria-label="Ver código en GitHub"
            >
              <FaGithub />
            </a>
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link demo-link"
                aria-label="Ver demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;