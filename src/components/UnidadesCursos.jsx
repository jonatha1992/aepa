import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContenidoXCurso } from "../firebase.js";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkIcon from "@mui/icons-material/Link";

const UnidadesCursos = () => {
  const { cursotitle, cursoid } = useParams();
  const [contenido, setContenido] = useState([]);
  const [openUnidad, setOpenUnidad] = useState(null);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const contenidoData = await ContenidoXCurso(cursoid);
        setContenido(contenidoData);
      } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [cursoid]);

  // Obtiene una lista de tipos únicos
  const obtenerTiposUnicos = () => {
    const tiposSet = new Set();

    contenido.forEach((unidad) => {
      tiposSet.add(unidad.tipo);
    });

    return Array.from(tiposSet);
  };

  // Llamamos a la función al cargar el componente
  const tiposUnicos = obtenerTiposUnicos();

  // Estructura los datos para reflejar la jerarquía de árbol
  const arbolUnidadesTipos = contenido.reduce((arbol, unidad) => {
    if (!arbol[unidad.unidad]) {
      arbol[unidad.unidad] = {};
    }

    if (!arbol[unidad.unidad][unidad.tipo]) {
      arbol[unidad.unidad][unidad.tipo] = [];
    }

    arbol[unidad.unidad][unidad.tipo].push(unidad.titulo);

    return arbol;
  }, {});

  const handleToggleUnidad = (numero) => {
    setOpenUnidad((prevOpenUnidad) =>
      prevOpenUnidad === numero ? null : numero
    );
  };

  return (
    <>
      <h2
        style={{
          background: "white",
          color: "#606468",
          textAlign: "start",
          textTransform: "uppercase",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {cursotitle}
      </h2>
      <div style={{ color: "black", background: "#5d809d" }}>
        {/* Renderiza las unidades utilizando el acordeón de React */}
        {Object.entries(arbolUnidadesTipos).map(([numero, tipos]) => (
          <div key={numero}>
            <button
              onClick={() => handleToggleUnidad(numero)}
              style={{
                width: "100%",
                background: "#5d809d",
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "5px",
                borderRadius: "5px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              Unidad {numero}
            </button>
            {openUnidad === numero && (
              <div
                style={{
                  backgroundColor: "rgb(182 199 213)",
                  paddingBottom: "0.5rem",
                  borderRadius: "5px",
                }}
              >
                {/* Renderiza los tipos únicos */}
                {Object.entries(tipos).map(([tipo, titulos]) => (
                  <div key={tipo} style={{ marginBottom: "10px" }}>
                    <p className="encabezado-tipo">{tipo}</p>
                    {/* Renderiza los títulos de cada tipo */}
                    {titulos.map((titulo) => (
                      <div key={titulo} className="titulo-contenido">
                        <div
                          className="d-flex flex-row align-items-center"
                          style={{ width: "75%" }}
                        >
                          {tipo === "pdf" && (
                            <PictureAsPdfIcon
                              style={{
                                width: "1.5em",
                                height: "1.5em",
                                marginRight: "5px",
                              }}
                            />
                          )}
                          {tipo === "link" && (
                            <LinkIcon
                              style={{
                                width: "1.5em",
                                height: "1.5em",
                                marginRight: "5px",
                              }}
                            />
                          )}
                          <p>{titulo}</p>
                        </div>
                        {/* Puedes agregar más detalles según sea necesario */}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default UnidadesCursos;
