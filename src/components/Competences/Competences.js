import React from 'react';
import './Competences.css';

function Competences() {
  const competences = [
    {
      categorie: 'Développement',
      outils: [
        { nom: 'Postman', icone: '/images/icons8-postman-is-the-only-complete-api-development-environment-48.png' }, // Remplacer par l'icône appropriée
        { nom: 'Compass MongoDB', icone: '/images/mongodb-compass.webp' }, // Remplacer par l'icône appropriée
        { nom: 'VSCode', icone: '/images/vscode.png' }, // Remplacer par l'icône appropriée
        { nom: 'Git', icone: '/images/icons8-git-48.png' },
        { nom: 'GitHub', icone: '/images/icons8-github-48.png' },
      ],
    },
    {
      categorie: 'SEO',
      outils: [
        { nom: 'WAVE Evaluation Tool', icone: '/images/Wave.png' }, // Remplacer par l'icône appropriée
        { nom: 'Google Lighthouse', icone: '/images/icons8-lighthouse-48 (1).png' },
        { nom: 'Google Analytics', icone: '/images/icons8-google-analytics-48.png' }, // Remplacer par l'icône appropriée
      ],
    },
    {
      categorie: 'Design',
      outils: [
        { nom: 'Gimp', icone: '/images/icons8-gimp-48.png' }, // Remplacer par l'icône appropriée
        { nom: 'Figma', icone: '/images/Figma.webp' },
      ],
    },
    {
        categorie: 'CMS',
        outils: [
          { nom: 'WordPress', icone: '/images/icons8-wordpress-48.png' },
          // Ajoutez d'autres CMS ou plateformes ici si nécessaire
        ],
      },
    {
      categorie: 'Office',
      outils: [
        { nom: 'Word', icone: '/images/icons8-ms-word-48.png' },
        { nom: 'Excel', icone: '/images/icons8-ms-excel-48.png'},
      ],
    },
   ];

   const renderAnimatedTitle = (title) => (
    title.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${0.1 * index}s` }} className="animated-letter">
        {char}
      </span>
    ))
  );

  return (
    <div>
      {competences.map((categorie) => (
        <div key={categorie.categorie} className="categorie-container">
                   <h3>{renderAnimatedTitle(categorie.categorie)}</h3>
          <div className="outils-container">
            {categorie.outils.map((outil) => (
                <div key={outil.nom} className="outil-item">
                <img src={outil.icone} alt={outil.nom} className="outil-image"/>
                <p>{outil.nom}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Competences;
