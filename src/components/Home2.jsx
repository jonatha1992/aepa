// src/Home2.jsx
import React, { useState } from "react";
import "../css/home2.css";
import { Link } from "react-router-dom";
import Nosotros from "../components/Nosotros";
import Anuncio from "../pages/Anuncio";

import neo from "../assets/cuidados neo.jpg";
import ped from "../assets/cuidados ped.jpg";
import farma from "../assets/farmaco.jpg";
import CursosSeccion from "./CursosSeccion";

function Home2() {
    return (
        <>
            <section id="seccion1">
                <div className="container-fluid background-1">
                    <div className="container mobile">
                        <div className="col-md-6 text-start">
                            <h2
                                style={{
                                    fontWeight: "bold",
                                    color: "var(--color3)",
                                    textTransform: "uppercase",
                                    WebkitTextStroke: "1px #dee2e6",
                                    fontSize: "3rem",
                                }}
                            >
                                Bievenidos a AEPA
                            </h2>
                            <h2
                                style={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "var(--color3)",
                                    fontSize: "1.5rem",
                                }}
                            >
                                eleva tu carrera, transforma la atencion medica
                            </h2>
                            <p className="p-mobile">Tu plataforma integral de formacion para el personal de salud.</p>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>

            <section id="seccion2">
                <div className="container-fluid background-2">
                    <CursosSeccion />
                </div>
            </section>
            <section id="seccion3">
                <div className="container-fluid background-3">
                    <Nosotros />
                </div>
            </section>
            <section id="seccion4">
                <div className="container-fluid background-4">
                    <h2>Sección 4</h2>
                    <p>Contenido de la cuarta sección.</p>
                </div>
            </section>
        </>
    );
}

export default Home2;
