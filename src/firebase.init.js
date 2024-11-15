// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ-gGdZ3QPjrWXdQSBVBCvGcZScSWLr6w",
  authDomain: "b10a50-firebase.firebaseapp.com",
  projectId: "b10a50-firebase",
  storageBucket: "b10a50-firebase.firebasestorage.app",
  messagingSenderId: "749720075753",
  appId: "1:749720075753:web:5b31a0e96eabf07b939f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;