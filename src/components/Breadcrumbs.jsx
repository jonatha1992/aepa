import React from "react";
import { Breadcrumbs, Typography, Link as Link2 } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "../css/dashbordAlumnos.css";

const NavigationMenu = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs className="breadC" style={{}}>
      <Link2 underline="hover" color="inherit" component={Link} to="/alumnos">
        <HomeIcon fontSize="large" />
        Home
      </Link2>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to} style={{}} className="tituloPath">
            {value}
          </Typography>
        ) : (
          <Link2
            underline="hover"
            component={Link}
            to={to}
            key={to}
            fontSize={"2rem"}
          >
            {value}
          </Link2>
        );
      })}
    </Breadcrumbs>
  );
};

export default NavigationMenu;
