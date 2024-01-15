import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div
        className="row flex-direction-row"
        style={{ color: "#383d42", fontFamily: "Kanit, sans-serif" }}
      >
        <div className="col-md-6">
          <h1
            style={{
              textAlign: "start",
              fontSize: "1em",
              lineHeight: "2em",
              color: "rgb(56, 61, 66);",
            }}
          >
            La Asociación de Enfermería Pediátrica Argentina, A.E.P.A..Nació
            para tener una voz unificada que representara a los enfermeros
            pediátricos en Argentina. Somos un equipo comprometido, con una
            premisa: brindar la mejor atención posible a nuestros pacientes y
            sus familias , buscamos unificar y fortalecer la profesión.Los tres
            colores, representan a las instituciones emblemáticas en nuestro
            país en la atención pediátrica: El color Celeste al Hospital Ricardo
            Gutiérrez, al Hospital Pedro de Elizalde y Violeta al Hospital Juan
            Garrahan
          </h1>
        </div>
        <div
          className="col-md-6 d-flex  justify-content-center"
          style={{ flexDirection: "column" }}
        >
          <div className="  imagen-home " style={{ height: "30vh" }}></div>
        </div>
      </div>
    </div>
  );
}
