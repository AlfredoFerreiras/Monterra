// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq4MeHYPMwMcIwggfBZXYUkuGFUHTYkoA",
  authDomain: "monterra-44ae5.firebaseapp.com",
  projectId: "monterra-44ae5",
  storageBucket: "monterra-44ae5.appspot.com",
  messagingSenderId: "1063156122579",
  appId: "1:1063156122579:web:84d43adf008be68f1f6526",
  measurementId: "G-T4F8ECY038",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
