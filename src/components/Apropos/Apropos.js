import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Apropos.css';
import SkillsChart from '../SkillsChart/SkillsChart.js';
import SkillsAnimation from '../SkillsAnimation/SkillsAnimation'; // Nouveau composant pour l'animation des compétences
import AnimatedCodeBlock from '../AnimatedCodeBlock/AnimatedCodeBlock';
import Competences from '../Competences/Competences.js';


function Apropos() {
  return (
    <>
      <Header />
      <main className="main-apropos">
        <h2 className="titre-apropos">Mes Compétences et les Outils que je maîtrise</h2>
        
        <Competences />

        <div className="image-container">
      <img src="/images/depositphotos_66808691-stock-illustration-laptop-with-blank-screen-isolated.jpg" alt="Computer" className="computer-image" />
      <AnimatedCodeBlock />
      <SkillsAnimation />
        </div>
      <div className="text-about-me">
      <h2 className="titre-apropos">À propos de moi</h2>
      <h3 className="apropos-text"> Diplômé de l'école Openclassrooms de Paris en développement web, je cultive une passion profonde pour le codage et le design d'interfaces de sites. Toujours en quête d'évolution, je me consacre à l'élargissement continu de mes compétences pour rester à la pointe de la technologie et des tendances du design web. </h3>
      <div className="cv-link">
        <a href="https://www.canva.com/design/DAF4vaxZkGU/1gy_hEwDRX6-KjoSQKAdog/view?utm_content=DAF4vaxZkGU&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
        <img src='/images/cv-image.png' alt="Voir mon CV" className="cv-img" />
        </a>
        <p className="cv-moi">Voir mon CV</p>
      </div>
    </div>


        <div className="graphique-container">
          <SkillsChart />
        </div>
       <p className="text-ps">Pour en savoir plus sur l'école Openclassrooms et les compétences que j'y ai acquises, je vous invite à visiter leur <a href="https://openclassrooms.com/fr/paths">site web</a>.</p>
      </main>
      <Footer />
    </>
  );
}

export default Apropos;

