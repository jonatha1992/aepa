import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // Importa react-icons para usar iconos
import { Height } from "@mui/icons-material";
import Breadcrumbs from "./Breadcrumbs";

export default function MiPerfil() {
  const { User } = useAuth();

  // Comprueba si hay un usuario antes de intentar acceder a sus propiedades
  if (!User) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container ">
      <div
        className=" align-items-center contenido-container d-flex justify-content-start flex-column"
        style={{}}
      >
        <Breadcrumbs />
        <div className="card border-0 shadow" style={{ width: "25rem" }}>
          <div className="card-body">
            <div className="text-center mb-3">
              <FaUserCircle size="100px" className="text-secondary" />
            </div>
            <h4 className="card-title text-center mb-3">
              {User.nombre_completo}
            </h4>
            <h6 className=" text-secondary fw-bold  mb-2">
              Rol:
              <strong
                style={{ color: "var(--color3)" }}
                className="text-uppercase "
              >
                {" " + User.rol}
              </strong>
            </h6>
            <h6 className="text-secondary fw-bold  mb-2">
              Email:
              <strong style={{ color: "var(--color3)" }}>
                {" " + User.email}
              </strong>
            </h6>
            <h6 className="text-secondary fw-bold  mb-2">
              DNI:
              <strong style={{ color: "var(--color3)" }}>
                {" " + User.DNI}
              </strong>
            </h6>
            <h6 className=" text-secondary fw-bold  mb-2">
              Localidad:
              <strong style={{ color: "var(--color3)" }}>
                {" " + User.localidad}
              </strong>
            </h6>
            <h6 className="text-secondary fw-bold  mb-2">
              Telefono:
              <strong style={{ color: "var(--color3)" }}>
                {" " + User.telefono}
              </strong>
            </h6>
            <h6 className="text-secondary fw-bold  mb-2">
              Nivel:
              <strong style={{ color: "var(--color3)" }}>
                {" " + User.nivel}
              </strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
