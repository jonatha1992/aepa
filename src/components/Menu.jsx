import React from "react";
import "../css/menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="grid-container">
      <div className="grid-item" style={{ backgroundColor: "green" }}>
        <Link to={"/cursos"}>Cursos</Link>
      </div>
      <div className="grid-item" style={{ backgroundColor: "yellow" }}>
        <Link to={"/eventos"}>Eventos</Link>
      </div>
      <div className="grid-item" style={{ backgroundColor: "red" }}>
        <Link to={"/contenido"}>Contenido</Link>
      </div>
    </div>
  );
}
