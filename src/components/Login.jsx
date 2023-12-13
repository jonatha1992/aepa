// Importa las dependencias necesarias
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

//   // Historial para redirección
//   const history = useHistory();

  // Manejador de cambio de formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica de autenticación (aquí deberías hacer una llamada al backend)
    // // Supongamos que el backend devuelve un token después de la autenticación
    // const token = 'token_de_prueba';

    // Simplemente redirige a la página de inicio después de iniciar sesión
    // history.push('/inicio');

    // Puedes almacenar el token en el estado global o en una cookie/localStorage según tus necesidades
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
