// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe_uRVOaQw0fQI6EWUhKYayP7CACdqX7U",
  authDomain: "authentication-f46ca.firebaseapp.com",
  projectId: "authentication-f46ca",
  storageBucket: "authentication-f46ca.appspot.com",
  messagingSenderId: "543496436397",
  appId: "1:543496436397:web:feaad623c2a9e0cef62424",
  measurementId: "G-DP1QSFV20M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
