import firebase from "firebase/app"
import "firebase/firestore"

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyAtS9VemG41OO6KIgSAWf3F1OZ-ELAp3PQ",
    authDomain: "amarelo-shop.firebaseapp.com",
    projectId: "amarelo-shop",
    storageBucket: "amarelo-shop.appspot.com",
    messagingSenderId: "772062972792",
    appId: "1:772062972792:web:e6a98fa724b82a4f4dd68d"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app)
}


