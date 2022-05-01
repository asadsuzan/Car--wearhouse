// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuP9Yz1X4rj_yOA5K0jYNnBrGadn-CoXA",
  authDomain: "car-manager-1cea6.firebaseapp.com",
  projectId: "car-manager-1cea6",
  storageBucket: "car-manager-1cea6.appspot.com",
  messagingSenderId: "628649796023",
  appId: "1:628649796023:web:d770360c7df18db9fcc832",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
