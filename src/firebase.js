import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAW5W45260XkS4drBt2ZVbYO3FYICeEbRI",
    authDomain: "its-retro-time.firebaseapp.com",
    databaseURL: "https://its-retro-time.firebaseio.com",
    projectId: "its-retro-time",
    storageBucket: "its-retro-time.appspot.com",
    messagingSenderId: "669711536935"
};

// Initialise app
firebase.initializeApp(config)

// Database
export const firestore = firebase.firestore()
export const auth = firebase.auth()

export default firebase