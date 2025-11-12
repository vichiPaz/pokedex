import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1oAOa3phMNn4wmqvs_ErlrVm48trNJfc",
  authDomain: "pokedex-app-19e45.firebaseapp.com",
  projectId: "pokedex-app-19e45",
  storageBucket: "pokedex-app-19e45.firebasestorage.app",
  messagingSenderId: "488370507222",
  appId: "1:488370507222:web:ecd02c90dbfd36a722e877",
  measurementId: "G-V3HKJKCYSL",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
