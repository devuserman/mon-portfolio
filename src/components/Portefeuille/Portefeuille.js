import React, { useState, useEffect } from 'react';
import projectsData from './projets.json';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Portefeuille.css';


//  déclarer des états locaux dans le composant
function Portefeuille() {
  const [projects, setProjects] = useState([]); // stocke un tableau vide
  const [selectedProject, setSelectedProject] = useState(null); 

  // Chargement des données du projet au moment du montage
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // Fonction pour ouvrir le modal du projet sélectionné
  const openModal = (projectId) => setSelectedProject(projectId);
   // Fonction pour fermer le modal
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <Header />
      <section className="container-screen">
        <h2 className="mon-title">En mettant en œuvre mes compétences techniques et créatives...</h2>
        <div className="row">
        
          {projects.map((project) => ( // méthode de tableau pour parcourir et afficher chaque élément du tableau 
              // les éléments rendus pour une mise à jour optimisée du DOM
              <div className="project-container" key={project.id}> 
              <div className="screenshot-wrapper">
                 {/* Affichage de l'image du projet */}
                <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
                <p
                  className="click-to-learn-more"
                  // fonction est appelée pour ouvrir un modal associé au projet correspondant
                  onClick={(e) => {
                    e.stopPropagation(); // empêchez la propagation de l'événement au-delà de l'élément sur lequel la méthode est appelée
                    openModal(project.id); 
                  }}
                >
                  Cliquez pour en savoir plus
                </p>
              </div>
                  {/* Affichage du modal si le projet est sélectionné */}
              {selectedProject === project.id && (
                <div className="project-modal" onClick={closeModal}>
                  <div className="project-info">
                      {/* Affichage des détails du projet */}
                    <h3 className="project-title">{project.title}</h3>
                    <span className="link-text">{project.description}<br /></span>
                     {/* Affichage du lien vers le site du projet */}
                    <a href={project.projectUrl} className="custom-link-text">
                      Lien vers le site
                    </a>
                  </div>
                  <div className="skills-column">
                    <h3 className="title-cmpt">Compétences acquises :</h3>
                     {/* Affichage des compétences du projet */}
                    <ul className="competences">
                      {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  
                  </div>
                   {/* Bouton pour fermer le modal */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();  // Empêche la propagation de l'événement
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






