import { db, doc, getDoc, getDocs, addDoc, collection } from "../firebase";

export async function agregarCurso(dati) {
  const newCourseRef = await addDoc(collection(db, "cursos"), dati);
  const cursoID = newCourseRef.id;
  return cursoID;
}

export async function getAllCursos() {
  // Use the getDocs function to retrieve all documents from the "cursos" collection
  const cursosSnapshot = await getDocs(collection(db, "cursos"));
  const cursos = cursosSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

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

export async function getModulos(cursoid) {
  const cursoDocRef = doc(db, "cursos", cursoid);

  try {
    const cursoSnapshot = await getDoc(cursoDocRef);

    if (cursoSnapshot.exists()) {
      const modulosCollectionRef = collection(cursoDocRef, "Modulos");
      const modulosSnapshot = await getDocs(modulosCollectionRef);

      const unidades = await Promise.all(
        modulosSnapshot.docs.map(async (moduloDoc) => {
          const unidadData = {
            id: moduloDoc.id,
            ...moduloDoc.data(),
          };

          // Obtener los ítems de la subcolección "items" dentro de cada unidad
          const itemsCollectionRef = collection(moduloDoc.ref, "items");
          const itemsSnapshot = await getDocs(itemsCollectionRef);

          const items = itemsSnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data(),
          }));

          // Agregar la lista de ítems a la información de la unidad
          unidadData.items = items;

          return unidadData;
        })
      );

      return unidades;
    } else {
      console.error("No se encontró el curso con el ID proporcionado.");
    }
  } catch (error) {
    console.error("Error al obtener la información del curso:", error);
  }
}
