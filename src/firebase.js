// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
//   apiKey: "AIzaSyBdrcVuhSwHmxvbfpuWn-hz49wxxPAqWqU",
//   authDomain: "nwitter-a3289.firebaseapp.com",
//   projectId: "nwitter-a3289",
//   storageBucket: "nwitter-a3289.appspot.com",
//   messagingSenderId: "243377461640",
//   appId: "1:243377461640:web:e812c0287fe8cdc573823d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default initializeApp(firebaseConfig);