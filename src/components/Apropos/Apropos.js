import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Apropos.css';
// import SkillsChart from '../SkillsChart/SkillsChart.js';
import SkillsAnimation from '../SkillsAnimation/SkillsAnimation'; 
import AnimatedCodeBlock from '../AnimatedCodeBlock/AnimatedCodeBlock';


function Apropos() {
  return (
    <>
      <Header />
      <main className="main-apropos">
        <h2 className="titre-apropos">Mes Compétences et les Outils que je maîtrise</h2>
        <div className="icone-container">
        <img src="/images/office.webp" alt="Office" className="icone-competences" width="100px" height="60px" />
          <img src="/images/gimp.webp" alt="Gimp" className="icone-competences" width="100px" height="60px"/>
          <img src="/images/Figma.webp" alt="Figma" className="icone-competences"  width="100px" height="60px" />
          <img src="/images/vscode.png" alt="Vscode" className="icone-competences"  width="100px" height="60px"/>
          <img src="/images/postman.webp" alt="Postman" className="icone-competences" width="100px" height="60px"/>
          <img src="/images/FileZilla_logo.webp" alt="FileZilla" className="icone-competences" width="100px" height="60px"  />
          <img src="/images/mongodb-compass.webp" alt="Mongodb compass" className="icone-competences" width="100px" height="60px" />
          <img src="/images/React.webp" alt="React" className="icone-competences" width="100px" height="60px" />
          <img src="/images/HTML5-CSS3.webp" alt="CSS3" className="icone-competences" width="100px" height="60px"/>
          <img src="/images/JavaScript.png" alt="JS" className="icone-competences" width="100px" height="60px" />
          <img src="/images/expressjs.webp" alt="ExpressJS" className="icone-competences"  width="100px" height="60px" />
          <img src="/images/NodeJs.webp" alt="NodeJS" className="icone-competences"  width="100px" height="60px" />
          <img src="/images/SEO.webp" alt="SEO" className="icone-competences" width="100px" height="60px" />
          <img src="/images/WAVE-logo.webp" alt="WAVE" className="icone-competences" width="150px" height="60px" />
          <img src="/images/Lighthouse.webp" alt="Lighthouse" className="icone-competences"  width="100px" height="60px"/>
          <img src="/images/chrome-devtools.webp" alt="Dev Tools Chrome" className="icone-competences"   width="100px" height="60px" />
        </div>
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
   
       <p className="text-ps">Pour en savoir plus sur l'école Openclassrooms et les compétences que j'y ai acquises, je vous invite à visiter leur <a href="https://openclassrooms.com/fr/paths">site web</a>.</p>
      </main>
      <Footer />
    </>
  );
}

export default Apropos;

