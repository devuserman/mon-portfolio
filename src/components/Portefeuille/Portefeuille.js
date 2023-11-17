import React, { useState, useEffect } from 'react';
import projectsData from './projets.json';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Portefeuille.css';

function Portefeuille() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const openModal = (projectId) => setSelectedProject(projectId);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <Header />
      <section className="container-screen">
        <h2 className="mon-title">En mettant en œuvre mes compétences techniques et créatives...</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="project-container" key={project.id}>
              <div className="screenshot-wrapper">
                <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
                <p
                  className="click-to-learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project.id);
                  }}
                >
                  Cliquez pour en savoir plus
                </p>
              </div>
  
              {selectedProject === project.id && (
                <div className="project-modal" onClick={closeModal}>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="link-text">{project.description}<br /></span>
                    
                    <a href={project.projectUrl} className="custom-link-text">
                      Lien vers le site
                    </a>
                  </div>
                  <div className="skills-column">
                    <h3 className="title-cmpt">Compétences acquises :</h3>
                    <ul className="competences">
                      {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                    <div className="dotted-line"></div>
                    <em className="mon-info">{project.additionalInfo.problem}</em><br />
                   <em className="mon-info">{project.additionalInfo.solution}</em><br />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                    className="close-modal-button"
                  >
                    Fermer
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Portefeuille;






