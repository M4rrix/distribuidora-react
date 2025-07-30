import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzuSIXbqoiDg7RB8I9WV--UWcylNsGoqk",
  authDomain: "distribuidora-b9c79.firebaseapp.com",
  projectId: "distribuidora-b9c79",
  storageBucket: "distribuidora-b9c79.firebasestorage.app",
  messagingSenderId: "966255229272",
  appId: "1:966255229272:web:3944c6cfaf6f5937434d2d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);