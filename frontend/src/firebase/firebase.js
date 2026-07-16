import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0zrazM6eCfo1zuB9X65IFVOPZiyUPc-Y",
  authDomain: "storyverse-58eed.firebaseapp.com",
  projectId: "storyverse-58eed",
  storageBucket: "storyverse-58eed.firebasestorage.app",
  messagingSenderId: "126288420636",
  appId: "1:126288420636:web:2c92acc0401f7b22e8a4d9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;