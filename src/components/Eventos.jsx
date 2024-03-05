import React from "react";
import Slider from "react-slick";
import "../css/eventos.css";
import imagen1 from "../assets/neoevent.jpg";
import imagen2 from "../assets/enfermera_servicios.jpg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importng all icons for simplicity
import { FiMail } from "react-icons/fi"; //

const Eventos = () => (
  <div className="evento">
    <div className="container">
      <EventosSlider />
    </div>
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
      <div
        className="card-event-image"
        style={{ ...fondoStyle, backgroundImage: `url(${imagen})` }}
      >
        <h3 className="card-evento-titulo">{titulo}</h3>
        <div className="d-flex justify-content-end" style={{ width: "100%" }}>
          <p className="card-evento-fecha">{fecha}</p>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center"></div>
      <div className="d-flex " style={{ flexGrow: "1", textAlign: "center" }}>
        <p className="card-evento-descripcion  ">{descripcion}</p>
      </div>
      <div className="d-flex justify-content-center  ">
        <a
          href="https://www.facebook.com/profile.php?id=61551020911888"
          style={{ color: "#516269" }}
        >
          <FaWhatsapp size={25} className="me-3 " />
        </a>
        <a href="mailto:secretaria@aepa.com.ar">
          <FiMail size={25} className="me-3 " style={{ color: "#516269" }} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61551020911888">
          <FaFacebook
            size={25}
            className="me-3 "
            style={{ color: "#516269" }}
          />
        </a>
        <a href="https://www.instagram.com/aepa318/">
          <FaInstagram
            size={25}
            className="me-3 "
            style={{ color: "#516269" }}
          />
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
    dots: false,
    autoplay: false,
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
  ];

  return (
    <div className="container">
      <div
        className="row gy-5"
        style={{ flexWrap: "wrap", "--bs-gutter-x": "5rem" }}
      >
        <div className="col-12 col-md-6">
          <div className="evento-encabezado">
            <h1 className="cursos-titulo">EVENTOS</h1>
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
        <div className="col-12 col-md-6">
          <div className="evento-encabezado">
            <h1 className="cursos-titulo" style={{ width: "unset" }}>
              EVENTOS
            </h1>
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
      </div>
    </div>
  );
};

export default Eventos;
