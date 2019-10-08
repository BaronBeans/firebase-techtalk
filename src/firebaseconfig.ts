import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// TODO: GET RID OF THIS!!!
const config = {
    apiKey: "AIzaSyCS2TXzYlZXuiZRAMkHOrkzkDSzUyaM1_k",
    authDomain: "fir-techtalk.firebaseapp.com",
    databaseURL: "https://fir-techtalk.firebaseio.com",
    projectId: "fir-techtalk",
    storageBucket: "",
    messagingSenderId: "467167121344",
    appId: "1:467167121344:web:9ab1b5d096c7a9d054c225",
    measurementId: "G-7HFYE2FRYX"
};

const fire = firebase.initializeApp(config);
export const auth = fire.auth();
export const db = fire.firestore();
// export const store = fire.storage().ref();
db.enablePersistence().catch(err => {
    if (err.code === "unimplemented") {
        console.log(`Persistence is not supported in the current browser.`)
    }
})
export default fire;