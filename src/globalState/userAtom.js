import { atom } from "jotai";

export const userAtom = atom(null); // Holds user data or null if not logged in
export const authErrorAtom = atom(""); // Holds the latest authentication error message
