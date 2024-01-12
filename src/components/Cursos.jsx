import Curso from "./Curso";
import { useState, useEffect } from "react";
import { getAllCursos } from "../controllers/controllerCurso";

function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cursosData = await getAllCursos();
        setCursos(cursosData);
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="mt-5 container  justify-content-center align-items-center h-100"
      style={{ background: "#1f2020" }}
    >
      <div className="curso-grid">
        {cursos.map((curso, index) => (
          <div key={index} className="curso-item">
            <div className="col-12 col-md-4">
              <img
                src={curso.image}
                alt={curso.title}
                className="curso-image"
              />
            </div>

            <div className="curso-details col-12 col-md-8">
              <h3 className="curso-title">{curso.title}</h3>
              <div className="container-text">
                <p className="curso-description">{curso.description}</p>
              </div>
              <div className="container-button-next">
                <button className="btn-inscribirme">
                  Inscribirme
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-forward"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933.042-.028a.147.147 0 0 0 0-.252l-.042-.028zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
