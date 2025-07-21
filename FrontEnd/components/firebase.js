// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "csds.firebaseapp.com",
  projectId: "csds",
  storageBucket: "csds.appspot.com",
  messagingSenderId: "339260677444",
  appId: "1:339260677444:web:cace1e608198eacd7ecb11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
