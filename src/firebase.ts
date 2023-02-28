// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwl1Y0zUABhXrjA1l5CXt6sHhwFhbEnhc",
  authDomain: "realtor-clone-react-9e54c.firebaseapp.com",
  projectId: "realtor-clone-react-9e54c",
  storageBucket: "realtor-clone-react-9e54c.appspot.com",
  messagingSenderId: "406378416628",
  appId: "1:406378416628:web:76b6368f8cbf42586e11a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
