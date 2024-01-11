import React from "react";
import PropTypes from "prop-types";
import "../css/curso.css";
function Curso({ imageSource, title, text, url }) {
  return (
    <div className="cardF text-center animate__animated animate__fadeInUp">
      <div className="container-img-card">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <div className="container-button-next">
          <a
            href={url ? url : "#!"}
            target="_blank"
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
          >
            Go to {title}
          </a>
        </div>
      </div>
    </div>
  );
}
Curso.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};

export default Curso;
