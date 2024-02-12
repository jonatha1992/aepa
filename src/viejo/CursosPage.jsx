import React from "react";
import Cursos from "../components/Cursos";
import "../css/cursospages.css";

const CursoCard = ({ title, image, author, duration, startDate, price, ejemplo }) => (
    <div className="curso-card">
        <div className="curso-header">
            <h2>{title}</h2>
        </div>
        <div className="curso-details">
            <h3>Autora: {author}</h3>
            <p>Duración: {duration}</p>
            <p>Inicio: {startDate}</p>
            <p>Precio: ${price}</p>
        </div>
        <div className="curso-info">
            <h3>Ejemplo: {ejemplo}</h3>
        </div>
    </div>
);

export default class CursosPage extends React.Component {
    render() {
        return (
            <div className="cursos-page">
                <div className="descuento-box">
                    <p className="descuento-text">50% DESCUENTO A SOCIOS</p>
                </div>

                <div className="curso-container">
                    {/* Primer Curso */}
                    <CursoCard
                        title="Cuidados Críticos Neonatales"
                        image="../assets/ciudadosNeo.JPG"
                        author="A. Perelli"
                        duration="Duracion: 2 meses (May/Jun)"
                        startDate="Inicio:09/05 (8 clases)"
                        price="20.000"
                        ejemplo="hola"
                    />

                    {/* Segundo Curso */}
                    <CursoCard
                        title="Cuidados Críticos Pediatricos"
                        image="../assets/ciudadosPedia.jpg"
                        author="Autora Lic. B. Llanos"
                        duration="Duracion: 3 meses (Abr/May/Jun)"
                        startDate="Inicio:10/04 (13 clases)"
                        price="25.000"
                    />

                    {/* Tercer Curso */}
                    <CursoCard
                        title="Farmacología"
                        image="../assets/farma.JPG"
                        author="Autora Lic. M. Jennifer"
                        duration="Duracion: 2 meses (Abr/May)"
                        startDate="Inicio:12/05 (13 clases)"
                        price="20.000"
                    />
                </div>
            </div>
        );
    }
}
