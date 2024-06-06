import React from "react";
import presidenteImage from "../assets/lic-llanos-beatriz.png";
import vicepresidenta from "../assets/lic-santini-maria.png";
import secretario from "../assets/enf-sierra-jorge.png";
import "../css/nosotros.css";
import { motion } from "framer-motion";
import videoSource from "../assets/video-aepa.mp4";
export default function Nosotros() {
  return (
    <div className="container-fluid background-6 p-5">
      <div className=" d-flex justify-content-between  mt-5 flex-wrap align-items-center align-content-center">
        <motion.div className=" mx-auto  col-12  col-lg-6  justify-content-center align-items-center ">
          <h4 className="titulo-nosotros ">¿Quienes somos?</h4>
          <p className="parrafo-nosotros ">
            La asociacion Argentina de enfermeros sin fronteras, AESFRON. Nació
            para tener una voz unificada que representara a los enfermeros
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
          <div className="video-container">
            <video
              className="video-responsive"
              src={videoSource}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
