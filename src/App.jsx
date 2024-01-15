import "./css/App.css";
import Menu from "./components/menu.jsx";
import { Route, Routes } from "react-router-dom";
import Nosotros from "../src/pages/Nosotros";
import CursosPage from "../src/pages/CursosPage";
import Talleres from "../src/pages/Talleres";
import Socios from "../src/pages/Socios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute.jsx";
import { useAuth } from "../src/context/AuthContext";
import Home from "./components/home";
import Header2 from "./components/Header2";
import Contact from "./pages/Contact.jsx";

function App() {
  const { logout, User, setuUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setuUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <Header2 />
        <div
          className="container"
          style={{ marginTop: "220px", color: "white" }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/socios" element={<Socios />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <div className=" bg-info">{<Cursos />}</div> */}
      </div>
    </>
  );
}
export default App;
