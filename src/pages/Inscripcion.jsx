import React, { useState, useEffect } from "react";
import "../css/Inscripcion.css";
import imagenprueba from "../assets/farmaco.jpg";
import { useParams } from "react-router-dom";
import { getCurso } from "../controllers/controllerCurso";

export default function Inscripcion() {
  const { cursoid } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    // Llamada a la función para obtener detalles del curso
    const fetchCurso = async () => {
      try {
        const cursoData = await getCurso(cursoid);
        setCurso(cursoData);
      } catch (error) {
        console.error("Error al obtener detalles del curso", error);
      }
    };

    // Llamada a la función solo si hay un ID válido
    if (cursoid) {
      fetchCurso();
    }
  }, [cursoid]);

  if (!curso) {
    // Puedes mostrar un indicador de carga aquí
    return <p>Cargando curso...</p>;
  }
  return (
    <div
      className="fondo-panta"
      style={{ paddingTop: "80px", textAlign: "start", paddingBottom: "80px" }}
    >
      <div className="header-inscripcion">
        <div className="info-inscripcion" style={{ padding: "1.5rem" }}>
          <h2>{curso.title}</h2>
          <h3>{curso.price}</h3>
          <button>Comprar Curso</button>
        </div>
        <div className="contenedor-imagen-curso" style={{ padding: "1rem" }}>
          <img src={curso.image} alt="" />
        </div>
      </div>
      <div className="body-inscripcion">
        <p>{curso.description}</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <h2
          style={{
            paddingTop: "3rem",
            fontWeight: "900",
          }}
        >
          ¿A quién va dirigido este curso?
        </h2>
        <hr />
        <div>{curso.targetAudience}</div>
        <h2
          style={{
            paddingTop: "3rem",
            fontWeight: "900",
          }}
        >
          ¿Por qué elegir este curso?
        </h2>
        <hr />
        <div>{curso.objectives}</div>
      </div>
    </div>
  );
}
