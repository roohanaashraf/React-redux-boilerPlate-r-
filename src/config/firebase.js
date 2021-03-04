// ---------***   Chatapp  *****--------

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Firebase API (from project in firebase)

var firebaseConfig = {
  apiKey: "AIzaSyCRtxHOxhD-yP_CutP-LAkwjVWj2qDDpAU",
  authDomain: "chatapp-af8a9.firebaseapp.com",
  projectId: "chatapp-af8a9",
  storageBucket: "chatapp-af8a9.appspot.com",
  messagingSenderId: "720201996981",
  appId: "1:720201996981:web:9c18439464ab78c83afcfc",
  measurementId: "G-VD9PRF39KH"
};
// Initialize Firebase

var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
