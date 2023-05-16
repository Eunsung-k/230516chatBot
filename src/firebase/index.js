import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  


const firebaseConfig = {  
  apiKey: "AIzaSyC1jJC8YMyHN48VD64NxlgpxfAjc2sQDX4",
  authDomain: "chatbot-741a3.firebaseapp.com",
  projectId: "chatbot-741a3",
  storageBucket: "chatbot-741a3.appspot.com",
  messagingSenderId: "666733045095",
  appId: "1:666733045095:web:f24b0ef0cbaaae72bbbbc2",
  measurementId: "G-VBHLWH0YNG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };