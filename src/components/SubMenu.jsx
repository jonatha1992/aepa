import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../css/menu.css";

export default function SubMenu() {
  // Obtén la ruta actual
  let match = useLocation();

  console.log(match);

  return (
    <div className="grid-container">
      <div className="grid-item" style={{ backgroundColor: "white" }}>
        <Link to={`${match.pathname}/alta`}>Alta</Link>
      </div>
      <div className="grid-item" style={{ backgroundColor: "white" }}>
        Baja
      </div>
      <div className="grid-item" style={{ backgroundColor: "white" }}>
        <Link to={`${match.pathname}/edit`}>Edit</Link>
      </div>
    </div>
  );
}
