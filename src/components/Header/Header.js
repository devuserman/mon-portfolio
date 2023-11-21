import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import Logo from './logo.png';

export function Header() {
   // pour obtenir des informations sur l'URL actuelle
  const location = useLocation();

  return (
    <header className="header">
      <div className="menu-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-nav">
        <nav className="menu">
          <ul className="nav">
             {/* Liens de navigation avec classe active basée sur l'URL actuelle */}
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/apropos" className={location.pathname === '/apropos' ? 'active' : ''}>
                À Propos
              </Link>
            </li>
            <li>
              <Link to="/portefeuille" className={location.pathname === '/portefeuille' ? 'active' : ''}>
              Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

