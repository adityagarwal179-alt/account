// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC98YgPTU1vOQZNgAInkiyHMuLM1qrWGRg",
  authDomain: "account-c3590.firebaseapp.com",
  projectId: "account-c3590",
  storageBucket: "account-c3590.firebasestorage.app",
  messagingSenderId: "918196564512",
  appId: "1:918196564512:web:dd3e1f2eb4932aeee60245",
  measurementId: "G-TNY58Y0W1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);