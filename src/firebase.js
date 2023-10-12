// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0tizCW6n-Jar00d8zJkR3m-eZ7DReMx8",
  authDomain: "react-app-46eec.firebaseapp.com",
  projectId: "react-app-46eec",
  storageBucket: "react-app-46eec.appspot.com",
  messagingSenderId: "61204918506",
  appId: "1:61204918506:web:36214033f370cbe4856793",
  measurementId: "G-QMRM2VJP99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create a GoogleAuthProvider instance
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
