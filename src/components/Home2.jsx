// src/Home2.jsx
import React, { useState } from "react";
import "../css/home2.css";
import { Link } from "react-router-dom";

function Home2() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="landing-page">
      <header>
        <h3>Mi Landing Page</h3>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
        <nav className="navbarstyle">
          <ul className={isMobileMenuOpen ? "menu-open" : ""}>
            <li onClick={closeMobileMenu}>
              <Link to="#seccion1">Sección 1</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="#seccion2">Sección 2</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="#seccion3">Sección 3</Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link to="#seccion4">Sección 4</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="seccion1">
          <h2>Sección 1</h2>
          <p>Contenido de la primera sección.</p>
        </section>
        <section id="seccion2">
          <h2>Sección 2</h2>
          <p>Contenido de la segunda sección.</p>
        </section>
        <section id="seccion3">
          <h2>Sección 3</h2>
          <p>Contenido de la tercera sección.</p>
        </section>
        <section id="seccion4">
          <h2>Sección 4</h2>
          <p>Contenido de la cuarta sección.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Mi Landing Page</p>
      </footer>
    </div>
  );
}

export default Home2;
