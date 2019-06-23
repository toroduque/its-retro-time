import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAW5W45260XkS4drBt2ZVbYO3FYICeEbRI",
    authDomain: "its-retro-time.firebaseapp.com",
    databaseURL: "https://its-retro-time.firebaseio.com",
    projectId: "its-retro-time",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "669711536935"
};

// Initialise app
firebase.initializeApp(config)

// Database
export const firestore = firebase.firestore()

export default firebase