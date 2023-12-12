import "./App.css";
import Menu from "./components/menu.jsx";
import { Route, Routes } from "react-router-dom";
import SubMenu from "./components/SubMenu";
import FormAltaCurso from "./components/FormAltaCurso";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/cursos" element={<SubMenu />} />
        {/* <Route exact path="/cursos/agregar" component={AgregarCurso} />
        <Route exact path="/cursos/editar/:id" component={EditarCurso} />
        <Route exact path="/cursos/:id" component={DetallesCurso} /> */}
        <Route path="/eventos" element={<SubMenu />} />
        <Route path="/contenido" element={<SubMenu />} />
        <Route path="/cursos/alta" element={<FormAltaCurso />} />
      </Routes>
    </>
  );
}

export default App;
