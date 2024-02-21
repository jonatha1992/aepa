import React from "react";
import "./Anuncio.css"; // Asegúrate de que el path al archivo CSS es correcto

export default function Anuncio() {
  return (
    <div className="container-fluid  p-5">
      <h2 className="text-center mb-4">EVENTOS Y ANUNCIOS</h2>
      <h4 className="text-center mb-4">PRÓXIMOS INICIOS</h4>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">III Encuentro de Neonatología</h5>
              <p className="card-text">22 de marzo 10hs.</p>
              <a href="#" className="btn btn-info w-100 mt-3">
                MÁS INFORMACIÓN
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                III Encuentro Multidisciplinario de Enfermería
              </h5>
              <p className="card-text">22 de Noviembre Jornada Anual</p>
              <a href="#" className="btn btn-info w-100 mt-3">
                MÁS INFORMACIÓN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
