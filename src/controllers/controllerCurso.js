import { db, doc, getDoc, getDocs, addDoc , collection } from "../firebase";

export async function agregarCurso(dati) {
    const newCourseRef = await addDoc(collection(db, "cursos"), dati);
    const cursoID = newCourseRef.id;
    return cursoID;
}

export async function getAllCursos() {
    // Use the getDocs function to retrieve all documents from the "cursos" collection
    const cursosSnapshot = await getDocs(collection(db, "cursos"));

    // Extract data from each document in the snapshot
    const cursos = [];
    cursosSnapshot.forEach((doc) => {
        // doc.data() is the data of the document
        const cursoData = doc.data();

        // Add the data to the cursos array
        cursos.push({
            id: doc.id,
            ...cursoData,
        });
    });

    // Return the array of cursos
    return cursos;
}
export async function getCurso(cursoId) {
    const userDocRef = doc(db, "cursos", cursoId);
    try {
        const userDoc = await getDoc(userDocRef);
        console.log("Document data:", userDoc.data());
        if (!userDoc.exists()) {
            throw new Error("El documento del curso no existe!");
        }
        return userDoc.data();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

