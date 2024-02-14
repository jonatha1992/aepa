import React from "react";
import "./Anuncio.css"; // Asegúrate de que el path al archivo CSS es correcto

export default function Anuncio() {
    return (
        <div className="card-container d-flex flex-wrap gap-5">
            {/* Tarjeta de Anuncios */}
            <div className="card card-anuncio">
                <h2>Anuncio Especial</h2>
                <p>
                    22 de noviembre JORNADA ANUAL II Encuentro Multidisciplinario de Enfermería. Lic. Coronel Fabiana.
                </p>
                <p>50% descuentos en todos los cursos y talleres a socios activos</p>
                <h3>DIPLOMATURA DE CUIDADOS CRÍTICOS PEDIÁTRICOS</h3>
            </div>

            {/* Tarjeta de Eventos */}
            <div className="card card-evento">
                <h2>Concierto de Verano</h2>
                <p>Únete a nosotros para el concierto anual al aire libre este sábado 12 de junio.</p>
            </div>
        </div>
    );
}
