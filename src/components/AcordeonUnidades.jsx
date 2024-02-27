import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { getModulos } from "../controllers/controllerCurso";

export default function AcordeonUnidades({ cursoid }) {
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const unidadesData = await getModulos(cursoid);
        setUnidades(unidadesData);
      } catch (error) {
        console.error("Error al obtener las unidades:", error);
      }
    };

    fetchUnidades();
  }, [cursoid]);

  if (unidades.length === 0) {
    // Muestra un mensaje de carga mientras se obtiene la información
    return <div>Cargando...</div>;
  }

  return (
    <div className=" container-modulos">
      {unidades.map((unidad) => (
        <Accordion className="acordeon-mui" key={unidad.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${unidad.id}-content`}
            id={`panel-${unidad.id}-header`}
          >
            {unidad.titulo}
          </AccordionSummary>
          <AccordionDetails style={{ background: "var(--color5)" }}>
            <nav aria-label={`ítems de ${unidad.titulo}`}>
              <List>
                {unidad.items.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item.titulo} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
