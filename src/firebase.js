// File: src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDC2XbOoxFilCVyUBxy2O8RJ9lnzAHhcwg",
    authDomain: "todo-app-dc5e6.firebaseapp.com",
    projectId: "todo-app-dc5e6",
    storageBucket: "todo-app-dc5e6.appspot.com",
    messagingSenderId: "948862305859",
    appId: "1:948862305859:web:7cb0d8dda13df6c2c4f6f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
