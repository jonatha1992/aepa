import React from "react";
import PropTypes from "prop-types";
import "../css/curso.css";
function Curso({ title, image, description }) {
  console.log(title, image, description);
  return (
    <div className="cardF text-center animate__animated animate__fadeInUp">
      <div className="container-img-card col-4">
        <div className="overflow">
          <img src={image} alt="a wallpaper" className="card-img-top" />
        </div>
      </div>
      <div className="card-body text-light col-8">
        <h4 className="card-title">{title}</h4>
        <div className="container-text">
          <p className="card-text text-secondary">{description}</p>
        </div>
        <div className="container-button-next">
          <button>INSCRIBIRME</button>
        </div>
      </div>
    </div>
  );
}

export default Curso;
