// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqANMQS_P6Ez5coikhK-dbkN8VD1iGc3w",
  authDomain: "worldwise-4e505.firebaseapp.com",
  projectId: "worldwise-4e505",
  storageBucket: "worldwise-4e505.appspot.com",
  messagingSenderId: "378059767343",
  appId: "1:378059767343:web:5d52861114ff521a4890da",
  measurementId: "G-NGLTWJSZ1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };