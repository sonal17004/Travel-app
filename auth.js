// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyCLXMtlmSjjUyPqGPl67nQ-D6SZHVzhsaI",
  authDomain: "my-travel-app-8df4e.firebaseapp.com",
  projectId: "my-travel-app-8df4e",
  storageBucket: "my-travel-app-8df4e.firebasestorage.app",
  messagingSenderId: "883756429136",
  appId: "1:883756429136:web:4b813e1d42ee6db4adc655",
  measurementId: "G-3X2MMQ760C"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Sign Up
window.signup = function() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return updateProfile(userCredential.user, { displayName: name });
    })
    .then(() => {
      alert("Signup successful! Redirecting...");
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
};

// 🔹 Login
window.login = function() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful! Redirecting...");
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
};
