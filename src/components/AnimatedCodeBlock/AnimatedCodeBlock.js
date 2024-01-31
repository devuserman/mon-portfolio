import React, { useEffect } from 'react';
import './AnimatedCodeBlock.css';

function AnimatedCodeBlock() {
  useEffect(() => {
    const container = document.getElementById('code-container'); // Récupère l'élément contenant le code

    const generateRandomChar = () => {
      const chars = '!@#$%^&*()_-+={}[]|;:,.<>?'; // Liste de caractères spéciaux
      return chars[Math.floor(Math.random() * chars.length)]; // Retourne un caractère aléatoire de la liste
    };

    const createFallingCode = () => {
      const char = generateRandomChar(); // Générer un caractère hasard
      const span = document.createElement('span'); // Crée un élément <span>
      span.innerText = char; // Définit le contenu du <span> comme étant le caractère généré
      span.style.position = 'absolute'; // Positionne l'élément de manière absolue
      span.style.left = `${Math.random() * container.offsetWidth}px`; // Position horizontale 
      container.appendChild(span); // Ajoute le <span> à l'élément contenant

       // Événement pour mettre à jour la position du caractère lors de la fin de l'animation
        span.addEventListener('animationiteration', () => {
        span.style.left = `${Math.random() * container.offsetWidth}px`; // Déplace le caractère
        span.innerText = generateRandomChar(); // Change le caractère affiché
      });

      // Supprime le caractère après un certain délai 5 secondes dans ce cas
      setTimeout(() => {
        span.remove();
      }, 5000);
    };

     // Appelle la fonction de création de caractères toutes les 100 millisecondes
    setInterval(createFallingCode, 100);
  }, []);

  return <div id="code-container" className="code-container"></div>;
}

export default AnimatedCodeBlock;




