import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeATYDGAbdHw13WDmgUuT4rM_AEXhy9_A",
  authDomain: "firesten-app-f2bf0.firebaseapp.com",
  databaseURL: "https://firesten-app-f2bf0.firebaseio.com",
  projectId: "firesten-app-f2bf0",
  storageBucket: "firesten-app-f2bf0.appspot.com",
  messagingSenderId: "945864274304",
  appId: "1:945864274304:web:26d14b9def5af96a"
});

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const functions = firebaseApp.functions("us-east1");
