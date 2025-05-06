// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHnR_MWhgggkea6kNWnhgmTRJ3rWPOMOQ",
    authDomain: "prepwise-baf80.firebaseapp.com",
    projectId: "prepwise-baf80",
    storageBucket: "prepwise-baf80.firebasestorage.app",
    messagingSenderId: "62700224678",
    appId: "1:62700224678:web:0c4e037b0aed5fc9483467",
    measurementId: "G-MZ6CRHB1W4"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
