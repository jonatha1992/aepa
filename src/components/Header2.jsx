import React, { useState } from "react";
import "../css/header2.css"; // Asegúrate de tener un archivo CSS para estilos adicionales
import { Link } from "react-router-dom";
import logoAnimado from "../assets/video-aepa.mp4";
import logo from "../assets/logo-aepa.png";
import logo2 from "../assets/barrita.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="background-container">
      <div className="logo">
        <Link to="/">
          {/* <img src={logo} alt="" style={{ height: "6em" }} /> */}
          <div className="video-container ">
            <video
              autoPlay
              muted
              loop
              style={{ height: "6em", borderRadius: "50%" }}
            >
              <source src={logoAnimado} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </Link>
      </div>
      <nav className="navbar">
        <div className="avatar">
          <svg
            style={{ color: "#383d42" }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        </div>
        <ul className={isMenuOpen ? "menu-open" : ""}>
          <li onClick={closeMenu}>
            <Link to="/home">
              {" "}
              <h3 style={{ color: "black", fontSize: "1rem" }}>Inicio</h3>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/nosotros">
              {" "}
              <h3 style={{ color: "black", fontSize: "1rem" }}> Nosotros</h3>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/cursos">
              <h3 style={{ color: "black", fontSize: "1rem" }}> Cursos</h3>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/talleres">
              <h3 style={{ color: "black", fontSize: "1rem" }}> Talleres</h3>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/socios">
              <h3 style={{ color: "black", fontSize: "1rem" }}> Socios</h3>
            </Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;
