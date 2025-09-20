// Firebase configuration for User App
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAfFdCPNyPZk1IydHpTpXbzGLAizIHaZt8",
  authDomain: "civic-issuemanagement.firebaseapp.com",
  projectId: "civic-issuemanagement",
  storageBucket: "civic-issuemanagement.firebasestorage.app",
  messagingSenderId: "1006395195459",
  appId: "1:1006395195459:web:1c1489703168ddd8bf14f6",
  measurementId: "G-LBKNWQRYYZ"
};

// Initialize Firebase
const userApp = initializeApp(firebaseConfig, 'user');
export const userDb = getFirestore(userApp);
export const userAuth = getAuth(userApp);
export const userStorage = getStorage(userApp);
export const userMessaging = getMessaging(userApp);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);