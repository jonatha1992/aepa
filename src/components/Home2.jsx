// src/Home2.jsx
import React, { useState } from "react";
import "../css/home2.css";
import { Link } from "react-router-dom";
import Nosotros from "../components/Nosotros";

import CursosSeccion from "./CursosSeccion";
import Eventos from "../components/Eventos";

function Home2() {
  return (
    <>
      <section id="seccion1">
        <div className="container-fluid background-1">
          <div className="container mobile">
            <div className="col-md-5 text-start">
              <h2 className="titulo-hero">Bievenidos a AEPA</h2>
              <h2
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "#2B2C2B",
                  fontSize: "1.5rem",
                  marginBottom: "30px",
                }}
              >
                eleva tu carrera, <br></br> transforma la atención médica
              </h2>
              <p
                className="p-mobile"
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                  textTransform: "uppercase",
                }}
              >
                Tu plataforma integral de formación para el personal de salud.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      <section id="seccion2">
        <Nosotros />
      </section>
      <section id="seccion3">
        <CursosSeccion />
      </section>
      <section id="seccion4">
        <Eventos />
      </section>
    </>
  );
}

export default Home2;
