import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// copy and paste your firebaseConfig object here !!!
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const db = fire.firestore();
db.enablePersistence().catch(err => {
    if (err.code === "unimplemented") {
        console.log(`Persistence is not supported in the current browser.`)
    }
})
export default fire;