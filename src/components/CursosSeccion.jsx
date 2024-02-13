import React from "react";
import CardCurso from "./CardCurso";
import "../css/cursosSeccion.css";
import BECurso from "../models/BECurso"; // Importa la clase Curso
import neo from "../assets/cuidados neo.jpg";
import pediatria from "../assets/cuidados ped.jpg";
import farmacologia from "../assets/Farma3.jpg";
import SliderCursosLanding from "./SliderCursosLanding";
// Crear instancias de los modelos Curso
const cursos = [
  {
    title: "Cuidados Críticos Neonatales",
    author: "Lic. A. Perelli",
    description: "Descripción del curso sobre cuidados críticos neponatales.",
    duration: "Duración: 2 meses (May/Jun)",
    start: "Inicio: 09/05 (8 clases)",
    price: "$20.000",
    imageUrl: neo,
    clases: "Jue: 16:30 - 19:00  hs",
    Workload: "50 hs",
  },
  {
    title: "Cuidados Críticos Pediátricos",
    description: "Descripción del curso sobre cuidados críticos pediátricos.",
    duration: "Duración: 3 meses (Abr/May/Jun)",
    start: "Inicio: 10/04 (13 clases)",
    author: "Lic. B. Llanos",
    price: "$25.000",
    clases: "Mie: 15:00 - 18:00  hs",
    imageUrl: pediatria,
    Workload: "50 hs",
  },
  {
    title: "Farmacología",
    description: "Descripción del curso de farmacología.",
    duration: "Duración: 2 meses (Abr/May)",
    start: "Inicio: 12/05 (13 clases)",
    author: "Lic. M. Jennifer",
    price: "$20.000",
    imageUrl: farmacologia,
    clases: "Mie: 15:00 - 18:00  hs",
    Workload: "30 hs",
  },
];

// Suponiendo que tienes otros cursos, podrías instanciarlos aquí también.

export default class CursosSeccion extends React.Component {
  render() {
    return (
      <div className="background-6 ">
        <div className="container">
          <h1 className="cursos-titulo">CURSOS</h1>
          <p className="parrafo">
            Descubre una variedad de cursos especializados para licenciados en
            enfermería que buscan expandir su expertise y destrezas clínicas.
            Nuestros programas abarcan desde técnicas avanzadas en cuidados
            intensivos hasta innovaciones en salud pública, proporcionando una
            formación integral y actualizada.
          </p>
          {/* Lista de Cursos */}

          <SliderCursosLanding cursos={{ cursos }} />
        </div>
      </div>
    );
  }
}
