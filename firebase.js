// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, enableIndexedDbPersistence} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGTuFfCdGDuaTArkUAyBxqtzh4Hi5MTiQ",
  authDomain: "monorientation-8f782.firebaseapp.com",
  projectId: "monorientation-8f782",
  storageBucket: "monorientation-8f782.appspot.com",
  messagingSenderId: "487775177664",
  appId: "1:487775177664:web:94598c65591112e04a5625"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
enableIndexedDbPersistence(db)