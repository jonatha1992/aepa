import React from "react";
import presidenteImage from "../assets/lic-llanos-beatriz.png";
import vicepresidenta from "../assets/lic-santini-maria.png";
import secretario from "../assets/enf-sierra-jorge.png";
import "../css/nosotros.css";
import { motion } from "framer-motion";
import videoSource from "../assets/video-aepa.mp4";
export default function Nosotros() {
  return (
    <div className="container-fluid background-7 p-5">
      <div className=" d-flex justify-content-between  mt-5 flex-wrap align-items-center align-content-center">
        <motion.div className=" mx-auto  col-12  col-lg-6  justify-content-center align-items-center ">
          <h4 className="titulo-nosotros ">¿Quienes somos?</h4>
          <p className="parrafo-nosotros">
            <span className="highlight">Nuestro Objetivo</span> es empoderar a
            los profesionales de la salud, para brindar una atención de calidad,
            basada en evidencia científica.
            <span className="highlight"> La Misión</span> consiste en empoderar
            a enfermeros y profesionales para brindar atención de calidad, a
            través de la capacitación interprofesional fundamentada en el
            respeto de la diversidad cultural. Perseguimos una{" "}
            <span className="highlight">Visión</span> que consiste en
            convertirnos en líderes internacionales en la capacitación y
            fortalecimiento de profesionales de la salud. Inspirándonos en{" "}
            <span className="highlight">Valores fundamentales </span>
            como ética, respeto, integridad, solidaridad, empatía,
            empoderamiento y resiliencia.
          </p>
        </motion.div>
        {/* <div className=" row  col-12  col-lg-6 justify-content-center  "> */}
        <div className="video-container">
          <video
            className="video-responsive"
            src={videoSource}
            autoPlay
            loop
            muted
          ></video>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
