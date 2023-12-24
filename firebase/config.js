import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSMUeyr08UhOhqXj-tmWWBCXYAwKUyDNg",
  authDomain: "curso-next-b7648.firebaseapp.com",
  projectId: "curso-next-b7648",
  storageBucket: "curso-next-b7648.appspot.com",
  messagingSenderId: "1036616886523",
  appId: "1:1036616886523:web:e3df51e8138549b638285e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

