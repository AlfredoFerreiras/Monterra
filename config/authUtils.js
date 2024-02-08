// authUtils.js
import { auth, firestore } from "./config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const signUpUser = async (email, password, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User is created and signed in
    // Set the user's role in Firestore
    await setDoc(doc(firestore, "users", userCredential.user.uid), {
      role: role,
    });
    return { user: userCredential.user, role: role };
  } catch (error) {
    // Handle errors here
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User signed in
    // Get the user's role from Firestore
    const userDoc = await getDoc(
      doc(firestore, "users", userCredential.user.uid)
    );
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return { user: userCredential.user, role: userData.role };
    } else {
      throw new Error("User does not exist!");
    }
  } catch (error) {
    // Handle errors here
    throw error;
  }
};

export const getUserRole = async (uid) => {
  try {
    const userDoc = await getDoc(doc(firestore, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.role;
    } else {
      throw new Error("User does not exist!");
    }
  } catch (error) {
    // Handle errors here
    throw error;
  }
};
