import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // État pour suivre l'index de la diapositive actuelle
  const slides = [  // Tableau contenant des objets avec des informations sur les diapositives
    { image: process.env.PUBLIC_URL + '/images/16004635331170164.jpg' },
    { image: process.env.PUBLIC_URL + '/images/334f9e8fef7c534cdd2ddf7238484a3a.jpg.png' },
    { image: process.env.PUBLIC_URL + '/images/depositphotos_119273806-stock-photo-double-exposure-of-businessman-hand.jpg' },
    { image: process.env.PUBLIC_URL + '/images/html-system-for-website-concept_23-2150376772.avif' },
    { image: process.env.PUBLIC_URL + '/images/web-development-2.jpg' },
    { image: process.env.PUBLIC_URL + '/images/web-development-and-programming-on-laptop-and-smartphone_73903-163.avif' },
    { image: process.env.PUBLIC_URL + '/images/development.png' },
    { image: process.env.PUBLIC_URL + '/images/istockphoto-1061856176-612x612.jpg' },
    { image: process.env.PUBLIC_URL + '/images/istockphoto-1061856176-612x612.jpg' }
   ];

  useEffect(() => { 
    const interval = setInterval(() => {  // Crée un intervalle pour changer de diapositive toutes les 2 secondes
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Change la diapositive actuelle
    }, 2000);  // Intervalle de 2000ms (2 secondes)

    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
  }, [slides.length]); // Utilisation de useEffect pour exécuter le code une seule fois après le montage du composant

  return (
    
    <div className="slideshow-container"> 
      <img
        src={slides[currentSlide].image}  // Affiche l'image correspondant à la diapositive actuelle
        alt={`Slide ${currentSlide + 1}`} // Texte alternatif de l'image
        className="slideshow-image" 
      />
    </div>
  );
};

export default Slideshow;