import { db, auth, CLOUDINARY_CONFIG } from './user-firebase-config.js';
import { CloudinaryUploader } from './cloudinary-uploader.js';
import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    getDoc,
    query, 
    where, 
    onSnapshot,
    serverTimestamp,
    orderBy 
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

// Initialize Cloudinary uploader
const cloudinaryUploader = new CloudinaryUploader(
    CLOUDINARY_CONFIG.cloudName,
    CLOUDINARY_CONFIG.uploadPreset
);

// Global variables
window.currentUser = null;
window.userIssues = [];

// Authentication Functions
export async function registerUser(name, email, password, phone, address) {
    try {
        console.log('Starting registration...');
        
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User account created:', user.uid);

        // Save user data to Firestore
        const userDoc = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            role: 'citizen',
            registrationDate: serverTimestamp(),
            issuesReported: 0,
            issuesResolved: 0
        };

        await addDoc(collection(db, 'users'), userDoc);
        console.log('User data saved to Firestore');

        return { success: true, user: user };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
    }
}

export async function loginUser(email, password) {
    try {
        console.log('Attempting login...');
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Login successful:', user.uid);
        
        // Load user data
        await loadUserData(user.uid);
        return { success: true, user: user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
    }
}

export async function logoutUser() {
    try {
        await signOut(auth);
        window.currentUser = null;
        window.userIssues = [];
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
}

// Load user data from Firestore
async function loadUserData(userId) {
    try {
        const q = query(collection(db, 'users'), where('email', '==', auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs;
            window.currentUser = { id: userDoc.id, ...userDoc.data() };
            console.log('User data loaded:', window.currentUser);
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// ENHANCED: Issue Management Functions with Cloudinary
export async function submitIssue(issueData) {
    try {
        if (!auth.currentUser) {
            throw new Error('User not logged in');
        }

        console.log('Submitting issue...');
        
        // Prepare issue document
        const issue = {
            id: generateIssueId(),
            title: issueData.title,
            category: issueData.category,
            calculatedPriority: calculateInitialPriority(issueData.category),
            status: 'Open',
            submittedDate: serverTimestamp(),
            citizenId: auth.currentUser.uid,
            citizenName: window.currentUser.name,
            citizenEmail: auth.currentUser.email,
            location: {
                address: issueData.address,
                coordinates: issueData.coordinates || null
            },
            description: issueData.description,
            photos: [], // Cloudinary URLs will go here
            photoPublicIds: [], // Cloudinary public IDs for management
            assignedTo: null,
            assignedStaff: null,
            nearbyIssueCount: 0,
            priorityEscalated: false,
            estimatedTime: null,
            estimatedTimeHours: null,
            updates: [{
                date: serverTimestamp(),
                status: 'Submitted',
                message: 'Issue submitted successfully',
                updatedBy: 'user'
            }]
        };

        // ENHANCED: Upload photos to Cloudinary if any
        if (issueData.photos && issueData.photos.length > 0) {
            console.log('Uploading photos to Cloudinary...');
            const photoResults = await uploadPhotosToCloudinary(issueData.photos, issue.id);
            
            if (photoResults.success) {
                issue.photos = photoResults.urls;
                issue.photoPublicIds = photoResults.publicIds;
                console.log('Photos uploaded successfully:', issue.photos);
            } else {
                console.warn('Some photos failed to upload:', photoResults.errors);
                // Continue with issue submission even if some photos failed
                issue.photos = photoResults.urls.filter(url => url); // Remove null/undefined URLs
                issue.photoPublicIds = photoResults.publicIds.filter(id => id);
            }
        }

        // Add to Firestore
        const docRef = await addDoc(collection(db, 'issues'), issue);
        console.log('Issue submitted with ID:', docRef.id);

        return { success: true, issueId: issue.id, firestoreId: docRef.id };
    } catch (error) {
        console.error('Error submitting issue:', error);
        return { success: false, error: error.message };
    }
}

// ENHANCED: Upload photos to Cloudinary instead of Firebase Storage
async function uploadPhotosToCloudinary(photos, issueId) {
    const results = {
        success: true,
        urls: [],
        publicIds: [],
        errors: []
    };
    
    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        
        const uploadOptions = {
            folder: `civic_issues/${issueId}`,
            public_id: `issue_${issueId}_photo_${i + 1}`,
            tags: ['civic_issue', 'user_submitted', issueId]
        };
        
        try {
            const uploadResult = await cloudinaryUploader.uploadImage(photo, uploadOptions);
            
            if (uploadResult.success) {
                results.urls.push(uploadResult.url);
                results.publicIds.push(uploadResult.publicId);
                console.log(`Photo ${i + 1} uploaded:`, uploadResult.url);
            } else {
                results.urls.push(null);
                results.publicIds.push(null);
                results.errors.push(`Photo ${i + 1}: ${uploadResult.error}`);
                results.success = false;
            }
        } catch (error) {
            console.error(`Error uploading photo ${i + 1}:`, error);
            results.urls.push(null);
            results.publicIds.push(null);
            results.errors.push(`Photo ${i + 1}: ${error.message}`);
            results.success = false;
        }
    }
    
    return results;
}

// Calculate initial priority before location-based calculation
function calculateInitialPriority(category) {
    const categoryPriorities = {
        'Safety': 'High',
        'Utilities': 'Medium',
        'Roads': 'Medium',
        'Environment': 'Low',
        'Parks': 'Low'
    };
    
    return categoryPriorities[category] || 'Medium';
}

// Load user's issues with real-time updates
export async function loadUserIssues() {
    try {
        if (!auth.currentUser) {
            console.log('No user logged in');
            return;
        }

        const q = query(
            collection(db, 'issues'),
            where('citizenId', '==', auth.currentUser.uid),
            orderBy('submittedDate', 'desc')
        );

        // Real-time listener for user's issues
        onSnapshot(q, (querySnapshot) => {
            window.userIssues = [];
            querySnapshot.forEach((doc) => {
                const issueData = { firestoreId: doc.id, ...doc.data() };
                window.userIssues.push(issueData);
            });
            
            console.log('User issues updated:', window.userIssues.length);
            
            // Update UI if on track page
            if (window.currentPage === 'track') {
                displayUserIssues();
            }
        });

    } catch (error) {
        console.error('Error loading user issues:', error);
    }
}

// Generate issue ID
function generateIssueId() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ISS-${year}-${random}`;
}

// Auth state listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user.uid);
        loadUserData(user.uid);
        loadUserIssues();
    } else {
        console.log('User is signed out');
        window.currentUser = null;
        window.userIssues = [];
    }
});

// Display user issues (for track page)
function displayUserIssues() {
    console.log('Updating issues display...');
    if (window.updateIssueDisplay) {
        window.updateIssueDisplay(window.userIssues);
    }
}

// ENHANCED: Generate optimized image URLs for display
export function getOptimizedImageUrl(publicId, options = {}) {
    if (!publicId) return null;
    
    return cloudinaryUploader.generateOptimizedUrl(publicId, {
        width: options.width || 300,
        height: options.height || 200,
        crop: options.crop || 'fill',
        quality: options.quality || 'auto',
        format: options.format || 'auto'
    });
}

// Make functions available globally
window.firebaseFunctions = {
    registerUser,
    loginUser,
    logoutUser,
    submitIssue,
    loadUserIssues,
    getOptimizedImageUrl
};

// Make Cloudinary uploader available globally
window.cloudinaryUploader = cloudinaryUploader;