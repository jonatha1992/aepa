import "./css/App.css";
import Menu from "./components/menu.jsx";
import { Route, Routes } from "react-router-dom";
import SubMenu from "./components/SubMenu";
import FormAltaCurso from "./components/FormAltaCurso";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { AutoProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
    return (
        <>
            <AutoProvider>
                <Routes>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Menu />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/cursos" element={<SubMenu />} />
                    <Route path="/eventos" element={<SubMenu />} />
                    <Route path="/contenido" element={<SubMenu />} />
                    {/* <Route exact path="/cursos/agregar" component={AgregarCurso} />
        <Route exact path="/cursos/editar/:id" component={EditarCurso} />
        <Route exact path="/cursos/:id" component={DetallesCurso} /> */}
          <Route path="/eventos" element={<SubMenu />} />
          <Route path="/contenido" element={<SubMenu />} />
          <Route path="/cursos/alta" element={<FormAltaCurso />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AutoProvider>
    </>
  );
}

export default App;
