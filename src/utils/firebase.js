// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKpOnat6vtv0akeCwR-sadobPIdnmhldQ",
  authDomain: "netflixgpt-4138d.firebaseapp.com",
  projectId: "netflixgpt-4138d",
  storageBucket: "netflixgpt-4138d.firebasestorage.app",
  messagingSenderId: "575805215843",
  appId: "1:575805215843:web:98254c7a6af3e2f9bad456",
  measurementId: "G-ENPZC5WERB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);