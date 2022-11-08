import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc6DFespwq2i4RaN3GkoCGdMzj8PW2E20",
  authDomain: "idleweb-ed5c4.firebaseapp.com",
  databaseURL: "https://idleweb-ed5c4-default-rtdb.firebaseio.com",
  projectId: "idleweb-ed5c4",
  storageBucket: "idleweb-ed5c4.appspot.com",
  messagingSenderId: "906840579582",
  appId: "1:906840579582:web:9224a559dec74d209234af",
  measurementId: "G-MXY2ZQR5PH",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
