// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd99SGMkMj68LO3IKwY5X9MGRO31W9c34",
  authDomain: "doctors-note-b40be.firebaseapp.com",
  projectId: "doctors-note-b40be",
  storageBucket: "doctors-note-b40be.firebasestorage.app",
  messagingSenderId: "289350897691",
  appId: "1:289350897691:web:59fecad62c03efc9d968be",
  measurementId: "G-JTT9F887XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
