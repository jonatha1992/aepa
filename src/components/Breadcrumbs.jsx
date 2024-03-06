import React from "react";
import { Breadcrumbs, Typography, Link as Link2 } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link2 underline="hover" color="inherit" component={Link} to="/alumnos">
        Home
      </Link2>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {value}
          </Typography>
        ) : (
          <Link2
            underline="hover"
            color="inherit"
            component={Link}
            to={to}
            key={to}
          >
            {value}
          </Link2>
        );
      })}
    </Breadcrumbs>
  );
};

export default NavigationMenu;
