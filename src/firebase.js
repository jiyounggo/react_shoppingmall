import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFU-MMvACdkA490uXk8ktn3conakJPwI8",
  authDomain: "react-community-226f3.firebaseapp.com",
  projectId: "react-community-226f3",
  storageBucket: "react-community-226f3.appspot.com",
  messagingSenderId: "921877797524",
  appId: "1:921877797524:web:003b1a0a30b5fb2bc6f281",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
