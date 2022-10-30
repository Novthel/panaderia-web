// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXk-dpDDJJzAxxwwM0ComTP69rzgHFY1w",
  authDomain: "panaderia-web.firebaseapp.com",
  projectId: "panaderia-web",
  storageBucket: "panaderia-web.appspot.com",
  messagingSenderId: "711454574136",
  appId: "1:711454574136:web:a48e966f8b31b467fe48cd"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);