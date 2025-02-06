import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY } from "../util/token";

// Firebase configuration object containing the project details
const firebaseConfig = {
  apiKey: API_KEY, // API key stored securely in a separate file
  authDomain: "furniture-shop-md.firebaseapp.com",
  databaseURL: "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "furniture-shop-md",
  storageBucket: "furniture-shop-md.appspot.com",
  messagingSenderId: "184953965692",
  appId: "1:184953965692:web:e877f5f78ca20648f60df9"
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication service
const auth = getAuth(app);

// Export the initialized Firebase app and authentication instance for use in other files
export {app, auth};