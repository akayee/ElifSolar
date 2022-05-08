import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/database'
import 'firebase/compat/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyArn34LaStkbbOFElRQxgyaI3FXWWeMhYw",
    authDomain: "gold-41ce0.firebaseapp.com",
    databaseURL: "https://gold-41ce0.firebaseio.com",
    projectId: "gold-41ce0",
    storageBucket: "gold-41ce0.appspot.com",
    messagingSenderId: "410116249801",
    appId: "1:410116249801:web:8a5f4a793a294deccad518",
    measurementId: "G-TZ2TH4CH04"
});

export default app;