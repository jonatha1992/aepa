// Layout.jsx
import React from "react";
import Header2 from "../components/Header2";
import Contact from "../pages/Contact";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  // Decide si mostrar o no el componente Contact
  const showContact = !["/Alumnos", "/admin", "/registro"].includes(location.pathname);

  return (
    <>+
      <Header2 />
      <main style={{ marginTop: "220px", color: "white" }}>{children}</main>
      {showContact && <Contact />}
    </>
  );
};

export default Layout;
