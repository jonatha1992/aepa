import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkIcon from "@mui/icons-material/Link";
import Breadcrumbs from "./Breadcrumbs";
import { ContenidoXCurso } from "../firebase.js";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

const UnidadesCursos = ({ activeCourse }) => {
  const { id, title } = activeCourse || {};
  const [contenido, setContenido] = useState([]);
  const [openUnidad, setOpenUnidad] = useState(true);

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const contenidoData = await ContenidoXCurso(id);
        setContenido(contenidoData);
      } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [id]);

  const obtenerTiposUnicos = () => {
    const tiposSet = new Set();

    contenido.forEach((unidad) => {
      tiposSet.add(unidad.tipo);
    });

    return Array.from(tiposSet);
  };

  const tiposUnicos = obtenerTiposUnicos();

  const arbolUnidadesTipos = contenido.reduce((arbol, unidad) => {
    if (!arbol[unidad.unidad]) {
      arbol[unidad.unidad] = {};
    }

    if (!arbol[unidad.unidad][unidad.tipo]) {
      arbol[unidad.unidad][unidad.tipo] = [];
    }

    arbol[unidad.unidad][unidad.tipo].push(unidad);

    return arbol;
  }, {});

  const handleToggleUnidad = (numero) => {
    setOpenUnidad((prevOpenUnidad) =>
      prevOpenUnidad === numero ? null : numero
    );
  };

  const handleMaterialClick = (datourl) => {
    window.open(datourl, "_blank");
  };

  return (
    <div className="container" style={{}}>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          style={{
            background: "white",
            color: "#606468",
            textAlign: "start",
            textTransform: "uppercase",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {title}
        </Typography>
        <div style={{ color: "black", background: "#5d809d" }}>
          {Object.entries(arbolUnidadesTipos).map(([numero, tipos]) => (
            <Accordion key={numero} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                style={{
                  background: "var(--color6)",
                  color: "white",
                  fontSize: "1.5rem",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Unidad {numero}
              </AccordionSummary>
              <AccordionDetails
                style={{
                  backgroundColor: "rgb(182 199 213)",
                  paddingBottom: "0.5rem",
                  borderRadius: "5px",
                }}
              >
                {Object.entries(tipos).map(([tipo, detalles]) => (
                  <div key={tipo} style={{ marginBottom: "10px" }}>
                    <div className="d-flex align-center">
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
                      <Typography variant="h6" className="encabezado-tipo">
                        {tipo}
                      </Typography>
                    </div>
                    {detalles.map((detalle) => (
                      <div
                        key={detalle.id}
                        className="titulo-contenido"
                        onClick={() => handleMaterialClick(detalle.datourl)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="d-flex flex-row align-items-center"
                          style={{ width: "75%" }}
                        >
                          <DownloadForOfflineIcon />
                          <Typography>{detalle.titulo}</Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnidadesCursos;
