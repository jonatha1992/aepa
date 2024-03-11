import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "../firebase";
const authContext = createContext();
import { getUser } from "../controllers/controllerUser";

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No auth context");
  return context;
};

export function AutoProvider({ children }) {
  const [User, setUser] = useState(null);
  const signup = async (email, password) => {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(credential);
    await sendEmailVerification(credential.user);
    return credential;
  };

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        console.log("current", currentUser);
        const userResult = await getUser(currentUser.uid);
        setUser(userResult);
      }
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        setUser,
        User,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
