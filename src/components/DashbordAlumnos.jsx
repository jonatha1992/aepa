// FeatureGrid.js
import { useAuth } from "../context/AuthContext";

import React from "react";
import "../css/dashbordAlumnos.css"; // Actualiza la referencia al nuevo archivo CSS
import { Home, Settings, Mail, Search, AutoStories } from "@mui/icons-material";
import { Link } from "react-router-dom";

const FeatureGrid = () => {
  const { User } = useAuth();
  const features = [
    {
      name: "Mis Cursos",
      icon: <AutoStories fontSize="large" />,
      route: "/miscursos",
    },
    { name: "Perfil", icon: <Settings fontSize="large" />, route: "/cursos" },
    {
      name: "Notificaciones",
      icon: <Mail fontSize="large" />,
      route: "/cursos",
    },
    { name: "Home", icon: <Home fontSize="large" />, route: "/cursos" },
    // ... Agrega más funcionalidades según sea necesario
  ];

  return (
    <>
      <div className="container" style={{ paddingTop: "10rem" }}>
        <h3 style={{ textAlign: "start", color: "#606468" }}>
          Bienvenido {User.nombre_completo}.
        </h3>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Link to={feature.route} key={index}>
              <div className="feature-item">
                {feature.icon}
                <span>{feature.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureGrid;
