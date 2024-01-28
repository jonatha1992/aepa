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
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-feather"
            viewBox="0 0 16 16"
          >
            <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173" />
          </svg>
          <h3>asociacion de enfermeria pediatrica argentina</h3>
        </div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
        <nav className="navbarstyle">
          <ul className={isMobileMenuOpen ? "menu-open" : ""}>
            <li onClick={closeMobileMenu}>
              <a href="#seccion1">Sección 1</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#seccion2">Sección 2</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#seccion3">Sección 3</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#seccion4">Sección 4</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main">
        <section id="seccion1">
          <div className="container-fluid background-1">
            <div className="container">
              <div className="col-md-8 text-start">
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "var(--color1)",
                    textTransform: "uppercase",
                  }}
                >
                  Bievenidos a AEPA
                </h2>
                <h2 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                  eleva tu carrera, transforma la atencion medica
                </h2>
                <p>
                  Tu plataforma integral de formacion para el personal de salud.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
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
      </div>
      <footer>
        <p>&copy; 2024 Mi Landing Page</p>
      </footer>
    </div>
  );
}

export default Home2;
