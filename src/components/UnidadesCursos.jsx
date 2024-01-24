// UnidadesCursos.js
import React from "react";
import { useParams } from "react-router-dom";

const UnidadesCursos = () => {
  const { uid, cursoid } = useParams();

  // Lógica para obtener y mostrar las unidades del curso según uid y cursoid
  // ...

  return (
    <div style={{ color: "black" }}>
      <h2>
        Unidades del Curso {cursoid} para el Usuario {uid}
      </h2>
      {/* Renderiza las unidades del curso */}
      {/* ... */}
    </div>
  );
};

export default UnidadesCursos;
