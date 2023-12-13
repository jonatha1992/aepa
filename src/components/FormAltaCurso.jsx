import React, { useState } from "react";
import "../css/FormAltaCurso.css";

const FormAltaCurso = () => {
  const [error, setError] = useState(false); // Estado para controlar la presencia de errores
  const [page, setPage] = useState(1); // Estado para controlar la página actual
  const [courseData, setCourseData] = useState({
    title: "",
    subtitle: "",
    description: "",
    objectives: "",
    requirements: "",
    targetAudience: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setCourseData({ ...courseData, image: imageFile });
  };

  const nextPage = () => {
    if (validatePage()) {
      setPage(page + 1);
      setError(false); // Reiniciar el estado de error si se pasa la validación
    } else {
      setError(true); // Establecer el estado de error si la validación falla
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    setError(false); // Reiniciar el estado de error al retroceder
  };

  const validatePage = () => {
    // Validación para la página actual
    switch (page) {
      case 1:
        return (
          courseData.title !== "" &&
          courseData.subtitle !== "" &&
          courseData.description !== "" &&
          courseData.image !== null
        );
      case 2:
        return courseData.objectives !== "";
      case 3:
        return (
          courseData.requirements !== "" && courseData.targetAudience !== ""
        );
      default:
        return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar courseData a tu backend o hacer lo necesario con los datos
    console.log(courseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {page === 1 && (
        <div>
          <h2>Pantalla 1: Información Básica del Curso</h2>
          <div className="item-input">
            <label>Título del Curso:</label>
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="item-input">
            <label>Subtítulo del Curso:</label>
            <input
              type="text"
              name="subtitle"
              value={courseData.subtitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="item-input">
            <label>Descripción del Curso:</label>
            <textarea
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="item-input">
            <label>Subir Imagen:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          {error && <p>Por favor completa todos los campos</p>}
          <div className="item-input">
            <button type="button" onClick={nextPage}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Pantalla 2: Detalles del Curso (Parte 1)</h2>
          <div className="item-input">
            <label>¿Qué aprenderán los estudiantes en tu curso?</label>
            <textarea
              name="objectives"
              value={courseData.objectives}
              onChange={handleInputChange}
            />
          </div>
          {error && <p>Por favor completa todos los campos</p>}
          <div>
            <button type="button" onClick={prevPage}>
              Anterior
            </button>
            <button type="button" onClick={nextPage}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Pantalla 3: Detalles del Curso (Parte 2)</h2>
          <div className="item-input">
            <label>
              ¿Cuáles son los requisitos o los requisitos previos para realizar
              tu curso?
            </label>
            <textarea
              name="requirements"
              value={courseData.requirements}
              onChange={handleInputChange}
            />
          </div>
          <div className="item-input">
            <label>¿A quién está dirigido este curso?</label>
            <textarea
              name="targetAudience"
              value={courseData.targetAudience}
              onChange={handleInputChange}
            />
          </div>
          {error && <p>Por favor completa todos los campos</p>}
          <div>
            <button type="button" onClick={prevPage}>
              Anterior
            </button>
            <button type="submit">Finalizar y Enviar</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default FormAltaCurso;
