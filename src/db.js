import firebase from "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyA14_PdgpDRZx7_FKLboYbInZdRuZCWvjA",
    authDomain: "chatappvue-222c1.firebaseapp.com",
    projectId: "chatappvue-222c1",
    storageBucket: "chatappvue-222c1.appspot.com",
    messagingSenderId: "260610042250",
    appId: "1:260610042250:web:b98e768911f36d83b14073"
}

const db = firebase.initializeApp(config);
export default db;