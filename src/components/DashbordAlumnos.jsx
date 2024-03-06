// import { useAuth } from "../context/AuthContext";
// import React from "react";
// import "../css/dashbordAlumnos.css"; // Actualiza la referencia al nuevo archivo CSS
// import { Home, Settings, Mail, Search, AutoStories } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";

// const FeatureGrid = () => {
//     const { User } = useAuth();
//     const features = [
//         {
//             name: "Mis Cursos",
//             icon: <AutoStories fontSize="large" />,
//             route: "/miscursos",
//         },
//         { name: "Perfil", icon: <Settings fontSize="large" />, route: "/perfil" },
//         {
//             name: "Notificaciones",
//             icon: <Mail fontSize="large" />,
//             route: "/cursos",
//         },
//         { name: "Home", icon: <Home fontSize="large" />, route: "/cursos" },
//         // ... Agrega más funcionalidades según sea necesario
//     ];

//     return (
//         <>
//             <div className="container" style={{ paddingTop: "10rem" }}>
//                 <h3 style={{ textAlign: "start", color: "#606468" }}>Bienvenido {User.nombre_completo}.</h3>

//                 <div className="feature-grid">
//                     {features.map((feature, index) => (
//                         <Link to={feature.route} key={index}>
//                             <div className="feature-item">
//                                 {feature.icon}
//                                 <span>{feature.name}</span>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FeatureGrid;

import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { AutoStories, Home, Mail, Settings } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link2 from "@mui/material/Link";
import "../css/dashbordAlumnos.css";
const FeatureGrid = () => {
    const { User } = useAuth();
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const features = [
        {
            name: "Mis Cursos",
            icon: <AutoStories fontSize="large" />,
            route: "/miscursos",
        },
        { name: "Perfil", icon: <Settings fontSize="large" />, route: "/perfil" },
        {
            name: "Notificaciones",
            icon: <Mail fontSize="large" />,
            route: "/notificaciones",
        },
        { name: "Home", icon: <Home fontSize="large" />, route: "/" },
    ];

    return (
        <>
            <div className="container" style={{ paddingTop: "10rem" }}>
                <h3 style={{ textAlign: "start", color: "#606468" }}>Bienvenido {User.nombre_completo}.</h3>

                <Breadcrumbs aria-label="breadcrumb">
                    <Link2 underline="hover" color="inherit" component={Link} to="/">
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
                            <Link2 underline="hover" color="inherit" component={Link} to={to} key={to}>
                                {value}
                            </Link2>
                        );
                    })}
                </Breadcrumbs>
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
