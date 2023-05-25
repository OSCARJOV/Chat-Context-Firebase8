
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXdUvRXuyJ7jAGRGCN8EhkzlQX3BySlUI",
    authDomain: "chat-react-context.firebaseapp.com",
    projectId: "chat-react-context",
    storageBucket: "chat-react-context.appspot.com",
    messagingSenderId: "929063960552",
    appId: "1:929063960552:web:e45affd3cc1a2b49b0ae5d"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}