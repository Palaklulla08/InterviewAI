
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewai-ce549.firebaseapp.com",
  projectId: "interviewai-ce549",
  storageBucket: "interviewai-ce549.firebasestorage.app",
  messagingSenderId: "85618485878",
  appId: "1:85618485878:web:3929dc451840d76e7f8d57"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);