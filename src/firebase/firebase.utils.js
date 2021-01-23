import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVQUezac_xpU0GQzjSBLLcgqCjPwt5S8o",
  authDomain: "crwn-db-f00f7.firebaseapp.com",
  projectId: "crwn-db-f00f7",
  storageBucket: "crwn-db-f00f7.appspot.com",
  messagingSenderId: "282716674621",
  appId: "1:282716674621:web:e581a9e67630e5cacde854",
  measurementId: "G-0GD7CNTXBH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
