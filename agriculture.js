// Firebase configuration - using the auth instance from HTML
const auth = window.auth;

// Add a simple test function to check Firebase connection
function testFirebaseConnection() {
  console.log('Testing Firebase connection...');
  console.log('Auth object:', window.auth);
  console.log('SignIn function:', window.signInWithEmailAndPassword);
  
  if (window.auth && window.signInWithEmailAndPassword) {
    console.log('✅ Firebase is properly loaded');
    return true;
  } else {
    console.log('❌ Firebase is not properly loaded');
    return false;
  }
}

// Test Firebase connection when page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(testFirebaseConnection, 1000); // Wait 1 second for Firebase to load
});

const translations = {
  en: {
    login: "Login", username: "Username", password: "Password",
    select_language: "Select Language:", next: "Next",
    location: "Enter Location", district: "District", state: "State",
    gps_location: "Get GPS Location", latitude: "Latitude", longitude: "Longitude",
    lab_report: "Lab Test Report",
    nmg: "N (mg/kg)",
    pmg: "P (mg/kg)",
    kmg: "K (mg/kg)",
    ph: "pH",
    bmg: "B (mg/kg)",
    znmg: "Zn (mg/kg)",
    mnmg: "Mn (mg/kg)",
    mgmg: "Mg (mg/kg)",
    cumg: "Cu (mg/kg)",
    femg: "Fe (mg/kg)",
    smg: "S (mg/kg)",
    ecds: "EC (ds/m)",
    submit: "Submit"
  },
  hi: {
    login: "लॉगिन", username: "उपयोगकर्ता नाम", password: "पासवर्ड",
    select_language: "भाषा चुनें", next: "अगला",
    location: "स्थान दर्ज करें", district: "जिला", state: "राज्य",
    gps_location: "जीपीएस स्थान प्राप्त करें", latitude: "अक्षांश", longitude: "देशांतर",
    lab_report: "प्रयोगशाला रिपोर्ट",
    nmg: "नाइट्रोजन (मि.ग्रा./किग्रा.)",
    pmg: "फॉस्फोरस (मि.ग्रा./किग्रा.)",
    kmg: "पोटाशियम (मि.ग्रा./किग्रा.)",
    ph: "pH",
    bmg: "बोरॉन (मि.ग्रा./किग्रा.)",
    znmg: "जिंक (मि.ग्रा./किग्रा.)",
    mnmg: "मैंगनीज (मि.ग्रा./किग्रा.)",
    mgmg: "मैग्नीशियम (मि.ग्रा./किग्रा.)",
    cumg: "कॉपर (मि.ग्रा./किग्रा.)",
    femg: "लौह (मि.ग्रा./किग्रा.)",
    smg: "सल्फर (मि.ग्रा./किग्रा.)",
    ecds: "इलेक्ट्रिकल कंडक्टिविटी (ds/m)",
    submit: "जमा करें"
  },
  or: {
    login: "ଲଗଇନ୍", username: "ୟୁଜରନେମ୍", password: "ପାସୱାର୍ଡ୍",
    select_language: "ଭାଷା ଚୟନ କରନ୍ତୁ", next: "ପରବର୍ତ୍ତୀ",
    location: "ସ୍ଥାନ ଦିଅନ୍ତୁ", district: "ଜିଲ୍ଲା", state: "ରାଜ୍ୟ",
    gps_location: "GPS ସ୍ଥାନ ପାଆନ୍ତୁ", latitude: "ଲାଟିଟ୍ୟୁଡ୍", longitude: "ଲଂଗିଟ୍ୟୁଡ୍",
    lab_report: "ଯାଞ୍ଚ ରିପୋର୍ଟ",
    nmg: "ନାଇଟ୍ରୋଜେନ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    pmg: "ଫସ୍ଫୋରସ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    kmg: "ପଟାସିଅମ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    ph: "pH",
    bmg: "ବୋରନ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    znmg: "ଜିଙ୍କ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    mnmg: "ମାଙ୍ଗାନିଜ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    mgmg: "ମ୍ୟାଗ୍ନେସିଅମ୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    cumg: "ତାମ୍ବା (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    femg: "ଲୋହା (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    smg: "ସଲ୍ଫର୍ (ମି.ଗ୍ରା./କି.ଗ୍ରା.)",
    ecds: "ଇଲେକ୍ଟ୍ରିକାଲ୍ କଣ୍ଡକ୍ଟିଭିଟି (ds/m)",
    submit: "ଦାଖଲ କରନ୍ତୁ"
  }
};
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = translations[lang][el.getAttribute("data-i18n")];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key] || translations["en"][key] || "";
  });
}
setLang('en');
document.getElementById("languageSelect").addEventListener("change", (e) => {
  setLang(e.target.value);
});
document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Basic validation
  if (!email || !password) {
    showLoginError('Please fill in all fields!');
    return;
  }
  
  // Check if Firebase is properly loaded
  if (!window.auth || !window.signInWithEmailAndPassword) {
    showLoginError('Firebase is not properly loaded. Please refresh the page and try again.');
    return;
  }
  
  // Show loading state
  const loginBtn = document.querySelector('#loginForm button');
  const originalText = loginBtn.innerHTML;
  loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
  loginBtn.disabled = true;
  
  console.log('Attempting login with:', email); // Debug log
  
  // Add timeout to prevent infinite loading
  const timeoutId = setTimeout(() => {
    showLoginError('Login is taking too long. Please check your internet connection and try again.');
    loginBtn.innerHTML = originalText;
    loginBtn.disabled = false;
  }, 10000); // 10 second timeout
  
  // Firebase login
  window.signInWithEmailAndPassword(window.auth, email, password)
    .then((userCredential) => {
      // Clear timeout
      clearTimeout(timeoutId);
      
      // User logged in successfully
      const user = userCredential.user;
      console.log('User logged in:', user);
      
      // Store user info in localStorage
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userName', user.displayName || 'User');
      
      // Update lastLogin in Firestore
      updateUserLastLogin(user.uid);
      
      showLoginSuccess('Login successful!');
      
      // Proceed to next step
      setTimeout(() => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("languageBox").style.display = "";
        currentStep = 'language';
      }, 1000);
    })
    .catch((error) => {
      // Clear timeout
      clearTimeout(timeoutId);
      
      // Handle login errors
      console.error('Login error:', error); // Debug log
      
      let errorMessage = 'Login failed. Please try again.';
      
      switch(error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email. Please register first.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled. Please contact support.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password. Please check your credentials.';
          break;
        default:
          errorMessage = `Login failed: ${error.message}`;
      }
      
      showLoginError(errorMessage);
      
      // Reset button state immediately on error
      loginBtn.innerHTML = originalText;
      loginBtn.disabled = false;
    })
    .finally(() => {
      // Ensure button state is always reset
      setTimeout(() => {
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
      }, 100);
    });
};
window.showLocation = function() {
  document.getElementById("languageBox").style.display = "none";
  document.getElementById("locationBox").style.display = "";
  currentStep = 'location';
};
window.showLab = function() {
  document.getElementById("locationBox").style.display = "none";
  document.getElementById("labBox").style.display = "";
  currentStep = 'lab';
};
window.fillGPS = function() {
  if (!navigator.geolocation) {
    alert('Not supported');
    return;
  }
  navigator.geolocation.getCurrentPosition(function(pos) {
    document.getElementById('latitude').value = pos.coords.latitude;
    document.getElementById('longitude').value = pos.coords.longitude;
  }, function(err) {
    alert("Error: " + err.message);
  });
};
document.getElementById("labForm").onsubmit = function(e) {
  e.preventDefault();
  alert("Submitted!");
};
// Track current step in the login flow
let currentStep = 'login';

document.getElementById('backButton').onclick = function() {
  // Step-by-step back navigation through the login flow
  switch(currentStep) {
    case 'language':
      // Go back to login
      document.getElementById("languageBox").style.display = "none";
      document.getElementById("loginBox").style.display = "";
      currentStep = 'login';
      break;
    case 'location':
      // Go back to language selection
      document.getElementById("locationBox").style.display = "none";
      document.getElementById("languageBox").style.display = "";
      currentStep = 'language';
      break;
    case 'lab':
      // Go back to location
      document.getElementById("labBox").style.display = "none";
      document.getElementById("locationBox").style.display = "";
      currentStep = 'location';
      break;
    case 'login':
    default:
      // Go back to home page (index.html)
      window.location.href = 'index.html';
      break;
  }
};

// Helper functions for showing login messages
function showLoginError(message) {
  // Remove existing messages
  const existingError = document.querySelector('.login-error-message');
  if (existingError) existingError.remove();
  
  // Create error message element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'login-error-message';
  errorDiv.style.cssText = `
    background: #fee;
    color: #c33;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #fcc;
    font-size: 14px;
  `;
  errorDiv.textContent = message;
  
  // Insert before the login form
  const loginForm = document.getElementById('loginForm');
  loginForm.parentNode.insertBefore(errorDiv, loginForm);
}

function showLoginSuccess(message) {
  // Remove existing messages
  const existingMessage = document.querySelector('.login-success-message');
  if (existingMessage) existingMessage.remove();
  
  // Create success message element
  const successDiv = document.createElement('div');
  successDiv.className = 'login-success-message';
  successDiv.style.cssText = `
    background: #efe;
    color: #363;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #cfc;
    font-size: 14px;
  `;
  successDiv.textContent = message;
  
  // Insert before the login form
  const loginForm = document.getElementById('loginForm');
  loginForm.parentNode.insertBefore(successDiv, loginForm);
}

// Monitor authentication state
window.onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    
    // Store user info
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userName', user.displayName || 'User');
    localStorage.setItem('userId', user.uid);
    
    // If user is already logged in and on login page, redirect to next step
    if (currentStep === 'login') {
      setTimeout(() => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("languageBox").style.display = "";
        currentStep = 'language';
      }, 1000);
    }
  } else {
    // User is signed out
    console.log('User is signed out');
    
    // Clear stored user info
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('userPhone');
  }
});

// Function to update user's last login time in Firestore
async function updateUserLastLogin(userId) {
  try {
    const db = window.getFirestore();
    const usersRef = window.collection(db, 'users');
    const q = window.query(usersRef, window.where('uid', '==', userId));
    const querySnapshot = await window.getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      await window.updateDoc(window.doc(db, 'users', userDoc.id), {
        lastLogin: new Date()
      });
      console.log('Last login updated in Firestore');
    }
  } catch (error) {
    console.error('Error updating last login:', error);
  }
}

// Add logout functionality (optional - can be called from anywhere)
function logout() {
  window.signOut(auth).then(() => {
    console.log('User signed out');
    // Redirect to home page or login
    window.location.href = 'index.html';
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
}
