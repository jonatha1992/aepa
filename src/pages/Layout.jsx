// Layout.jsx
import React from "react";
import Contact from "../pages/Contact";
import { useLocation } from "react-router-dom";
import "../css/home2.css";
import Header3 from "../components/Header3";

const Layout = ({ children }) => {
  const location = useLocation();

  // Decide si mostrar o no el componente Contact
  const showContact =
    ![
      "/Alumnos",
      "/admin",
      "/registro",
      "/miscursos",
      "/homenew",
      "/login",
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/unidades/");

  return (
    <>
      <Header3 />
      <div className="landing-page">
        <div className=" main">
          <main style={{ color: "black" }}>{children}</main>
        </div>
        {showContact && <Contact />}
      </div>
    </>
  );
};

export default Layout;
