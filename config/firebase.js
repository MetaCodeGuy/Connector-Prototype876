// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF4XW4bJVtojqldignpsRUjESGvtNxQ6k",
  authDomain: "connector-proto.firebaseapp.com",
  projectId: "connector-proto",
  storageBucket: "connector-proto.appspot.com",
  messagingSenderId: "354911983920",
  appId: "1:354911983920:web:27fd36f695b121ee3150f5",
  measurementId: "G-WNWMYY8RST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()