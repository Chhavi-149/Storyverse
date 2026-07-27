import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profileSnap = await getDoc(doc(db, "users", firebaseUser.uid));
        const profileData = profileSnap.exists() ? profileSnap.data() : {};

        setCurrentUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          username: profileData.username || firebaseUser.displayName || "",
          photo: profileData.photo || firebaseUser.photoURL || "",
          genres: profileData.genres || [],
        });
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async ({ username, email, photo, password, genres }) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = credential.user;

    await updateProfile(firebaseUser, { displayName: username });

    const profileData = { username, email, photo: photo || "", genres: genres || [] };
    await setDoc(doc(db, "users", firebaseUser.uid), profileData);

    const newUser = { uid: firebaseUser.uid, ...profileData };
    setCurrentUser(newUser);
    return newUser;
  };

  const login = async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = credential.user;

    const profileSnap = await getDoc(doc(db, "users", firebaseUser.uid));
    const profileData = profileSnap.exists() ? profileSnap.data() : {};

    const user = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      username: profileData.username || "",
      photo: profileData.photo || "",
      genres: profileData.genres || [],
    };
    setCurrentUser(user);
    return user;
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout, authLoading }}>
      {!authLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}