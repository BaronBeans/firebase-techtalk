import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: GET RID OF THIS!!!
var config = {
    apiKey: "AIzaSyDpyv6Nl_by3gl67G0c3E7iNN7b0tFGRwE",
    authDomain: "techtalktest-a383b.firebaseapp.com",
    databaseURL: "https://techtalktest-a383b.firebaseio.com",
    projectId: "techtalktest-a383b",
    storageBucket: "techtalktest-a383b.appspot.com",
    messagingSenderId: "766985813539",
    appId: "1:766985813539:web:383a908d972f14a7823b96",
    measurementId: "G-YN0FSC96FJ"
};

const fire = firebase.initializeApp(config);
export const auth = fire.auth();
export const db = fire.firestore();
db.enablePersistence().catch(err => {
    if (err.code === "unimplemented") {
        console.log(`Persistence is not supported in the current browser.`)
    }
})
export default fire;