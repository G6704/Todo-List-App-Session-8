import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Maybe Impliment in the Future

// The Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS1yAn3CS74FYIySZz2ihkx87ay18UUyY",
  authDomain: "galih-todolist-2602227421.firebaseapp.com",
  projectId: "galih-todolist-2602227421",
  storageBucket: "galih-todolist-2602227421.appspot.com",
  messagingSenderId: "606132014283",
  appId: "1:606132014283:web:d688f9587cc0b168169f4e",
  measurementId: "G-WQLVB2P0KE" // IDK Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore (Future Implementation)
export const db = getFirestore(app);