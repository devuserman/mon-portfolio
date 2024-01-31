import React, { useState, useEffect } from 'react';
import './SkillsAnimation.css'; 

const SkillsAnimation = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Figma', 'SEO', 'Déploiement de Sites Web', 'Back-End'];
  
  // Utilisation de useState() pour déclarer des états locaux dans le composant
  // currentSkills va contenir les index des compétences actuellement affichées
  const [currentSkills, setCurrentSkills] = useState([0, 1]); // Commence avec les deux premières compétences
 
  // Utilisation de useEffect() pour exécuter une action après le rendu du composant
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkills(currentSkills => [
        (currentSkills[0] + 2) % skills.length, // Prochaine compétence pour la première colonne
        (currentSkills[1] + 2) % skills.length  // Prochaine compétence pour la deuxième colonne
      ]);
    }, 2000); // Change toutes les 2 secondes

    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(intervalId);
  }, []);

   // Rendu du composant
  return (
    <div className="skills-container">
      <div className="skill">{skills[currentSkills[0]]}</div>
      <div className="skill">{skills[currentSkills[1]]}</div>
    </div>
  );
};

export default SkillsAnimation;


