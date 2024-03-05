import { useAuth } from "../context/AuthContext";
import { AlumnosContext } from "../context/AlumnoContext";
/* import "../css/dashbordAlumnosdesktop.css"; */ // Actualiza la referencia al nuevo archivo CSS
import { Settings, AutoStories } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MisCursos from "../components/MisCursos";
import { useState, useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MiPerfil from "./MiPerfil";
import Box from "@mui/material/Box";

const FeatureGrid = () => {
  const { User } = useAuth();
  const { setActiveCourse } = useContext(AlumnosContext);

  const features = [
    {
      name: "Mis Cursos",
      icon: <AutoStories fontSize="large" />,
      route: "/miscursos",
      content: <MisCursos />,
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

  // Cambia esta línea para establecer Miscursos como la característica por defecto
  const [activeFeature, setActiveFeature] = useState(features[0]);

  const handleFeatureClick = (index) => {
    setActiveFeature(features[index]);
    setActiveCourse(null);
  };

  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "5rem" }}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <div
            className="col-3"
            style={{
              borderRadius: "1rem",
              color: "var(--color3)",
              background: "var(--color5)",
            }}
          >
            <h3
              style={{
                textAlign: "start",
                color: "#606468",
                paddingTop: "2rem",
              }}
            >
              Bienvenido {User.displayName}.
            </h3>

            <List>
              {features.map((feature, index) => (
                <ListItem
                  disablePadding
                  key={index}
                  button
                  onClick={() => handleFeatureClick(index)}
                  sx={{
                    background:
                      activeFeature.name == feature.name
                        ? "var(--color2)"
                        : "transparent",
                    transition: "background 0.3s ease", // Agregamos una transición de 0.3 segundos
                    "&:hover": {
                      background: "var(--color2)", // Cambiar el color de fondo en el hover
                      color: "white",
                    },
                  }}
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
          <div
            className="col-9"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {activeFeature ? activeFeature.content : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureGrid;
