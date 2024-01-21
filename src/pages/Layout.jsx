// Layout.jsx
import React from "react";
import Header2 from "../components/Header2";
import Contact from "../pages/Contact";

const Layout = ({ children }) => {
  return (
    <>
      <Header2 />
      <main style={{ marginTop: "220px", color: "white" }}>{children}</main>
      <Contact />
    </>
  );
};

export default Layout;
