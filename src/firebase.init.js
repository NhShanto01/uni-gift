// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARIv4_G55WJBL5KHEp0Ynftnwcv2cG2bo",
  authDomain: "uni-gift-8df8a.firebaseapp.com",
  projectId: "uni-gift-8df8a",
  storageBucket: "uni-gift-8df8a.appspot.com",
  messagingSenderId: "409590751394",
  appId: "1:409590751394:web:342195b85499b3e3b2b7fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;