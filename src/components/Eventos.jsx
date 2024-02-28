import React from "react";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/anuncio.jpg";
import imagen3 from "../assets/logo-aepa.png";
const Eventos = () => (
    <div className="evento ">
        <div className="evento-encabezodo">
            <h1>EVENTOS</h1>
        </div>
        <div class="container event-section  ">
            <div class="row">
                <div class="col-md-6 d-flex flex-column justify-content-center ">
                    <h2 className="evento-titulo">III Encuentro de Neonatología</h2>
                    <p className="text-justify">
                        Unámonos para el tercer encuentro anual de Neonatología, donde los principales expertos discutirán los avances más
                        recientes en el cuidado y tratamiento de neonatos. Este evento es una oportunidad imperdible para profesionales de
                        la salud que buscan actualizarse sobre las prácticas más innovadoras en el campo.
                    </p>

                    <p className="evento-fecha">22 de marzo 10hs.</p>
                </div>
                <div class="col-md-6 event-image">
                    <img src={imagen1} alt="imagen de evento" className="rounded" style={{ width: "80%", height: "100%" }} />
                </div>
            </div>
        </div>
        {/* <div className="eventoCard">
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo">
                        <img src={imagen1} alt="imagen de evento" style={{ width: "100%", height: "180px" }} />
                    </div>
                    <div className="type">EVENTO</div>
                    <div className="name">III Encuentro de Neonatología</div>
                    <div className="date">22 de marzo</div>
                    <div className="time">10hs.</div>
                </div>
            </div>
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo">
                        <img className="imge" src={imagen2} alt="imagen de anuncio" style={{ width: "100%", height: "180px" }} />
                    </div>
                    <div className="type">ANUNCIO</div>
                    <div className="name">III Encuentro Multidisciplinario de Enfermería</div>
                    <div className="date">22 de Noviembre</div>
                    <div className="time">Jornada Anual</div>
                </div>
            </div>

            <div className="calendario">
                <img
                    className="calendar"
                    src={imagen3}
                    alt="imagen de anuncio"
                    style={{ width: "90%", height: "350px", marginLeft: "70px", marginTop: "20px" }}
                />
            </div>
        </div> */}
    </div>
);

export default Eventos;
