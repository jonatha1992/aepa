import React, { useState, useEffect } from "react";
import CardCurso from "./CardCurso";
import "../css/cursosSeccion.css";
import { getAllCursos } from "../controllers/controllerCurso";
import SliderCursosLanding from "./SliderCursosLanding";
// Crear instancias de los modelos Curso

// const cursos = [
//     {
//         title: "Cuidados Críticos Neonatales",
//         author: "Lic. A. Perelli",
//         description: "Descripción del curso sobre cuidados críticos neponatales.",
//         duration: "2 meses (May/Jun)",
//         start: "09/05 (8 clases)",
//         price: "$20.000",
//         imageUrl:
//             "https://firebasestorage.googleapis.com/v0/b/aepa-86ed6.appspot.com/o/Neo.JPG?alt=media&token=6d250e92-6c4c-45cd-addf-8d72284e4750",
//         classes: "Jue: 16:30 - 19:00  hs",
//         workload: "50 hs",
//     },
//     {
//         title: "Cuidados Críticos Pediátricos",
//         author: "Lic. B. Llanos",
//         description: "Descripción del curso sobre cuidados críticos pediátricos.",
//         duration: " 3 meses (Abr/May/Jun)",
//         start: " 10/04 (13 clases)",
//         price: "$25.000",
//         classes: "Mie: 15:00 - 18:00  hs",
//         imageUrl:
//             "https://firebasestorage.googleapis.com/v0/b/aepa-86ed6.appspot.com/o/Pediatria.jpg?alt=media&token=d2e1e2f3-1b03-44ff-9c1e-36b56eef6836",
//         workload: "50 hs",
//     },
//     {
//         title: "Farmacología",
//         description: "Descripción del curso de farmacología.",
//         duration: " 2 meses (Abr/May)",
//         start: "12/05 (13 clases)",
//         author: "Lic. M. Jennifer",
//         price: "$20.000",
//         imageUrl:
//             "https://firebasestorage.googleapis.com/v0/b/aepa-86ed6.appspot.com/o/Farmacia.JPG?alt=media&token=417e9c50-723a-4c33-9536-99f9e21759c3",
//         classes: "Mie: 15:00 - 18:00  hs",
//         workload: "30 hs",
//     },
// ];

// Suponiendo que tienes otros cursos, podrías instanciarlos aquí también.

export default class CursosSeccion extends React.Component {
    // Inicializa el estado
    state = {
        cursos: [],
    };

    // Carga los cursos después de montar el componente
    componentDidMount() {
        this.cargarCursos();
    }

    // Método para cargar los cursos
    cargarCursos = async () => {
        try {
            const cursos = await getAllCursos();
            this.setState({ cursos });
        } catch (error) {
            console.error("Error cargando los cursos: ", error);
            // Manejar el error como consideres adecuado
        }
    };
    render() {
        const { cursos } = this.state;
        return (
            <div className="container-fluid background-6 ">
                <div className="container ">
                    <h1 className="cursos-titulo">CURSOS</h1>
                    <p className="parrafo">
                        Descubre una variedad de cursos especializados para licenciados en enfermería que buscan expandir su expertise y
                        destrezas clínicas. Nuestros programas abarcan desde técnicas avanzadas en cuidados intensivos hasta innovaciones en
                        salud pública, proporcionando una formación integral y actualizada.
                    </p>
                    {/* Lista de Cursos */}

                    <SliderCursosLanding cursos={{ cursos }} />
                </div>
            </div>
        );
    }
}
