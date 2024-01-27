import React, { useEffect, useState } from "react";
import { CursosInscriptos } from "../firebase.js";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MisCursos = () => {
  const [cursos, setCursos] = useState([]);
  const { User } = useAuth();
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleCursoClick = (cursoId, cursotitle) => {
    // Utiliza navigate en lugar de push
    navigate(`/unidades/${cursotitle}/${cursoId}`);
  };

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const miscursos = await CursosInscriptos(User.uid);
        setCursos(miscursos);
      } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [User.uid]);

  return (
    <div className="container container-miscursos" style={{ color: "black" }}>
      {cursos.map((curso, index) => (
        <div
          key={index}
          className="miscursos-item"
          onClick={() => handleCursoClick(curso.cursoid, curso.detalles.title)}
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
      ))}
    </div>
  );
};

export default MisCursos;
