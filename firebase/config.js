// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOqyemuh4zOA8GbAp9RAGz68l7njdqN4",
  authDomain: "react-pagina.firebaseapp.com",
  projectId: "react-pagina",
  storageBucket: "react-pagina.appspot.com",
  messagingSenderId: "484698890207",
  appId: "1:484698890207:web:b1b0493dcd81ed2ecf2e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const google = new GoogleAuthProvider()

