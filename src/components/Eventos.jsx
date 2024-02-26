import React from "react";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/anuncio.jpg";
import imagen3 from "../assets/logo-aepa.png";
const Eventos = () => (
    <div className="eventos">
        <div className="encabezado">
            <h1>EVENTOS Y ANUNCIOS</h1>
            <h2>Al unirse a nuestros eventos, tendrán acceso exclusivo a recursos educativos de alta calidad, contenido especializado y oportunidades de desarrollo profesional continuo, todo diseñado para impulsar su carrera hacia nuevos horizontes. Además, formar parte de la comunidad de la Asociación  de Enfermería Pediátrica Argentina les permitirá establecer conexiones duraderas y acceder a descuentos y beneficios especiales.</h2>
        </div>

        <div className="eventoCard">
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo" >
                        <img src={imagen1} alt="imagen de evento" style={{ width: '100%', height: '180px'}} />
                    </div>
                    <div className="type">EVENTO</div>
                    <div className="name">III Encuentro de Neonatología</div>
                    <div className="date">22 de marzo</div>
                    <div className="time">10hs.</div>
                   
                </div>
            </div>
            <div className="evento">
                <div className="details">
                    <div className="imagenInfo" >
                        <img className="imge"src={imagen2} alt="imagen de anuncio" style={{ width: '100%', height: '180px'}}/>
                    </div>
                    <div className="type">ANUNCIO</div>
                    <div className="name">III Encuentro Multidisciplinario de Enfermería</div>
                    <div className="date">22 de Noviembre</div>
                    <div className="time">Jornada Anual</div>
                    
                   
                </div>
                
            </div>

                     <div className="calendario" >
                        <img className="calendar"src={imagen3} alt="imagen de anuncio" style={{ width: '90%', height: '350px', marginLeft: '70px', marginTop:'20px'}}/>
                     </div>


        </div>
    </div>
);

export default Eventos;
