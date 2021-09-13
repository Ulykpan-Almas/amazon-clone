import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvnDbA7bZM7-BZ7llg1MfNOZOeY3QA9sk",
    authDomain: "clone-3347f.firebaseapp.com",
    projectId: "clone-3347f",
    storageBucket: "clone-3347f.appspot.com",
    messagingSenderId: "529729436670",
    appId: "1:529729436670:web:164367816d1a7a1f98deaf",
    measurementId: "G-6TWHPXJSQ3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };