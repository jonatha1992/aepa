import React, { useEffect, useState, useContext } from "react";
import { AlumnosContext } from "../context/AlumnoContext";

import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import UnidadesCursos from "./UnidadesCursos"; // Importa el componente que muestra las unidades

const MisCursos = () => {
  const { cursos, activeCourse, setActiveCourse } = useContext(AlumnosContext);

  const handleCursoClick = (cursoId, cursotitle) => {
    setActiveCourse(cursoId);
  };

  return (
    <div
      className="container container-miscursos"
      style={{ color: "black", paddingTop: "6rem" }}
    >
      {activeCourse ? (
        <UnidadesCursos cursotitle={activeCourse} cursoid={activeCourse} />
      ) : (
        cursos.map((curso, index) => (
          <div
            key={index}
            className="miscursos-item"
            onClick={() =>
              handleCursoClick(curso.cursoid, curso.detalles.title)
            }
          >
            <div
              className="blur-background"
              style={{
                backgroundImage: `url(${curso.detalles.image})`,
              }}
            >
              <div className="content d-flex">
                <span
                  style={{
                    width: "70%",
                    fontSize: "1rem",
                    textAlign: "start",
                    color: "#606468",
                    fontWeight: "bold",
                  }}
                >
                  {curso.detalles.title}
                </span>
                <div
                  className="info-micurso"
                  style={{ width: "30%", textAlign: "end", fontSize: "10px" }}
                >
                  <span>25 contenidos sin ver</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MisCursos;
