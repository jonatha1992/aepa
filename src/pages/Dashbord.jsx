import React from "react";
import MenuDashbord from "../components/MenuDashbord";

const Dashbord = () => {
  // Obtener el ancho de la ventana
  const windowWidth = window.innerWidth;

  return (
    <div>
      {/* Operador ternario para mostrar diferentes componentes según el tamaño de la pantalla */}
      {windowWidth < 768 ? (
        <MenuDashbord />
      ) : (
        <div>
          <h1>Contenido para pantallas grandes</h1>
          <p>Otro contenido para pantallas grandes</p>
        </div>
      )}
    </div>
  );
};

export default Dashbord;
