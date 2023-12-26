import "../css/menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Menu() {
  const { User } = useAuth();

  return (
    <div className="container justify-content-center">
      <h2 className="text-center mb-4">Welcome {/* User.email */}</h2>
      <div className="grid-container">
        <div className="grid-item" style={{ backgroundColor: "green" }}>
          <Link to={"/cursos"}>Cursos</Link>
        </div>
        <div className="grid-item" style={{ backgroundColor: "yellow" }}>
          <Link to={"/eventos"}>Eventos</Link>
        </div>
        <div className="grid-item" style={{ backgroundColor: "red" }}>
          <Link to={"/contenido"}>Contenido</Link>
        </div>
      </div>
    </div>
  );
}
