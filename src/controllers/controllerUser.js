import { db, doc, getDoc, setDoc, updateDoc } from "../firebase";
import { getCountry, getState, convertFirebaseTimestampToDate } from "../security/Tools";
export async function agregarUser(user) {
    try {
        const userData = {
            uid: user.uid,
            rol: "user",
            nombre_completo: user.nombre_completo,
            DNI: user.DNI,
            fecha_nacimiento: user.fecha_nacimiento,
            pais: user.pais,
            provincia: user.provincia,
            localidad: user.localidad,
            codigo_postal: user.codigo_postal,
            calle: user.calle,
            numero: user.numero,
            dept: user.dept,
            piso: user.piso,
            telefono: user.telefono,
            email: user.email,
            nivel: user.nivel,
            institucion: user.institucion,
            puesto: user.puesto,
        };
        if (!userData.uid) {
            throw new Error("UID is required");
        }
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
        const resultado = convertFirebaseTimestampToDate(userDoc.data().fecha_nacimiento);
        userDoc.data().fecha_nacimiento = resultado;
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
