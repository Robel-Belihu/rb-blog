// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUYm8QLxlpcdfAuISmy8LSGoHKqwyMAc",
  authDomain: "rb-blogger-63a97.firebaseapp.com",
  projectId: "rb-blogger-63a97",
  storageBucket: "rb-blogger-63a97.appspot.com",
  messagingSenderId: "741439099221",
  appId: "1:741439099221:web:e36d6bbb1f5f36c785dfdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
