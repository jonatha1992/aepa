// Importa las dependencias necesarias
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  // Manejador de envío del formulario
  const SigiIn = async (e) => {
    e.preventDefault();
    try {
      // Iniciar sesión con correo y contraseña utilizando Firebase auth
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      // Puedes acceder al usuario autenticado con userCredential.user
      console.log("Usuario autenticado:", userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };


  const Register = async (e) => {
    e.preventDefault();
    try {
      // Iniciar sesión con correo y contraseña utilizando Firebase auth
      const userCredential = await auth.crea(
        email,
        password
      );
      // Puedes acceder al usuario autenticado con userCredential.user
      console.log("Usuario autenticado:", userCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  return (
    <div className="sign-in-container">
      <form className="mx-auto col-lg-10">
        <h1 className="text-center mb-4">Log Into your Account</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button  onClick={(e) => SigiIn(e)} className="btn btn-primary btn-lg col-5 me-2">Log In</button>
        <button onClick={(e) => Register(e)} className="btn btn-primary btn-lg col-5">Register</button>
      </form>
    </div>
  );
};

export default Login;
