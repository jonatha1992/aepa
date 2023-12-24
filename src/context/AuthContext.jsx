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
    
    const [User, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);
    const signup = async (email, password) => {
       const currentUser =  await createUserWithEmailAndPassword(auth, email, password);
       console.log("usuario creado: ", currentUser); 
    //    sendEmailVerification(currentUser).then(() => {
    //        console.log("verificacion de correo enviado");
    //    });
       
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);
    

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });
        return () => {};
    }, []);

    return (
        <authContext.Provider value={{ signup, login, logout, User , Loading }}>
            {children}
        </authContext.Provider>
    );
}
