import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDzuds9HrTOCXL60t2-5JsYlXg3b0xBejY",
  authDomain: "ecommercewebsite-c7de5.firebaseapp.com",
  projectId: "ecommercewebsite-c7de5",
  storageBucket: "ecommercewebsite-c7de5.appspot.com",
  messagingSenderId: "648099634244",
  appId: "1:648099634244:web:d1a3ebb18c9c0e40b93011",
  measurementId: "G-T9RDNC3DJQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app,auth,db};