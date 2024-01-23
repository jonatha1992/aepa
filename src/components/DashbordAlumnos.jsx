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
      <h3 style={{ color: "black" }}>Bienvenido {User.uid}</h3>
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
    </>
  );
};

export default FeatureGrid;
