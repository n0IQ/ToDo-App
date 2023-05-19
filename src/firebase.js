// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  REACT_APP_API_KEY,
  REACT_APP_APP_ID,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
} from "./env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
