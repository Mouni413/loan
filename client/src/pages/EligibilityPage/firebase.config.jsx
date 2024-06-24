// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN7kjsZW06mk0n-gG_yJbS8p9dckshIDM",
  authDomain: "mobileotp-8a205.firebaseapp.com",
  projectId: "mobileotp-8a205",
  storageBucket: "mobileotp-8a205.appspot.com",
  messagingSenderId: "888343399978",
  appId: "1:888343399978:web:8ef4eb7fadb759cd13bd53",
  measurementId: "G-L5FPFZC685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

