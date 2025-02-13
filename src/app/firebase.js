// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcEfF0nxDwRdltcxxW3y27_W38x2xba0",
  authDomain: "nextjs-firebase-project-49c75.firebaseapp.com",
  projectId: "nextjs-firebase-project-49c75",
  storageBucket: "nextjs-firebase-project-49c75.firebasestorage.app",
  messagingSenderId: "1089693465754",
  appId: "1:1089693465754:web:32db6df7403f0c5ae5b323",
  measurementId: "G-REDHH74ETL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);