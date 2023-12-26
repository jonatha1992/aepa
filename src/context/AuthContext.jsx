import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "../firebase";
const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No auth context");
  return context;
};

export function AutoProvider({ children }) {
<<<<<<< HEAD
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(false);
  const signup = async (email, password) => {
    const currentUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("usuario creado: ", currentUser);
    //    sendEmailVerification(currentUser).then(() => {
    //        console.log("verificacion de correo enviado");
    //    });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);
=======
    const [User, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);
    const signup = async (email, password) => {
        const credential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        // Enviar correo de verificación al usuario actual
         await sendEmailVerification(credential.user);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);
>>>>>>> 954b99b53285f1784e35c3fe9bb6d8d349cb5078

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {};
  }, []);

<<<<<<< HEAD
  return (
    <authContext.Provider value={{ signup, login, logout, User, Loading }}>
      {children}
    </authContext.Provider>
  );
=======
    return (
        <authContext.Provider value={{ signup, login, logout, User, Loading }}>
            {children}
        </authContext.Provider>
    );
>>>>>>> 954b99b53285f1784e35c3fe9bb6d8d349cb5078
}
