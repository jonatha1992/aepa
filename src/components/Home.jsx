import React from "react";

export default function Home() {
  return (
    <div className="container">
      <h3
        style={{
          color: "#383d42",
          fontFamily: "Kanit, sans-serif",
          fontWeight: "bold",
          paddingBottom: "1.5rem",
        }}
      >
        Asociación de Enfermería Pediátrica Argentina
      </h3>
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
            Nuestra visión es liderar en Enfermería con ética y humanismo,
            enfocándonos en equidad y justicia. La misión es representar y
            desarrollar enfermeros priorizando la salud infantil y juvenil. Nos
            guían valores de competencia, responsabilidad, conocimiento, e
            innovación cientifica.
          </h1>
        </div>
        <div
          className="col-md-6 d-flex  justify-content-center"
          style={{ flexDirection: "column" }}
        >
          <div className="  imagen-home " style={{ height: "30vh" }}></div>
        </div>
      </div>
      <div
        className="row flex-direction-row"
        style={{ color: "#383d42", fontFamily: "Kanit, sans-serif" }}
      >
        <div className="col-md-6"></div>
        <div
          className="col-md-6 d-flex  justify-content-center"
          style={{ flexDirection: "column" }}
        ></div>
      </div>
    </div>
  );
}
