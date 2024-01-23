import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  db,
  CursosInscriptos,
} from "../firebase.js"; // Asegúrate de importar las funciones necesarias de tu librería de Firebase
import { useAuth } from "../context/AuthContext";

const MisCursos = () => {
  // Estado local para almacenar los datos de Firebase
  const [cursos, setCursos] = useState([]);
  const { User } = useAuth();
  // Efecto secundario utilizando useEffect
  useEffect(() => {
    // Lógica a ejecutar después de que el componente se monta
    // Puedes realizar llamadas a Firebase u otras operaciones asíncronas

    const fetchDataFromFirebase = async () => {
      try {
        const miscursos = await CursosInscriptos(User.uid);
        console.log(miscursos);
        setCursos(miscursos);
      } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
      }
    };

    fetchDataFromFirebase();

    // Lógica a ejecutar antes de que el componente se desmonte
    return () => {
      // Puedes realizar limpieza, cancelar suscripciones, etc.
    };
  }, []); // El segundo argumento (array de dependencias) controla cuándo se ejecuta el efecto

  // Renderiza el componente
  return (
    <div style={{ color: "black" }}>
      <h1>Mis Cursos</h1>
      {/* Renderiza los datos obtenidos del estado local */}
      <ul>
        {cursos.map((curso, index) => (
          <li key={index}>{curso.detalles.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MisCursos;
