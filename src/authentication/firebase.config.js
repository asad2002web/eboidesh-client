import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId 
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAWYeFAZr2knpoin2EkJzEceVWsoQ1Z0O0",
//   authDomain: "e-boidesh.firebaseapp.com",
//   projectId: "e-boidesh",
//   storageBucket: "e-boidesh.appspot.com",
//   messagingSenderId: "1037377839207",
//   appId: "1:1037377839207:web:50e20c40c46f01dd4e74c2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;