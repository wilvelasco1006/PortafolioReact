import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logoImage from '../assets/wv-tag-logo.jpg';

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para alternar el menú móvil (abrir/cerrar)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Aplicamos clases condicionalmente usando template literals
    <nav className={`navbar ${isMobileMenuOpen ? 'navbar-open' : ''}`}>
      {/* Header de la navbar con logo y botón de menú móvil */}
      <div className="navbar-header">
        {/* Logo */}
        <div className="logo">
          <img
            src={logoImage}
            alt="Wilmer Yulian Logo"
            className="logo-image"
          />
        </div>

        {/* Botón hamburguesa para móviles */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Lista de enlaces de navegación */}
      <ul className="navbar-links">
        <li>
          
          <NavLink
            to="/"
            className="link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/resume"
            className="link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className="link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/store"
            className="link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
