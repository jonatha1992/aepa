import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import {
    Nosotros,
    CursosPage,
    Talleres,
    Socios,
    Login,
    Register,
    Dashbord,
    AltaContenido,
    Anuncio,
    Registro,
} from "./pages";

import Layout from "./pages/Layout";
import DashbordAlumnos from "./components/DashbordAlumnos";
import AltaCurso from "./components/FormAltaCurso";
import MisCursos from "./components/MisCursos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute.jsx";
import { useAuth } from "../src/context/AuthContext";
import Home from "./components/Home";
import UnidadesCursos from "./components/UnidadesCursos";
import Home2 from "./components/Home2";
import Pay from "./components/Pay";
import ListaCursos from "./components/ListaCursos";
import DashbordAlumnosLayout from "./pages/DashbordAlumnosLayout";

function App() {
    const { logout, User, setuUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        setuUser(null);
        navigate("/login");
    };

    return (
        <Layout>
            {/* <div className="container" style={{ marginTop: "220px", color: "white" }}> */}
            <Routes>
                <Route index element={<Home2 />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/cursos" element={<CursosPage />} />
                {/* <Route path="/talleres" element={<Talleres />} /> */}
                {/* <Route path="/socios" element={<Socios />} /> */}
                <Route path="/Dashbord" element={<Dashbord />} />

                <Route path="/registro" element={<Registro />} />
                <Route path="/listacurso" element={<ListaCursos />} />

                <Route element={<ProtectedRoute isAllowed={!!User} />}>
                    <Route path="/admin" element={<AltaContenido />} />
                    <Route
                        path="/Alumnos"
                        element={<DashbordAlumnosLayout />}
                    />
                    <Route
                        path="/unidades/:cursotitle/:cursoid"
                        element={<UnidadesCursos />}
                    />
                    <Route path="/miscursos" element={<MisCursos />} />
                    <Route path="/pay" element={<Pay />} />
                </Route>
            </Routes>
            {/* </div> */}
            {/* <div className=" bg-info">{<Cursos />}</div> */}
        </Layout>
    );
}
export default App;
