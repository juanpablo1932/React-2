// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMp9t6AgSP5j2BnYWdH2zH7pIxz8JCERI",
  authDomain: "ecomm-aerialdrone.firebaseapp.com",
  projectId: "ecomm-aerialdrone",
  storageBucket: "ecomm-aerialdrone.appspot.com",
  messagingSenderId: "408865871890",
  appId: "1:408865871890:web:51eeb743faac83030ba0cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
