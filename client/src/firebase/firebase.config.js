// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMvQUeMXGmF9K14aEVbiqEySBlJKWZnRI",
  authDomain: "book-app-e623e.firebaseapp.com",
  projectId: "book-app-e623e",
  storageBucket: "book-app-e623e.appspot.com",
  messagingSenderId: "620651292590",
  appId: "1:620651292590:web:3e533e8f6aeaee03730a3f",
  measurementId: "G-NRF1H01JHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
