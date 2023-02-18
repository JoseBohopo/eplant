import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBp1sFn9SD9RQjRczvj0qs1h3ZPHzj5UVU",
  authDomain: "e-plant-12a3f.firebaseapp.com",
  projectId: "e-plant-12a3f",
  storageBucket: "e-plant-12a3f.appspot.com",
  messagingSenderId: "121631297347",
  appId: "1:121631297347:web:59d35de1ad92dd104269f6",
});

export const auth = getAuth(firebaseApp);
