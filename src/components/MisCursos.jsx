import React, { useEffect, useState, useContext } from "react";
import { AlumnosContext } from "../context/AlumnoContext";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import UnidadesCursos from "./UnidadesCursos";
import Breadcrumbs from "./Breadcrumbs";

const MisCursos = () => {
  const { cursos, activeCourse, setActiveCourse } = useContext(AlumnosContext);

  const handleCursoClick = (cursoId, cursotitle) => {
    setActiveCourse({ id: cursoId, title: cursotitle });
  };

  useEffect(() => {
    setActiveCourse(null);
  }, []);

  return (
    <div className="container">
      {cursos.length === 0 ? (
        <div>
          <Breadcrumbs />
          <div className="no-cursos-message">
            <p>No estás inscrito en ningún curso.</p>
          </div>
        </div>
      ) : (
        <div className="contenido-container d-flex justify-content-start flex-column">
          <Breadcrumbs />
          {activeCourse ? (
            <UnidadesCursos activeCourse={activeCourse} />
          ) : (
            <div
              className="container d-flex flex-column"
              style={{ height: "100vh" }}
            >
              <div
                className="container-miscursos"
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
        </div>
      )}
    </div>
  );
};

export default MisCursos;
