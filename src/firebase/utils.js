import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

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
const auth = getAuth();

export const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
}