import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
} from "firebase/auth";
import {
  doc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";



// ----------------------------
// SIGN UP
// ----------------------------

export async function signup(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", userCredential.user.uid), {
    uid: userCredential.user.uid,
    name,
    email,
    createdAt: new Date(),
  });

  return userCredential.user;
}


// ----------------------------
// LOGIN
// ----------------------------

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}


// ----------------------------
// LOGOUT
// ----------------------------

export async function logout() {
  await signOut(auth);
}


// ----------------------------
// RESET PASSWORD
// ----------------------------

export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error("You must be logged in to change your password.");

  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);
  await updatePassword(user, newPassword);
}