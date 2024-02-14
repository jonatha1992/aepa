import React from "react";
import PropTypes from "prop-types";
import "../css/cursoCard.css";
import { Link } from "react-router-dom";

function CardCurso({ item }) {
    return (
        <div className="curso-card ">
            <div className="d-flex align-items-center  justify-content-evenly ">
                <h3 className=" curso-card-title">{item.title}</h3>
                <img className="curso-card-img" src={item.imageUrl} alt={item.title} />
            </div>
            <div className="curso-card-body">
                {/* <h4 className="curso-card-price">{Curso.price}</h4> */}
                <p className="curso-card-author">
                    <strong>Autor:</strong> {item.author}
                </p>
                <p className="curso-card-duration">
                    <strong>Duración:</strong> {item.duration}
                </p>
                <p className="curso-card-start">
                    <strong>Inicio:</strong> {item.start}
                </p>
                <p className="curso-card-start">
                    <strong>Carga horaria:</strong> {item.Workload}
                </p>
                <p className="curso-card-start">
                    <strong>Clases:</strong> {item.classes}
                </p>
                <Link to="/inscripcion/poxSpo7snZxVQqEEemL4" className="curso-btn">
                    VER MÁS
                </Link>
            </div>
        </div>
    );
}

/* CardCurso.propTypes = {
  Curso: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
    duration: PropTypes.string,
    start: PropTypes.string,
    Workload: PropTypes.string,
    classes: PropTypes.string,
  }).isRequired,
};
 */
export default CardCurso;
