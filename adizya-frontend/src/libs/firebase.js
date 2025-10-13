// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIJW_NuXLYm5YdFedASlanLHic-PX3r4",
  authDomain: "adizya-30668.firebaseapp.com",
  projectId: "adizya-30668",
  storageBucket: "adizya-30668.firebasestorage.app",
  messagingSenderId: "717318474505",
  appId: "1:717318474505:web:fc183eca84e64b362b21d8",
  measurementId: "G-F90YR51JJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);