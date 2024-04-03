// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: 'mern-estate.firebaseapp.com',
  // projectId: 'mern-estate',
  // storageBucket: 'mern-estate.appspot.com',
  // messagingSenderId: '1078482850952',
  // appId: '1:1078482850952:web:28f19139ab77246602fb3d',
  authDomain: "estate-8f431.firebaseapp.com",
  projectId: "estate-8f431",
  storageBucket: "estate-8f431.appspot.com",
  messagingSenderId: "1071352097514",
  appId: "1:1071352097514:web:f21a17b8aa4cb24ee10593",
  measurementId: "G-YQZNYYSSZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
