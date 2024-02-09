// src/Home2.jsx
import React, { useState } from "react";
import "../css/home2.css";
import { Link } from "react-router-dom";
import Nosotros from "../components/Nosotros";
import Anuncio from "../pages/Anuncio";

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
                    <div className="container container-seccion2">
                        <div>
                            <h1 className="on-demand">cursos on demand</h1>
                            <p className="info-cursos">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi magni mollitia
                                id ratione illo unde soluta pariatur tempora, expedita odio? Earum ipsum nobis dolor,
                                officia illo neque ex recusandae!
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 item-curso" style={{}}>
                                <div className="info">
                                    <div
                                        className="d-flex flex-column "
                                        style={{
                                            width: "60%",
                                            textAlign: "start",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <h2 className="info-encabezado">cuidados criticos neonatales</h2>
                                        <h2 className="info-encabezado">$20.000</h2>
                                    </div>
                                    <div style={{ width: "40%" }}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="unidades">
                                    <ul className="mi-lista" style={{ overflow: "hidden" }}>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="accion d-flex justify-content-center" style={{}}>
                                    <button
                                        style={{
                                            width: "80%",
                                        }}
                                    >
                                        INCRIBIRME
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 item-curso" style={{}}>
                                <div className="info">
                                    <div
                                        className="d-flex flex-column "
                                        style={{
                                            width: "60%",
                                            textAlign: "start",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <h2 className="info-encabezado">cuidados criticos neonatales</h2>
                                        <h2 className="info-encabezado">$20.000</h2>
                                    </div>
                                    <div style={{ width: "40%" }}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="unidades">
                                    <ul className="mi-lista" style={{ overflow: "hidden" }}>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="accion d-flex justify-content-center" style={{}}>
                                    <button
                                        style={{
                                            width: "80%",
                                        }}
                                    >
                                        INCRIBIRME
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 item-curso" style={{}}>
                                <div className="info">
                                    <div
                                        className="d-flex flex-column "
                                        style={{
                                            width: "60%",
                                            textAlign: "start",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <h2 className="info-encabezado">cuidados criticos neonatales</h2>
                                        <h2 className="info-encabezado">$20.000</h2>
                                    </div>
                                    <div style={{ width: "40%" }}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="unidades">
                                    <ul className="mi-lista" style={{ overflow: "hidden" }}>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="descripcion-unidades">
                                                <strong>Elemento 1:</strong> Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="accion d-flex justify-content-center" style={{}}>
                                    <button
                                        style={{
                                            width: "80%",
                                        }}
                                    >
                                        INCRIBIRME
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="seccion3">
                <div className="container-fluid background-3">
                    <Nosotros />
                </div>
            </section>
            <section id="seccion4">
                <div className="container-fluid background-4">
                    <Anuncio />
                </div>
            </section>
        </>
    );
}

export default Home2;
