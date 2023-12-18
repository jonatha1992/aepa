import { createContext, useContext, useEffect , useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
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
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
        });
        return () => {};
    }, []);

    return (
        <authContext.Provider value={{ signup, login , User }}>
            {children}
        </authContext.Provider>
    );
}
