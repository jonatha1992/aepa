import { useState, useEffect, createContext } from "react";
import { useAuth } from "../context/AuthContext";
import { CursosInscriptos, CursosAdmin } from "../controllers/controllerUser";

export const AlumnosContext = createContext();

export function AlumnosContextProvider(props) {
  const { User } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        let miscursos = [];
        if (User.rol === "admin") {
          miscursos = await CursosAdmin();
        } else {
          miscursos = await CursosInscriptos(User.uid);
          console.log("misCursos:", miscursos);
        }
        setCursos(miscursos);
        console.log("cursos:", miscursos);
      } catch (error) {
        console.error(
          "Error al obtener datos de Firebase: necesita logearse primero"
        );
      }
    };

    fetchDataFromFirebase();
  }, [User]);
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
