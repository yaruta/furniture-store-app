import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY } from "../util/token";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "furniture-shop-md.firebaseapp.com",
  databaseURL: "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "furniture-shop-md",
  storageBucket: "furniture-shop-md.appspot.com",
  messagingSenderId: "184953965692",
  appId: "1:184953965692:web:e877f5f78ca20648f60df9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};