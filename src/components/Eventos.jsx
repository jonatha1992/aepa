import React from "react";
import Slider from "react-slick";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/enfermera_servicios.jpg";
const Eventos = () => (
    <div className="evento ">
        <div className="evento-encabezodo">
            <h1>EVENTOS</h1>
        </div>
        <div class="container event-section  ">
            <EventosSlider />
        </div>
    </div>
);

export default Eventos;

const CardEvento = ({ titulo, fecha, imagen, descripcion }) => (
    <div class="row mx-3">
        <div className=" col-12 col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="card-evento-titulo">{titulo}</h3>
            <p className="card-evento-descripcion">{descripcion}</p>
            <p className="card-evento-fecha">{fecha}</p>
        </div>
        <div class="col-12 col-lg-6 card-event-image">
            <img
                src={imagen}
                alt="imagen de evento"
                className="rounded "
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    </div>
);

const EventosSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Habilita la reproducción automática
        autoplaySpeed: 3000, // Cambia cada 3 segundos
        arrows: false, //
    };

    // Suponiendo que tienes una lista de eventos
    const eventos = [
        {
            titulo: "III Encuentro de Neonatología",
            fecha: "22 de marzo 10hs.",
            imagen: imagen1,
            descripcion:
                "Unámonos para el tercer encuentro anual de Neonatología, donde los principales expertos discutirán los avances más recientes en el cuidado y tratamiento de neonatos. Este evento es una oportunidad imperdible para profesionales de la salud que buscan actualizarse sobre las prácticas más innovadoras en el campo.",
        },
        {
            titulo: "III Encuentro Multidisciplinario de Enfermería",
            fecha: "22 de Noviembre Jornada Anual",
            imagen: imagen2,
            descripcion:
                "Unámonos para el tercer encuentro anual de Neonatología, donde los principales expertos discutirán los avances más recientes en el cuidado y tratamiento de neonatos. Este evento es una oportunidad imperdible para profesionales de la salud que buscan actualizarse sobre las prácticas más innovadoras en el campo.",
        },
        // Agrega más eventos según sea necesario
    ];

    return (
        <Slider {...settings}>
            {eventos.map((evento, index) => (
                <CardEvento
                    key={index}
                    titulo={evento.titulo}
                    fecha={evento.fecha}
                    imagen={evento.imagen}
                    descripcion={evento.descripcion}
                />
            ))}
        </Slider>
    );
};
