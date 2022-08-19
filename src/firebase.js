import firebase from "firebase/app";
import "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN8JR77CkO2G_X_ISG2EU0zE3AXpxFOtU",
  authDomain: "vishalk3102-cdcbc.firebaseapp.com",
  databaseURL: "https://vishalk3102-cdcbc-default-rtdb.firebaseio.com",
  projectId: "vishalk3102-cdcbc",
  storageBucket: "vishalk3102-cdcbc.appspot.com",
  messagingSenderId: "715412765491",
  appId: "1:715412765491:web:f49b2c6da26d247ec69c46",
  measurementId: "G-0ZYBWQVEKT",
};

const firebaseDb = initializeApp(firebaseConfig);
export default firebaseDb.database.ref();
