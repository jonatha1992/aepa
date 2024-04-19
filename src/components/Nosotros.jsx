import React from "react";
import presidenteImage from "../assets/lic-llanos-beatriz.png";
import vicepresidenta from "../assets/lic-santini-maria.png";
import secretario from "../assets/enf-sierra-jorge.png";
import "../css/nosotros.css";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div className="container-fluid background-6 p-5">
      <div className=" d-flex justify-content-between  mt-5 flex-wrap align-items-center align-content-center">
        <motion.div className=" mx-auto  col-12  col-lg-6  justify-content-center align-items-center ">
          <h4 className="titulo-nosotros ">¿Quienes somos?</h4>
          <p className="parrafo-nosotros ">
            La Asociacion de Enfermeria Pediatrica Argentina, AEPA. Nació para
            tener una voz unificada que representara a los enfermeros
            pediátricos en Argentina. Somos un equipo comprometidos, con una
            premisa: brindar la mejor atención posible a nuestros pacientes y
            sus familias, buscamos unificar y fortalecer la profesión.
          </p>
          <p className="parrafo-nosotros">
            Los tres colores, representan a las instituciones emblemáticas en
            nuestro país en la atencion pediatrica: El color Celeste al
            <strong style={{ color: "var(--aepa-azul)" }}>
              {" "}
              Hospital Ricardo Gutiérrez
            </strong>
            , Naranja al{" "}
            <strong style={{ color: "var(--aepa-naranja)" }}>
              {" "}
              Hospital Pedro de Elizalde{" "}
            </strong>{" "}
            y Violeta al
            <strong style={{ color: "var(--aepa-violeta)" }}>
              {" "}
              Hospital Juan Garrahan
            </strong>
            .
          </p>
        </motion.div>
        <div className=" row  col-12  col-lg-6 justify-content-center  ">
          <div className="imagen-organizacion col-12 col-sm-8 col-lg-8">
            <img src={presidenteImage} className=" w-50" alt="Presidente" />
            <div className="card-body">
              <h3 className="card-title">Presidente</h3>
              <p className="card-text text-center fw-bold">
                Lic. Llanos Beatriz
              </p>
            </div>
          </div>
          <div className="imagen-organizacion col-8 col-sm-6 col-lg-6 ">
            <img src={vicepresidenta} className=" w-50" alt="Vicepresidenta" />
            <div className="card-body">
              <h3 className="card-title">Vice Presidente</h3>
              <p className="card-text text-center fw-bold">
                Lic. Santini Maria
              </p>
            </div>
          </div>

          <div className=" imagen-organizacion  col-8 col-sm-6 col-lg-6">
            <img src={secretario} className=" w-50" alt="Secretario" />
            <div className="card-body">
              <h3 className="card-title">Secretario</h3>
              <p className="card-text text-center fw-bold ">
                Enf. Sierra Jorge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
