import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAI4R3h_cvUdUE8aCc4S5opZaHU1RZWR5M",
    authDomain: "todoapp-d3f89.firebaseapp.com",
    projectId: "todoapp-d3f89",
    storageBucket: "todoapp-d3f89.appspot.com",
    messagingSenderId: "982583825222",
    appId: "1:982583825222:web:15f0290f7159c483bbcb47",
    measurementId: "G-ES5E9KY66K"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
export const db = firebase.firestore();
