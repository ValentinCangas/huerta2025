// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NNnbjbrx4fFBfzaxkm-Klu8dXefiogQ",
  authDomain: "huerta2025-e3f73.firebaseapp.com",
  projectId: "huerta2025-e3f73",
  storageBucket: "huerta2025-e3f73.firebasestorage.app",
  messagingSenderId: "1048957792635",
  appId: "1:1048957792635:web:27d7a44e1b96b4018c4dde",
  measurementId: "G-9D1D0MQ355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);