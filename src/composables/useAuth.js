import { computed, ref } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword, // Import for registration
} from "firebase/auth";
import { auth } from "@/firebase"; // Import the auth instance

const user = ref(null);
const authError = ref(null); // To store Firebase authentication errors

// Set up an authentication state listener
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    // User is signed in
    user.value = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      // You can add more user properties if needed from firebaseUser
    };
  } else {
    // User is signed out
    user.value = null;
  }
});

export async function register({ email, password }) {
  authError.value = null; // Clear previous errors
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // onAuthStateChanged listener will update the user ref
  } catch (error) {
    authError.value = error.message;
    console.error("Firebase registration error:", error.message);
    throw error; // Re-throw to allow components to handle it
  }
}

export async function login({ email, password }) {
  authError.value = null; // Clear previous errors
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // onAuthStateChanged listener will update the user ref
  } catch (error) {
    authError.value = error.message;
    console.error("Firebase login error:", error.message);
    throw error; // Re-throw to allow components to handle it
  }
}

export async function logout() {
  authError.value = null; // Clear previous errors
  try {
    await signOut(auth);
    // onAuthStateChanged listener will update the user ref
  } catch (error) {
    authError.value = error.message;
    console.error("Firebase logout error:", error.message);
    throw error; // Re-throw to allow components to handle it
  }
}

export const isAutenticated = computed(() => !!user.value);

export function useAuth() {
  return { user, isAutenticated, login, logout, register, authError };
}
