import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "messageindiv.firebaseapp.com",
  projectId: "messageindiv",
  storageBucket: "messageindiv.appspot.com",
  messagingSenderId: "404430987356",
  appId: "1:404430987356:web:482fee1e1338190a5fc699",
  measurementId: "G-35H2VKH7QT"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// const analytics = getAnalytics(app);