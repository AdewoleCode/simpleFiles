// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVj-tOOjNuDT2q1n2dTaFB1G627P5lMJ8",
  authDomain: "brit-image.firebaseapp.com",
  projectId: "brit-image",
  storageBucket: "brit-image.appspot.com",
  messagingSenderId: "13433749642",
  appId: "1:13433749642:web:0cb6f401bd2a93749bad73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);