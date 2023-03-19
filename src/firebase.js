import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwHwLD7tEpeGMoUWXaC659WM6KLO-GNNk",
  authDomain: "auth-a7248.firebaseapp.com",
  projectId: "auth-a7248",
  storageBucket: "auth-a7248.appspot.com",
  messagingSenderId: "70134370131",
  appId: "1:70134370131:web:2d8f7cc33f2615d4fc9ba6"
};

const app = initializeApp(firebaseConfig);
// auth app with firebase
export const auth = getAuth(app);
// get object from google provider to deal with it
const provider = new GoogleAuthProvider();
// sign in by using gmail popup that provide all gmails that you entered before
export const signInWithGoogle = () => {
    // this method takes two params the auth config , clone provider of google and return promise
    signInWithPopup(auth,provider).then(res => {
        localStorage.setItem("name", res.user.displayName);
        localStorage.setItem("email", res.user.email);
        localStorage.setItem("image", res.user.photoURL);
        console.log(res.user);
    }).catch(err => {
        console.log(err);
    })
}

