import React, { useEffect, useState, useContext } from "react";
import { AlumnosContext } from "../context/AlumnoContext";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import UnidadesCursos from "./UnidadesCursos"; // Importa el componente que muestra las unidades

const MisCursos = () => {
  const { cursos, activeCourse, setActiveCourse } = useContext(AlumnosContext);

  const handleCursoClick = (cursoId, cursotitle) => {
    setActiveCourse({ id: cursoId, title: cursotitle });
  };

  useEffect(() => {
    // Esto se ejecuta solo en el montaje inicial
    setActiveCourse(null);
  }, []); // El array de dependencias está vacío, por lo que solo se ejecutará una vez al montar el componente

  return (
    <>
      {activeCourse ? (
        <UnidadesCursos activeCourse={activeCourse} />
      ) : (
        <div
          className="container d-flex flex-column"
          style={{
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <div
            className=" container-miscursos"
            style={{ color: "black", paddingTop: "" }}
          >
            {cursos.map((curso, index) => (
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
                    backgroundImage: `url(${curso.detalles.imageUrl})`,
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
                      style={{
                        width: "30%",
                        textAlign: "end",
                        fontSize: "10px",
                      }}
                    >
                      <span>25 contenidos sin ver</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MisCursos;
