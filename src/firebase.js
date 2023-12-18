import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  doc,
  getDoc,
  setDoc,
  orderBy,
  limit,
  addDoc,
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

export const  auth = getAuth(app);

export async function agregarCurso(dati) {
  const newCourseRef = await addDoc(collection(db, "cursos"), dati);
  const cursoID = newCourseRef.id;
  return cursoID;
}


export async function uploadFiles(file) {
  const storageRef = ref(storage, crypto.randomUUID());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
