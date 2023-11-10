import { FaLocationArrow, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './footer.css';


function Footer() {
  return (
    <footer>
      <div className="social-icons">
      <a href="https://maps.app.goo.gl/LjnWRjGbTRmkz1Ey7" target="_blank" rel="noopener noreferrer"><FaLocationArrow /></a>
      <a href="https://github.com/devuserman"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/anna-popova-9ab378159/"><FaLinkedin /></a>
      </div>
    </footer>
  );
}

export default Footer;