//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBuAL--BITAcRoRRXc0sOeS6ookggeG52Q",
  authDomain: "linkidin-clon.firebaseapp.com",
  projectId: "linkidin-clon",
  storageBucket: "linkidin-clon.appspot.com",
  messagingSenderId: "897336355033",
  appId: "1:897336355033:web:ae2a7ce6d4e038f97736c8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
