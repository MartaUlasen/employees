import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBfmjBZFzS7o2g2u5FbNc68hVmLhpmyMHk",
    authDomain: "employees-7af07.firebaseapp.com",
    databaseURL: "https://employees-7af07.firebaseio.com",
    projectId: "employees-7af07",
    storageBucket: "",
    messagingSenderId: "116693076677",
    appId: "1:116693076677:web:8d2364dc4a3ce034",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
