import React from "react";
import Slider from "react-slick";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/enfermera_servicios.jpg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importng all icons for simplicity
import { FiMail } from "react-icons/fi"; //
import Anuncios from "./Anuncios";

const Eventos = () => (
    <div className="evento">
        <EventosSlider />
    </div>
);

const divStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem", // Ajusta la altura según sea necesario
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff", // Cambia el color del texto según sea necesario
    textAlign: "center",
    flexDirection: "column",
};

const CardEvento = ({ titulo, fecha, imagen, descripcion, fondoStyle }) => (
    <>
        <div className="card-evento-anuncio">
            <div className="card-event-image" style={{ ...fondoStyle, backgroundImage: `url(${imagen})` }}>
                <h3 className="card-evento-titulo">{titulo}</h3>
                <div className="d-flex justify-content-end" style={{ width: "100%" }}>
                    <p className="card-evento-fecha">{fecha}</p>
                </div>
            </div>

            {/* <div className="d-flex flex-column justify-content-center"></div> */}
            <div
                className="d-flex flex-column justify-content-around"
                style={{ flexGrow: "1", textAlign: "center", maxHeight: "60%" }}
            >
                <div className="body-card-seccionanuncios">
                    <p className="card-evento-descripcion  " style={{}}>
                        {descripcion}
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-row pt-4">
                <a href="https://www.facebook.com/profile.php?id=61551020911888" style={{ color: "#516269" }}>
                    <FaWhatsapp size={25} className="me-3 " />
                </a>
                <a href="mailto:secretaria@aepa.com.ar">
                    <FiMail size={25} className="me-3 " style={{ color: "#516269" }} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61551020911888">
                    <FaFacebook size={25} className="me-3 " style={{ color: "#516269" }} />
                </a>
                <a href="https://www.instagram.com/aepa318/">
                    <FaInstagram size={25} className="me-3 " style={{ color: "#516269" }} />
                </a>
                <a className=" fw-bold me-3" href="https://www.tiktok.com/@aepa2523">
                    <svg
                        xmlns="http://www.w3.org/2500/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-tiktok   "
                        style={{ color: "#516269" }}
                        viewBox="0 0 16 16"
                    >
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                </a>
            </div>
        </div>
    </>
);

const EventosSlider = () => {
    const settings = {
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const eventos = [
        {
            titulo: "I Congreso de Enfermería",
            fecha: "14 de Junio Congreso Anual 2024",
            imagen: imagen1, // Asegúrate de tener la importación correcta para imagen1
            descripcion: `Primer Congreso de Enfermeros Sin Fronteras,
    El evento tendrá lugar en la Universidad Nacional de Lanús, ubicada en 
    Buenos Aires, Argentina. Bajo el lema "Unidos por la Salud, Compromisos 
    sin Fronteras, convocando a profesionales destacados, expertos y líderes comprometidos en 
    la formación de profesionales. No solo será un encuentro presencial, sino que 
    también abriremos nuestras puertas al mundo mediante la transmisión en línea 
    a través de streaming. Este enfoque innovador nos permitirá llegar a 
    importantes ciudades de todo el mundo, uniendo esfuerzos y conocimientos 
    para promover el cuidado de la salud a nivel global.`,
        },
        {
            titulo: "III Encuentro Multidisciplinario de Enfermería",
            fecha: "22 de Noviembre Jornada Anual",
            imagen: imagen2, // Asegúrate de tener la importación correcta para imagen2
            descripcion: `Unámonos para el tercer encuentro anual de Neonatología, donde los principales expertos discutirán los avances más recientes en el cuidado y tratamiento de neonatos. Este evento es una oportunidad imperdible para profesionales de la salud que buscan actualizarse sobre las prácticas más innovadoras en el campo.`,
        },
    ];

    return (
        <div className="container ">
            <div className="row gy-5" style={{ flexWrap: "wrap" }}>
                <div className="col-12 col-md-6">
                    <div className="evento-encabezado">
                        <h1 className="cursos-titulo mt-0">EVENTOS</h1>
                    </div>
                    <Slider {...settings}>
                        {eventos.map((evento, index) => (
                            <CardEvento
                                key={index}
                                titulo={evento.titulo}
                                fecha={evento.fecha}
                                imagen={evento.imagen}
                                descripcion={evento.descripcion}
                                fondoStyle={divStyle} // Pasa el estilo de fondo aquí
                            />
                        ))}
                    </Slider>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="evento-encabezado">
                        <h1 className="cursos-titulo mt-0">ANUNCIOS</h1>
                    </div>

                    <Anuncios />
                </div>
            </div>
        </div>
    );
};

export default Eventos;
