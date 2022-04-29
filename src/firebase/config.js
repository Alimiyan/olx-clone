import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxj1Kyd0vUq9yNdk80gBX_tkwzdH8lwJo",
    authDomain: "olx-clone-4b973.firebaseapp.com",
    projectId: "olx-clone-4b973",
    storageBucket: "olx-clone-4b973.appspot.com",
    messagingSenderId: "384184398259",
    appId: "1:384184398259:web:936acd86177d5a9899dbc6",
    measurementId: "G-N0B41KVNBJ"
  };

export default firebase.initializeApp(firebaseConfig)