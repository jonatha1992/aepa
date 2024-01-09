import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { collection, db, getDocs, deletear } from "../firebase.js";

// Componente que muestra la lista de cursos en una cuadrícula
const ListaCursos = () => {
  // Supongamos que tienes un array de cursos
  const [listaCursos, setListaCursos] = useState([]);

  const Cursos = async () => {
    const querySnapshot = await getDocs(collection(db, "cursos"));
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setListaCursos(docs);
  };

  const eliminarCurso = async (id) => {
    try {
      const ResultadoDelete = deletear(id, "cursos");
      // Eliminar el curso de la lista
      if (ResultadoDelete) {
        setListaCursos(listaCursos.filter((curso) => curso.id !== id));
        console.log("Curso eliminado correctamente");
      } else {
        console.error("Error al eliminar el curso:");
      }
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  };

  useEffect(() => {
    Cursos();
  }, []);

  const auth = useAuth(); // Obtén el contexto de autenticación si es necesario

  return (
    <div className="container">
      <div className="row ">
        {listaCursos.map((curso) => (
          <div className="col-12 mb-2" key={curso.id}>
            <div
              className="row align-items-center border"
              style={{ height: "100%" }}
            >
              {/* Columna para la imagen */}
              <div className="col-3">
                <div
                  className="d-flex"
                  style={{ height: "100%", alignItems: "center" }}
                >
                  <img
                    src={curso.image}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      maxHeight: "5rem",
                    }}
                    alt="Nombre del curso"
                  />
                </div>
              </div>
              {/* Columna para el título */}
              <div className="col-6" style={{ textAlign: "left" }}>
                <p className="fw-normal">{curso.title}</p>
                <p className="fw-normal">{curso.subtitle}</p>
              </div>
              {/* Columna para los botones */}
              <div className="col-3" style={{ height: "100%" }}>
                {auth && ( // Verifica la autenticación para mostrar los botones de editar y borrar
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <button className="btn btn-primary btn-sm mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarCurso(curso.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                      Borrar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaCursos;
