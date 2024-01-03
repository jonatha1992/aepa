import { db, doc, setDoc, updateDoc } from "../firebase";

export async function agregarUser(user) {
  try {
    console.log("user", user);
    const userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      rol: "user",
    };
    await setDoc(doc(db, "users", userData.uid), userData);
    console.log("Usuario agregado exitosamente al Firestore");
  } catch (error) {
    console.error("Error al agregar usuario a Firestore:", error);
    throw error;
  }
}

export async function updateUser(user) {
  try {
    console.log(user);
    const userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      rol: "user",
    };
    // Utiliza updateDoc para actualizar el documento existente
    await updateDoc(doc(db, "users", user.uid), userData);
    console.log("Usuario actualizado exitosamente en Firestore");
  } catch (error) {
    console.error("Error al actualizar usuario en Firestore:", error);
    throw error;
  }
}

/* export async function getRol(uid) {
  const docuRef = doc(db, `usuarios/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;
} */
