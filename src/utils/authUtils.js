// src/utils/authUtils.js
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSetAtom } from "jotai";
import { userAtom, authErrorAtom } from "../globalState/userAtom";

export const useAuth = () => {
  const setUser = useSetAtom(userAtom);
  const setAuthError = useSetAtom(authErrorAtom);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user); // Set the authenticated user
      setAuthError(""); // Reset any previous error messages
    } catch (error) {
      console.error("Login error:", error.message);
      setUser(null); // Ensure user state is cleared on error
      setAuthError(error.message); // Set the error message
    }
  };

  // Implement logout functionality similarly if needed

  return { login };
};
