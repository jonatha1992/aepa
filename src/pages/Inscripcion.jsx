import React, { useState, useEffect } from "react";
import "../css/Inscripcion.css";
import { useParams, useNavigate } from "react-router-dom";
import { getCurso } from "../controllers/controllerCurso";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { Modal, Backdrop, CircularProgress } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Inscripcion() {
  const { User } = useAuth();
  const { cursoid } = useParams();
  const [curso, setCurso] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Cambiado a useNavigate

  initMercadoPago("APP_USR-5a8b3fdb-e53a-40e2-82be-8f3c3e750fcc", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      if (!User || !User.uid) {
        console.log(
          "El usuario no está autenticado. No se creará la preferencia."
        );
        navigate(`/login?from=/inscripcion/${cursoid}`);
        return;
      }
      setLoading(true);
      const response = await axios.post(
        "https://us-central1-aepa-86ed6.cloudfunctions.net/app/create_preference",
        {
          description: curso.title,
          title: "AEPA",
          price: curso.price,
          quantity: 1,
          cursoid: cursoid,
          uid: User.uid,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const cursoData = await getCurso(cursoid);
        setCurso(cursoData);
      } catch (error) {
        console.error("Error al obtener detalles del curso", error);
      }
    };

    if (cursoid) {
      fetchCurso();
    }
  }, [cursoid]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cursoid]);

  if (!curso) {
    return <p>Cargando curso...</p>;
  }

  const customization = {
    visual: {
      buttonBackground: "black",
      buttonHeight: "68px",
    },
  };

  return (
    <div className="fondo-panta" style={{}}>
      <div className="header-inscripcion">
        <div className="info-inscripcion" style={{ padding: "1.5rem" }}>
          <h2>{curso.title}</h2>
          <h3>${curso.price} ARS</h3>
          <button
            className="boton-inscripcion"
            onClick={handleBuy}
            disabled={loading}
          >
            Inscribirme
          </button>
        </div>
        <div className="contenedor-imagen-curso" style={{ padding: "1rem" }}>
          <img src={curso.image} alt="" />
        </div>
      </div>

      <Modal
        open={loading}
        BackdropComponent={Backdrop}
        onClose={() => setLoading(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Modal>

      {preferenceId && (
        <Modal
          open={!loading}
          onClose={() => setPreferenceId(null)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              padding: "20px",
              background: "#fff",
              borderRadius: "8px",
            }}
          >
            {/* Resumen de la operación */}
            <h3>Confirmacion</h3>
            <p>Curso: {curso.title}</p>
            <p>Precio: {curso.price}</p>

            {/* Componente Wallet */}
            <div style={{ marginTop: "20px" }}>
              <Wallet
                initialization={{ preferenceId }}
                customization={customization}
              />
            </div>
          </div>
        </Modal>
      )}

      <div className="body-inscripcion">
        <p>{curso.description}</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <h2 style={{}}>¿A quién va dirigido este curso?</h2>
        <hr />
        <div>{curso.targetAudience}</div>
        <h2 style={{}}>¿Por qué elegir este curso?</h2>
        <hr />
        <div>{curso.objectives}</div>
      </div>
    </div>
  );
}
