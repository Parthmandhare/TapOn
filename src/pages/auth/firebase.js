import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXta9nRLKxm61gs0gpRruHGiSQB_FGeAI",
  authDomain: "tapon-260ea.firebaseapp.com",
  projectId: "tapon-260ea",
  storageBucket: "tapon-260ea.appspot.com",
  messagingSenderId: "560217160799",
  appId: "1:560217160799:web:499887537c9ae1d41f6fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

const imageDb = getStorage(app);

export {app, auth, db , imageDb};