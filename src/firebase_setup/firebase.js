// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kl3KvTnwhtclaGn_VRpd0XSDcEdTgVY",
  authDomain: "byu-i-comments.firebaseapp.com",
  databaseURL: "https://byu-i-comments-default-rtdb.firebaseio.com",
  projectId: "byu-i-comments",
  storageBucket: "byu-i-comments.appspot.com",
  messagingSenderId: "382567625734",
  appId: "1:382567625734:web:b91b4ba5eb3a0924883f87",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);

export { database };
