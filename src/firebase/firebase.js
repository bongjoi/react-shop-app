// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBq307NckMxpO5iylr9eNrIh-ZU5pDJNS0',
  authDomain: 'react-next-shop-app-7c111.firebaseapp.com',
  projectId: 'react-next-shop-app-7c111',
  storageBucket: 'react-next-shop-app-7c111.appspot.com',
  messagingSenderId: '164767924464',
  appId: '1:164767924464:web:149603674adb912c350235'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
