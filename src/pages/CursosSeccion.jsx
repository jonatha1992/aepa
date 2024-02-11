import React from "react";
import CardCurso from "../components/CardCurso";
import neo from "../assets/cuidados neo.jpg";
import "../css/cursosSeccion.css";
import BECurso from "../models/BECurso"; // Importa la clase Curso

// Crear instancias de los modelos Curso
const cursoNeo = new BECurso(
    "Cuidados Críticos Neonatales",
    neo,
    "A. Perelli",
    "$20.000",
    "Duración: 2 meses (May/Jun)",
    "Inicio: 09/05 (8 clases)"
);

// Suponiendo que tienes otros cursos, podrías instanciarlos aquí también.

export default class CursosSeccion extends React.Component {
    render() {
        return (
            <div className="background-6 ">
                <div className="container">
                    <h1 className="cursos-titulo">CURSOS</h1>
                    <p className="parrafo">
                        Descubre una variedad de cursos especializados para licenciados en enfermería que buscan
                        expandir su expertise y destrezas clínicas. Nuestros programas abarcan desde técnicas avanzadas
                        en cuidados intensivos hasta innovaciones en salud pública, proporcionando una formación
                        integral y actualizada.
                    </p>
                    {/* Lista de Cursos */}
                    <div className="cursos-grid">
                        <CardCurso Curso={cursoNeo} />
                        <CardCurso Curso={cursoNeo} />
                        <CardCurso Curso={cursoNeo} />
                    </div>
                </div>
            </div>
        );
    }
}
