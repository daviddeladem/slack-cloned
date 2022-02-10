import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-YTKdf_8CCSW8C_b59X7KcLlVtHjhIOE",
  authDomain: "slack-clone-52270.firebaseapp.com",
  projectId: "slack-clone-52270",
  storageBucket: "slack-clone-52270.appspot.com",
  messagingSenderId: "195880700309",
  appId: "1:195880700309:web:884d836e2eb1bb85f94e9c",
  measurementId: "G-GR2E7Q6Z87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };