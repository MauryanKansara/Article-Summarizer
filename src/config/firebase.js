// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrTsE7VCtjwiFeOo8t3X74nR35mgTVt_c",
    authDomain: "article-summarizer-d553d.firebaseapp.com",
    projectId: "article-summarizer-d553d",
    storageBucket: "article-summarizer-d553d.appspot.com",
    messagingSenderId: "388521656205",
    appId: "1:388521656205:web:cedd839aa018301f4a47c4",
    measurementId: "G-V9YGSGNF3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
