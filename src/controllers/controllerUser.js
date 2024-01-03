import { db, doc, getDoc, setDoc, updateDoc } from "../firebase";

export async function agregarUser(user) {
    try {
        const userData = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            rol: "user",
            avatar: user.photoURL || "",
        };
        await setDoc(doc(db, "users", userData.uid), userData);
        console.log("Usuario agregado exitosamente al Firestore");
    } catch (error) {
        console.error("Error al agregar usuario a Firestore:", error);
        throw error;
    }
}

// export async function updateUser(user) {
//     try {
//         const userData = {
//             uid: user.uid,
//         };
//         await updateDoc(doc(db, "users", user.uid), userData);
//     } catch (error) {
//         console.error("Error al actualizar usuario en Firestore:", error);
//         throw error;
//     }
// }
export async function getUser(userId) {
    const userDocRef = doc(db, "users", userId);
    try {
        const userDoc = await getDoc(userDocRef);
        console.log("Document data:", userDoc.data());
        if (!userDoc.exists()) {
            throw new Error("El documento del usuario no existe!");
        }
        return userDoc.data();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
/* export async function getRol(uid) {
  const docuRef = doc(db, `usuarios/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;
} */
