// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import 'firebase/auth'; 
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA28lsKZ9_WTGatd1N6lmZlamaxdnZsAkM",
    authDomain: "whatsapp-clone-97618.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-97618.firebaseio.com",
    projectId: "whatsapp-clone-97618",
    storageBucket: "whatsapp-clone-97618.appspot.com",
    messagingSenderId: "652246951808",
    appId: "1:652246951808:web:daab53f6c9fe19cbff8365",
    measurementId: "G-0GE7M7C729"
  };
// iniatializing the app with firebaseConfig and storing it inside the variable firebaseApp 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
// accessing the firestore of our firebaseApp and store it inside of db variable
  const db = firebaseApp.firestore();
// authication handler
  const auth = firebase.auth();
// this is for google authication
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
