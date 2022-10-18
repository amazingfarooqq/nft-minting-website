// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5excpmqqht0uSJE44_hGZiXCXOe9kKlk",
  authDomain: "project-client-amazingfarooqq.firebaseapp.com",
  projectId: "project-client-amazingfarooqq",
  storageBucket: "project-client-amazingfarooqq.appspot.com",
  messagingSenderId: "8489265563",
  appId: "1:8489265563:web:331d2583d5af0b7439193e",
  measurementId: "G-496CDHVXB7"
};

// Initialize Firebase
let app;
if ( !getApps().length ) app = initializeApp( firebaseConfig )
export const database = getFirestore(app)