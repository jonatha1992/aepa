import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AutoProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <AutoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </HashRouter> */}
    </AutoProvider>
  </React.StrictMode>
);
