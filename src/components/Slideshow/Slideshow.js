import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: process.env.PUBLIC_URL + '/images/16004635331170164.jpg', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/334f9e8fef7c534cdd2ddf7238484a3a.jpg.png', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/depositphotos_119273806-stock-photo-double-exposure-of-businessman-hand.jpg', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/html-system-for-website-concept_23-2150376772.avif', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/web-development-2.jpg', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/web-development-and-programming-on-laptop-and-smartphone_73903-163.avif', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/development.png', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/istockphoto-1061856176-612x612.jpg', text: 'Text for slide 1' },
    { image: process.env.PUBLIC_URL + '/images/istockphoto-1061856176-612x612.jpg', text: 'Text for slide 1' }
   ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    
    <div className="slideshow-container"> 
    

      <img
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className="slideshow-image" 
      />
      <p>{slides[currentSlide].text}</p>
    </div>
  );
};

export default Slideshow;