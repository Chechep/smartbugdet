import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2HAIwv6b9Ft5Zf9YG-DW--Prk3I2tx4Y",
  authDomain: "smartbudget-6701a.firebaseapp.com",
  projectId: "smartbudget-6701a",
  storageBucket: "smartbudget-6701a.firebasestorage.app",
  messagingSenderId: "273765429306",
  appId: "1:273765429306:web:35550334ad23c4f15a8503",
  measurementId: "G-VLSCQRKK5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);