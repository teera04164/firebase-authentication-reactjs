import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA3J8qsB2YE6mCF1SGCD6EU_49Sz82iwXM",
    authDomain: "fir-auth-d8405.firebaseapp.com",
    projectId: "fir-auth-d8405",
    storageBucket: "fir-auth-d8405.appspot.com",
    messagingSenderId: "583499771766",
    appId: "1:583499771766:web:ff460da0cdb11802439457",
    measurementId: "G-ZTTFXRN3W7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


export default firebase;