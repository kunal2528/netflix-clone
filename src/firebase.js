import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8jtosCOeQcy_d5GUFfxukgDG1wq_5tnk",
  authDomain: "netflix-clone-c6b21.firebaseapp.com",
  projectId: "netflix-clone-c6b21",
  storageBucket: "netflix-clone-c6b21.appspot.com",
  messagingSenderId: "581092888008",
  appId: "1:581092888008:web:aa4d6ba0fe2342c9cd84fd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };