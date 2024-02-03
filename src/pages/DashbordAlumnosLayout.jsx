// Importa los componentes necesarios de react-responsive
import { useMediaQuery } from "react-responsive";
import DashbordAlumnos from "../components/DashbordAlumnos";
import DashbordAlumnosDesktop from "../components/DashbordAlumnosDesktop";

const DashbordAlumnosLayout = () => {
  // Define las condiciones para dispositivos móviles y de escritorio
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      {isMobile && <DashbordAlumnos />}
      {isDesktop && <DashbordAlumnosDesktop />}
    </div>
  );
};

export default DashbordAlumnosLayout;
