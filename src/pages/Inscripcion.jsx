import React, { useState, useEffect, useContext } from "react";
import "../css/Inscripcion.css";
import { useParams, useNavigate } from "react-router-dom";
import { getCurso } from "../controllers/controllerCurso";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { Modal, Backdrop, CircularProgress } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { AlumnosContext } from "../context/AlumnoContext";
import AcordeonUnidades from "../components/AcordeonUnidades";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function Inscripcion() {
    const { User } = useAuth();
    const { cursoid } = useParams();
    const [curso, setCurso] = useState(null);
    const [preferenceId, setPreferenceId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cursoRepetido, setCursoRepetido] = useState(false);
    const { cursos } = useContext(AlumnosContext);
    const navigate = useNavigate(); // Cambiado a useNavigate

    initMercadoPago("APP_USR-5a8b3fdb-e53a-40e2-82be-8f3c3e750fcc", {
        locale: "es-AR",
    });

    const createPreference = async () => {
        try {
            if (!User || !User.uid) {
                console.log("El usuario no está autenticado. No se creará la preferencia.");
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
        const existe = cursos.some((item) => item.cursoid === cursoid);

        if (existe) {
            setCursoRepetido(true);
        } else {
            const id = await createPreference();
            if (id) {
                setPreferenceId(id);
            }
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

        /* const checkAndSetEstado = () => {
      const existe = cursos.some((item) => item.cursoid == cursoid);
      setCursoRepetido(existe);
    }; */

        if (cursoid) {
            fetchCurso();
            /* checkAndSetEstado(); */
        }
    }, [cursoid]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cursoid]);

    if (!curso) {
        return (
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        );
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
                <div className="d-flex flex-column">
                    <div className="info-inscripcion" style={{}}>
                        <h2>{curso.title}</h2>
                        <h3>${curso.price} ARS</h3>
                    </div>
                    {/* <button
                        className="boton-inscripcion"
                        onClick={handleBuy}
                        disabled={loading}
                    >
                        Inscribirme ahora🔽
                    </button> */}

                    <Button
                        className="d-inline-block align-baseline  fs-4 fw-bold  hover-primary mt-4 bg-gradient "
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        onClick={handleBuy}
                    >
                        Inscribirme Ahora🔽
                    </Button>
                </div>
                <div className="contenedor-imagen-curso" style={{ padding: "1rem" }}>
                    <img src={curso.imageUrl} alt="" />
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

            {preferenceId && !cursoRepetido && (
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
                            <Wallet initialization={{ preferenceId }} customization={customization} />
                        </div>
                    </div>
                </Modal>
            )}

            {cursoRepetido && (
                <Modal
                    open={!loading}
                    onClose={() => setCursoRepetido(false)}
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
                        <h3>¡Ya estás inscrito!</h3>
                        <p>Ya te encuentras inscrito en este curso.</p>
                        <button
                            onClick={() => {
                                navigate("/alumnos");
                                setCursoRepetido(false);
                            }}
                        >
                            Ir a Alumnos
                        </button>
                    </div>
                </Modal>
            )}

            <div className="body-inscripcion">
                <h2>Misión</h2>
                <hr />

                <p>{curso.description}</p>
                <h2>Objetivos</h2>
                <hr />
                <div>
                    <ul>
                        {curso.objetivos.map((objetivo, index) => (
                            <li key={index}>{objetivo}</li>
                        ))}
                    </ul>
                </div>
                <AcordeonUnidades cursoid={cursoid} />
                {/* <div>{curso.targetAudience}</div> */}
            </div>
        </div>
    );
}
