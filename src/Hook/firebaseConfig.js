// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ-oj7XY0iwDL_DHgapL7FEYY3k-mYlCs",
    authDomain: "fir-auth-stared.firebaseapp.com",
    projectId: "fir-auth-stared",
    storageBucket: "fir-auth-stared.appspot.com",
    messagingSenderId: "1036666728264",
    appId: "1:1036666728264:web:0b826714b15a73a9b68d7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;