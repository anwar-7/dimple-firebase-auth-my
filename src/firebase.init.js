// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlpyAi8fxptWDTCW1Wdwt6t2U-6iaT2TM',
  authDomain: 'dimple-firebase-auth-my.firebaseapp.com',
  projectId: 'dimple-firebase-auth-my',
  storageBucket: 'dimple-firebase-auth-my.appspot.com',
  messagingSenderId: '614090467829',
  appId: '1:614090467829:web:d5c0e2d5a8c124e832d8bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
