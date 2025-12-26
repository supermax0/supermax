// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KirsWgafKXPsQfFl3v6ssMaAb_zjTps",
  authDomain: "tasks-bce7f.firebaseapp.com",
  projectId: "tasks-bce7f",
  storageBucket: "tasks-bce7f.firebasestorage.app",
  messagingSenderId: "493499367071",
  appId: "1:493499367071:web:c667a4666f1e84d8b32caa",
  measurementId: "G-HR305C8QHR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firestore Database
export const db = getFirestore(app);
