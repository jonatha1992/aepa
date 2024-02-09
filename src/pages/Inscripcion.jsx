import React, { useState, useEffect } from "react";
import "../css/Inscripcion.css";
import imagenprueba from "../assets/farmaco.jpg";
import { useParams } from "react-router-dom";
import { getCurso } from "../controllers/controllerCurso";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

export default function Inscripcion() {
  const { cursoid } = useParams();
  const [curso, setCurso] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("APP_USR-5a8b3fdb-e53a-40e2-82be-8f3c3e750fcc");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-aepa-86ed6.cloudfunctions.net/app/create_preference",
        {
          description: curso.title,
          title: "AEPA",
          price: curso.price,
          quantity: 1,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    // Llamada a la función para obtener detalles del curso
    const fetchCurso = async () => {
      try {
        const cursoData = await getCurso(cursoid);
        setCurso(cursoData);
      } catch (error) {
        console.error("Error al obtener detalles del curso", error);
      }
    };

    // Llamada a la función solo si hay un ID válido
    if (cursoid) {
      fetchCurso();
    }
  }, [cursoid]);

  if (!curso) {
    // Puedes mostrar un indicador de carga aquí
    return <p>Cargando curso...</p>;
  }
  return (
    <div
      className="fondo-panta"
      style={{ paddingTop: "80px", textAlign: "start", paddingBottom: "80px" }}
    >
      <div className="header-inscripcion">
        <div className="info-inscripcion" style={{ padding: "1.5rem" }}>
          <h2>{curso.title}</h2>
          <h3>{curso.price}</h3>
          <button onClick={handleBuy}>Comprar Curso</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
        <div className="contenedor-imagen-curso" style={{ padding: "1rem" }}>
          <img src={curso.image} alt="" />
        </div>
      </div>
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
        <h2
          style={{
            paddingTop: "3rem",
            fontWeight: "900",
          }}
        >
          ¿A quién va dirigido este curso?
        </h2>
        <hr />
        <div>{curso.targetAudience}</div>
        <h2
          style={{
            paddingTop: "3rem",
            fontWeight: "900",
          }}
        >
          ¿Por qué elegir este curso?
        </h2>
        <hr />
        <div>{curso.objectives}</div>
      </div>
    </div>
  );
}
