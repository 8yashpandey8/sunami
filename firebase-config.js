// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "xxxxxxx",
  appId: "1:xxxxxx:web:xxxxxx"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shortcuts for Firebase services
const auth = firebase.auth();           // For login/signup
const db = firebase.firestore();        // For database
