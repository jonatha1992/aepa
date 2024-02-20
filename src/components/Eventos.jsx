import React from "react";
import "../css/eventos.css";



const Eventos = () => (



  <div className="eventos">
    
      <div className="ecol-md-1 text-start">
        <h1>EVENTOS Y ANUNCIOS</h1>
        <h2>Próximos inicios</h2>
         <div className="btn-opcion">
          <button>mas info</button>
          <button>mas info</button>
          <button>mas info</button>
          
          </div>
          
          
      </div>

    <div className="eventoCard">
     <div className="evento">
     
      <div className="details">
        <div className="type">EVENTO</div>
        <div className="name">III Encuentro de Neonatología</div>
        <div className="date">22 de marzo</div>
        <div className="time">10hs.</div>
        <div><button>MAS INFORMACION</button></div>
      
      
      </div>
    </div>
    <div className="evento">
   
      <div className="details">
        <div className="type">ANUNCIO</div>
        <div className="name">III Encuentro Multidisciplinario de Enfermería</div>
        <div className="date">22 de Noviembre</div>
        <div className="time">Jornada Anual</div>
        <div><button>MAS INFORMACION</button></div>
      </div>
    </div>
    </div>
    
  </div>

     



);

export default Eventos;