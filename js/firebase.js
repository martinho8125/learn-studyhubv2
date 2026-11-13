
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAx9QiU9JzH9V8kydhPdVxmO0nomX2Gt3k",
  authDomain: "learn-studyhub.firebaseapp.com",
  projectId: "learn-studyhub",
  storageBucket: "learn-studyhub.firebasestorage.app",
  messagingSenderId: "712767655878",
  appId: "1:712767655878:web:5c0df24777100876eeecc7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
