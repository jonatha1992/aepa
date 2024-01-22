import React from "react";
import presidenteImage from "../assets/lic-llanos-beatriz.png";
import vicepresidenta from "../assets/lic-santini-maria.png";
import secretario from "../assets/enf-sierra-jorge.png";
import "../css/nosotros.css";
export default function Nosotros() {
  return (
    <section className="container">
      <div style={{ color: "black" }}>
        <h1 className="text-center mb-4 h1">MVV</h1>
        <div className="contenedor-card-nostros">
          <div className="card-nosotros" >
            <h1 className="card-title-nosotros ">Misión</h1>
            <p className="card-text ">Representar a todos los enfermeros que manifiesten compromiso por trascender y defender la salud infanto juvenil, promoviendo el avance profesional y fomentando el bienestar de la comunidad.</p>
          </div>
          <div className="card-nosotros " >
            <h1 className="card-title-nosotros">Visión</h1>
            <p className="card-text ">Demostrar el liderazgo profesional, garantizando un actuar ético, científico y humanístico, con equidad, justicia y profunda humanización, hacia una sociedad en constantes cambios.</p>
          </div>
          <div className="card-nosotros" >
            <h1 className="card-title-nosotros">Valores</h1>
            <ul className="card-text " >
              <li >Competencia profesional</li>
              <li >Responsabilidad</li>
              <li >Conocimiento</li>
              <li >Igualdad</li>
              <li >Respeto</li>
              <li >Innovación</li>
              <li >Equidad</li>
              <li >Compromiso</li>
            </ul>
          </div>
        </div>
        <h1 className="text-center my-4  h1">Quienes somos</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-12 " >
            <div className="card align-items-center">
              <img src={presidenteImage} className="card-img-top w-75" alt="Presidente" />
              <div className="card-body">
                <h3 className="card-title"
                >Presidente</h3>
                <p className="card-text text-center">Lic. Llanos Beatriz</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12" >
            <div className="card align-items-center ">
              <img src={vicepresidenta} className="card-img-top w-75" alt="Vicepresidenta" />
              <div className="card-body ">
                <h3 className="card-title" >Vice Presidente</h3>
                <p className="card-text text-center">Lic. Santini Maria</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-12" >
            <div className="card align-items-center">
              <img src={secretario} className="card-img-top w-75" alt="Secretario" />
              <div className="card-body">
                <h3 className="card-title" >Secretario</h3>
                <p className="card-text text-center ">Enf. Sierra Jorge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
