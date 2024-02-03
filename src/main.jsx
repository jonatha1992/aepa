import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AutoProvider } from "./context/AuthContext.jsx";
import { AlumnosContextProvider } from "./context/AlumnoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <AutoProvider>
      <AlumnosContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlumnosContextProvider>
      {/* </HashRouter> */}
    </AutoProvider>
  </React.StrictMode>
);
