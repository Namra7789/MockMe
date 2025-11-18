// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsg0dWFtpkQIKcz2rwmSVrfeYr3W5kfRY",
  authDomain: "mockme-13e57.firebaseapp.com",
  projectId: "mockme-13e57",
  storageBucket: "mockme-13e57.firebasestorage.app",
  messagingSenderId: "1090012039802",
  appId: "1:1090012039802:web:92ba9317242456e52349c3",
  measurementId: "G-CZ83FXRY2S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);