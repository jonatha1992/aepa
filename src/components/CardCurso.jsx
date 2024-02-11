import React from "react";
import PropTypes from "prop-types";
import "../css/cursoCard.css";
import { Link } from "react-router-dom";

function CardCurso({ Curso }) {
    return (
        <div className="curso-card">
            <div>
                <h3 className="curso-title">{Curso.title}</h3>
                <h4 className="curso-price">{Curso.price}</h4>
            </div>
            <div className="curso-card-body">
                <p className="curso-author">
                    <strong>Autor:</strong> {Curso.author}
                </p>
                <p className="curso-duration">
                    <strong>Duración:</strong> {Curso.duration}
                </p>
                <p className="curso-start">
                    <strong>Inicio:</strong> {Curso.start}
                </p>
                <Link to="/inscripcion/poxSpo7snZxVQqEEemL4" className="curso-btn">
                    VER MÁS
                </Link>
            </div>
        </div>
    );
}

CardCurso.propTypes = {
    Curso: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.string,
        duration: PropTypes.string,
        start: PropTypes.string,
    }).isRequired,
};

export default CardCurso;
