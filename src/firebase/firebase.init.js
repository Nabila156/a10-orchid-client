// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTRs-5N4-Efazxa23U7h-MzV_GZ6DB6g",
  authDomain: "orchid-a10.firebaseapp.com",
  projectId: "orchid-a10",
  storageBucket: "orchid-a10.firebasestorage.app",
  messagingSenderId: "284018970907",
  appId: "1:284018970907:web:d298b1972107a0207243be",
  measurementId: "G-LEGC2DNK1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);