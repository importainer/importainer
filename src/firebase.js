import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwkTwKDl79-QaAmUCI5M7xHQhAKRl4AE",
  authDomain: "base-datos-importaner.firebaseapp.com",
  databaseURL: "https://base-datos-importaner-default-rtdb.firebaseio.com",
  projectId: "base-datos-importaner",
  storageBucket: "base-datos-importaner.appspot.com",
  messagingSenderId: "1059533876984",
  appId: "1:1059533876984:web:0131d0c01f1fc55d71550d",
  measurementId: "G-L7MYVJ9Z02"
};

// const firebaseConfigStorage = {
//   apiKey: "AIzaSyAMwkTwKDl79-QaAmUCI5M7xHQhAKRl4AE",
//   authDomain: "base-datos-importaner.firebaseapp.com",
//   dataBaseURL: '',
//   storageBucket: "base-datos-importaner.appspot.com",
// };

// export const st = initializeApp(firebaseConfigStorage);
// export const storage = st.storage();

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);