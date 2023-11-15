import React, { useState, useEffect } from 'react';
import './SkillsAnimation.css'; // Assurez-vous que ce fichier CSS est créé

const SkillsAnimation = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Figma', 'SEO', 'Déploiement de Sites Web', 'Back-End'];
  const [currentSkills, setCurrentSkills] = useState([0, 1]); // Commence avec les deux premières compétences

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkills(currentSkills => [
        (currentSkills[0] + 2) % skills.length, // Prochaine compétence pour la première colonne
        (currentSkills[1] + 2) % skills.length  // Prochaine compétence pour la deuxième colonne
      ]);
    }, 2000); // Change toutes les 2 secondes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="skills-container">
      <div className="skill">{skills[currentSkills[0]]}</div>
      <div className="skill">{skills[currentSkills[1]]}</div>
    </div>
  );
};

export default SkillsAnimation;


