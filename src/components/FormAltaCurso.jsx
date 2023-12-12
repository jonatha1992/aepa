import React, { useState } from "react";

const FormAltaCurso = () => {
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
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
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
          <label>Título del Curso:</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
          />

          <label>Subtítulo del Curso:</label>
          <input
            type="text"
            name="subtitle"
            value={courseData.subtitle}
            onChange={handleInputChange}
          />

          <label>Descripción del Curso:</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
          />

          <label>Subir Imagen:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          <button type="button" onClick={nextPage}>
            Siguiente
          </button>
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Pantalla 2: Detalles del Curso (Parte 1)</h2>
          <label>¿Qué aprenderán los estudiantes en tu curso?</label>
          <textarea
            name="objectives"
            value={courseData.objectives}
            onChange={handleInputChange}
          />

          <button type="button" onClick={prevPage}>
            Anterior
          </button>
          <button type="button" onClick={nextPage}>
            Siguiente
          </button>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Pantalla 3: Detalles del Curso (Parte 2)</h2>
          <label>
            ¿Cuáles son los requisitos o los requisitos previos para realizar tu
            curso?
          </label>
          <textarea
            name="requirements"
            value={courseData.requirements}
            onChange={handleInputChange}
          />

          <label>¿A quién está dirigido este curso?</label>
          <textarea
            name="targetAudience"
            value={courseData.targetAudience}
            onChange={handleInputChange}
          />

          <button type="button" onClick={prevPage}>
            Anterior
          </button>
          <button type="submit">Finalizar y Enviar</button>
        </div>
      )}
    </form>
  );
};

export default FormAltaCurso;
