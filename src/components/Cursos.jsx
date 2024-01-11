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
    <div className="mt-5 container d-flex justify-content-center align-items-center h-100">
      <div className=" row">
        {cursos.map(({ title, image, url, id }) => (
          <div className="col-md-12" key={id}>
            <Curso imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
