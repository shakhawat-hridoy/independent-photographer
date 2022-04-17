// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAik4iO90ZPw6areuGgAG5LYoBJEzVvMVE",
  authDomain: "photpgrapher-ffedd.firebaseapp.com",
  projectId: "photpgrapher-ffedd",
  storageBucket: "photpgrapher-ffedd.appspot.com",
  messagingSenderId: "1085433804353",
  appId: "1:1085433804353:web:6b50160922475d81d738c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
