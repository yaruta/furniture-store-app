import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

/**
 * Creates a new user with the provided email and password using Firebase Authentication.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 * @returns {Promise<import("firebase/auth").UserCredential>} - A promise that resolves with the user credentials.
 */
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Signs in a user with the provided email and password using Firebase Authentication.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 * @returns {Promise<import("firebase/auth").UserCredential>} - A promise that resolves with the user credentials.
 */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Signs out the currently authenticated user.
 * @returns {Promise<void>} - A promise that resolves when the sign-out is complete.
 */
export const doSignOut = () => {
  return auth.signOut();
};
