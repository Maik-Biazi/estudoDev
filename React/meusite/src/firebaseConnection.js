import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyATKf5QcXykv_HJmlLDskDUvpOhy0i_i1Y",
    authDomain: "curso-66084.firebaseapp.com",
    projectId: "curso-66084",
    storageBucket: "curso-66084.appspot.com",
    messagingSenderId: "783746476478",
    appId: "1:783746476478:web:4f10be0d80d55d95c4b1ef",
    measurementId: "G-M8K9EWRQQ2"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase
  
