// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA17gIEssF3ji-ttJGzVwKRKMTctl8fAKM",
  authDomain: "tgscloud-4174d.firebaseapp.com",
  projectId: "tgscloud-4174d",
  storageBucket: "tgscloud-4174d.appspot.com",
  messagingSenderId: "87195452534",
  appId: "1:87195452534:web:d962e414e5feb5c0cfcb57",
  measurementId: "G-0MZSMLBCZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig