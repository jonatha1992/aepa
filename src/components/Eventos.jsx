import React from "react";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/anuncio.jpg";

const Eventos = () => (
    <div className="eventos">
        <div className="encabezado">
            <h1>EVENTOS Y ANUNCIOS</h1>
            <h2>Próximos inicios</h2>
        </div>

        <div className="eventoCard">
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo">
                        <img src={imagen1} alt="imagen de evento" />
                    </div>
                    <div className="type">EVENTO</div>
                    <div className="name">III Encuentro de Neonatología</div>
                    <div className="date">22 de marzo</div>
                    <div className="time">10hs.</div>
                    <div className="btnInfo">
                        <button>MAS INFORMACIÓN</button>
                    </div>
                </div>
            </div>
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo">
                        <img src={imagen2} alt="imagen de anuncio" />
                    </div>
                    <div className="type">ANUNCIO</div>
                    <div className="name">III Encuentro Multidisciplinario de Enfermería</div>
                    <div className="date">22 de Noviembre</div>
                    <div className="time">Jornada Anual</div>
                    <div className="btnInfo">
                        <button>MAS INFORMACION</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Eventos;
