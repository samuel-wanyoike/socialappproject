// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtlnK49cwsuAahGyzOR2hsLce0HOaOvAk",
  authDomain: "social-chat-project-c1d33.firebaseapp.com",
  projectId: "social-chat-project-c1d33",
  storageBucket: "social-chat-project-c1d33.appspot.com",
  messagingSenderId: "145383400603",
  appId: "1:145383400603:web:d39243e448a008896bd23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create variables for authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//create variable for database
export const db = getFirestore(app);