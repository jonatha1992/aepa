import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  deleteDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOWr6zYmEskzztDua6PFM_kdsoqSxyGQI",
  authDomain: "aepa-86ed6.firebaseapp.com",
  projectId: "aepa-86ed6",
  storageBucket: "aepa-86ed6.appspot.com",
  messagingSenderId: "8750998435",
  appId: "1:8750998435:web:326d612daa5a3693aaf016",
  measurementId: "G-8H87QNF96X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const auth = getAuth(app);

export async function agregarCurso(dati) {
  const newCourseRef = await addDoc(collection(db, "cursos"), dati);
  const cursoID = newCourseRef.id;
  return cursoID;
}

export async function uploadFiles(file) {
  const storageRef = ref(storage, crypto.randomUUID());
  const metadata = {
    contentType: "image/jpeg",
  };
  const meta = await uploadBytes(storageRef, file, metadata);
  console.log(meta);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function deletear(id, tabla) {
  const docRef = doc(db, `${tabla}`, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    let dato = docSnap.data();
    console.log("intentando eliminar la imagen:", dato.imagen);

    try {
      if (tabla == "cursos") {
        await deleteFile(dato.image);
        await deleteDoc(doc(db, `${tabla}`, id));
        return true;
        /* notyf.error("Pic eliminado de la galeria"); */
        /* administrarGaleria(); */
      }
    } catch (error) {
      console.log("algo paso", error);
      return false;
      /* notyf.error("ocurrio un error en la operacion"); */
    }
  }
}

async function deleteFile(url) {
  console.log("la url desde bd: ", url);
  // var fileRef = storage.refFromURL(url);
  var fileRef = ref(storage, url);

  try {
    await deleteObject(fileRef);
    console.log("Archivo eliminado exitosamente.");
  } catch (error) {
    console.log("Error al eliminar archivo:", error);
  }
}

const CursosInscriptos = async (uid) => {
  try {
    // Realiza la consulta a Firebase
    const miscursosRef = await collection(db, "inscripciones");
    const q = await query(miscursosRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    // Extrae los datos de la consulta y actualiza el estado
    const cursosArray = [];
    querySnapshot.forEach((doc) => {
      cursosArray.push({ inscripcionid: doc.id, ...doc.data() });
    });
    // Realiza una segunda consulta para obtener los detalles de cada curso
    const cursosDetallesArray = await Promise.all(
      cursosArray.map(async (curso) => {
        const cursoDetallesRef = doc(db, "cursos", curso.cursoid);
        const cursoDetallesSnapshot = await getDoc(cursoDetallesRef);
        return { ...curso, detalles: cursoDetallesSnapshot.data() };
      })
    );

    return cursosDetallesArray;
  } catch (error) {
    console.error("Error en la operación asincrónica:", error);
  }
};

export {
  CursosInscriptos,
  collection,
  db,
  getDoc,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDocs,
  query,
  where,
};
