// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcZLyn4Q8wDY14C4o9VCPqvfjKIVOoYXY",
  authDomain: "basic-firebase-v9-auth.firebaseapp.com",
  projectId: "basic-firebase-v9-auth",
  storageBucket: "basic-firebase-v9-auth.appspot.com",
  messagingSenderId: "83209043111",
  appId: "1:83209043111:web:db95d646d8abb48025af82",
  measurementId: "G-MEF8GMY7P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app