// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACUYwFnOc3AwIZapsdsDs7FhJBLxVJjBk",
    authDomain: "hackaplant.firebaseapp.com",
    databaseURL: "https://hackaplant-default-rtdb.firebaseio.com",
    projectId: "hackaplant",
    storageBucket: "hackaplant.appspot.com",
    messagingSenderId: "284888617956",
    appId: "1:284888617956:web:51571c0541d94b424aedf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);