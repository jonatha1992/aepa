import "./css/App.css";
import Menu from "./components/menu.jsx";
import { Route, Routes } from "react-router-dom";
import SubMenu from "./components/SubMenu";
import FormAltaCurso from "./components/FormAltaCurso";
import ListaCursos from "./components/ListaCursos";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute.jsx";
import { useAuth } from "../src/context/AuthContext";
import Home from "./components/home";
import Header from "./components/Header";

import Cursos from "../src/components/Cursos";

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
        <Header />
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/Home" element={<Home />} />
          <Route element={<ProtectedRoute isAllowed={!!User} />}>
            <Route path="/cursos" element={<SubMenu />} />
            <Route path="/eventos" element={<SubMenu />} />
            <Route path="/contenido" element={<SubMenu />} />
            <Route path="/cursos/alta" element={<FormAltaCurso />} />
            <Route path="/cursos/edit" element={<ListaCursos />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className=" bg-info">{<Cursos />}</div>
      </div>
    </>
  );
}
export default App;
