// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Bv1CGyZF6H1qvA3vigUN9TGGzMAWaKo",
  authDomain: "react-crud-8c726.firebaseapp.com",
  databaseURL: "https://react-crud-8c726-default-rtdb.firebaseio.com",
  projectId: "react-crud-8c726",
  storageBucket: "react-crud-8c726.appspot.com",
  messagingSenderId: "208497201876",
  appId: "1:208497201876:web:f7a5ebf38607aa3e33e141"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();