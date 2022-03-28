// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import app from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkjIyDfwsCr2s9yG0hgHSKc_4ZQvwAVYw",
  authDomain: "fyp-otp-d99a9.firebaseapp.com",
  projectId: "fyp-otp-d99a9",
  storageBucket: "fyp-otp-d99a9.appspot.com",
  messagingSenderId: "703495611008",
  appId: "1:703495611008:web:58334efaeabe44a4017c65",
  measurementId: "G-FX62HFP6XN"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;