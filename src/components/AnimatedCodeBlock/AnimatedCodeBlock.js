import React, { useEffect } from 'react';
import './AnimatedCodeBlock.css';

function AnimatedCodeBlock() {
  useEffect(() => {
    const container = document.getElementById('code-container');

    const generateRandomChar = () => {
      const chars = '!@#$%^&*()_-+={}[]|;:,.<>?';
      return chars[Math.floor(Math.random() * chars.length)];
    };

    const createFallingCode = () => {
      const char = generateRandomChar();
      const span = document.createElement('span');
      span.innerText = char;
      span.style.position = 'absolute';
      span.style.left = `${Math.random() * container.offsetWidth}px`;
      // span.style.animationDuration = `${Math.random() * 5 + 3}s`;
      // span.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(span);

      span.addEventListener('animationiteration', () => {
        span.style.left = `${Math.random() * container.offsetWidth}px`;
        span.innerText = generateRandomChar();
      });

      setTimeout(() => {
        span.remove();
      }, 5000);
    };

    setInterval(createFallingCode, 100);
  }, []);

  return <div id="code-container" className="code-container"></div>;
}

export default AnimatedCodeBlock;




