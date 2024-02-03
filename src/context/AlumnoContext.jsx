import { useState, useEffect, createContext } from "react";
import { useAuth } from "../context/AuthContext";
import { CursosInscriptos } from "../firebase.js";

export const AlumnosContext = createContext();

export function AlumnosContextProvider(props) {
  const { User } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);

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
    <>
      <AlumnosContext.Provider
        value={{
          cursos,
          setActiveCourse,
          activeCourse,
        }}
      >
        {props.children}
      </AlumnosContext.Provider>
    </>
  );
}
