import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "flo-shop-e1998.firebaseapp.com",
    projectId: "flo-shop-e1998",
    storageBucket: "flo-shop-e1998.appspot.com",
    messagingSenderId: "868536297696",
    appId: "1:868536297696:web:9a5669699709afaad5c885",
    measurementId: "G-9BNBMFL9ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)