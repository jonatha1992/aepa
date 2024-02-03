import { useAuth } from "../context/AuthContext";
import { AlumnosContext } from "../context/AlumnoContext";
/* import "../css/dashbordAlumnosdesktop.css"; */ // Actualiza la referencia al nuevo archivo CSS
import { Home, Settings, AutoStories } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MisCursos from "../components/MisCursos";
import { useState, useEffect, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MiPerfil from "./MiPerfil";

const FeatureGrid = () => {
  const { User } = useAuth();
  const { setActiveCourse } = useContext(AlumnosContext);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      name: "Mis Cursos",
      icon: <AutoStories fontSize="large" />,
      route: "/miscursos",
      content: <MisCursos setActiveFeature={setActiveFeature} />,
    },
    {
      name: "Perfil",
      icon: <Settings fontSize="large" />,
      route: "/cursos",
      content: <MiPerfil />,
    },
    // Asegúrate de tener componentes o contenido correspondiente para cada elemento
    // Agrega más funcionalidades según sea necesario
  ];

  const handleFeatureClick = (index) => {
    setActiveFeature(features[index]);
    setActiveCourse(null);
  };

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "6rem" }}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="col-3"
            style={{
              borderRadius: "1rem",
              color: "var(--color3)",
              background: "var(--color5)",
            }}
          >
            <h3 style={{ textAlign: "start", color: "#606468" }}>
              Bienvenido {User.displayName}.
            </h3>
            <List>
              {features.map((feature, index) => (
                <ListItem
                  disablePadding
                  key={index}
                  button
                  onClick={() => handleFeatureClick(index)}
                >
                  <ListItemButton>
                    <ListItemIcon>{feature.icon}</ListItemIcon>
                    <ListItemText
                      primary={feature.name}
                      sx={{ fontSize: "1.5rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div className="col-9">
            <div className="container">
              {activeFeature ? activeFeature.content : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureGrid;
