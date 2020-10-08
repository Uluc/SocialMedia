import * as firebase from 'firebase/app';
import 'firebase/storage'; // 
import 'firebase/firestore'; //database
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhgewb3SvuxsqyoyucbiajryhcOVL3GKY",
    authDomain: "photography-website-2adf4.firebaseapp.com",
    databaseURL: "https://photography-website-2adf4.firebaseio.com",
    projectId: "photography-website-2adf4",
    storageBucket: "photography-website-2adf4.appspot.com",
    messagingSenderId: "377273324266",
    appId: "1:377273324266:web:67edc6dad6e805549dfd93"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); //interact with storage
const projectFirestore = firebase.firestore(); //interact with database
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore,
    projectStorage,
    timestamp
};