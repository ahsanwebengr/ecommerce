import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAM18A83_Y6ZfPTv8EfDNRQIdIY3s9plGA",
    authDomain: "ecommerce-9d5a7.firebaseapp.com",
    projectId: "ecommerce-9d5a7",
    storageBucket: "ecommerce-9d5a7.appspot.com",
    messagingSenderId: "691224294347",
    appId: "1:691224294347:web:ef60ebbb2f595b54b2bc4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);