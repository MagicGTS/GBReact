import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { apiKey } from "../firebase.pass.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "gb-react-13b12.firebaseapp.com",
    databaseURL: "https://gb-react-13b12-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-13b12",
    storageBucket: "gb-react-13b12.appspot.com",
    messagingSenderId: "608416399394",
    appId: "1:608416399394:web:aff5d8c155dcb7736a0a7b"
};
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getDatabase(firebase);
