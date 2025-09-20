// Mobile-First Civic Issue Management App
console.log('🚀 Initializing Mobile Civic Issues App...');
// Wait for Firebase to load
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, initializing app...');
    
    // Wait a bit for Firebase modules to load
    setTimeout(() => {
        initializeApp();
    }, 1000);
});

// Enhanced photo handling with Cloudinary
let selectedPhotos = []; // Store File objects

// Handle photo selection
function handlePhotoSelection(event) {
    const files = Array.from(event.target.files);
    
    // Validate files
    const validFiles = files.filter(file => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        
        if (!validTypes.includes(file.type)) {
            showToast(`${file.name} is not a valid image type`, 'error');
            return false;
        }
        
        if (file.size > maxSize) {
            showToast(`${file.name} is too large (max 10MB)`, 'error');
            return false;
        }
        
        return true;
    });
    
    selectedPhotos = [...selectedPhotos, ...validFiles];
    updatePhotoPreview();
}

// Update photo preview
function updatePhotoPreview() {
    const previewContainer = document.getElementById('photoPreview');
    if (!previewContainer) return;
    
    previewContainer.innerHTML = '';
    
    selectedPhotos.forEach((file, index) => {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'photo-preview-item';
        
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = `Preview ${index + 1}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '×';
        removeBtn.className = 'photo-remove-btn';
        removeBtn.onclick = () => removePhoto(index);
        
        previewDiv.appendChild(img);
        previewDiv.appendChild(removeBtn);
        previewContainer.appendChild(previewDiv);
    });
}

// Remove photo
function removePhoto(index) {
    selectedPhotos.splice(index, 1);
    updatePhotoPreview();
}

// Enhanced issue submission with Cloudinary
async function handleIssueSubmission() {
    const issueData = {
        title: document.getElementById('issueTitle').value,
        category: document.getElementById('issueCategory').value,
        description: document.getElementById('issueDescription').value,
        address: document.getElementById('issueLocation').value,
        coordinates: null, // You can add GPS coordinates here
        photos: selectedPhotos // File objects for Cloudinary upload
    };

    if (!issueData.title || !issueData.category || !issueData.description) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    // Show uploading state
    const submitBtn = document.getElementById('submitIssueBtn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Uploading...';
    submitBtn.disabled = true;

    const result = await window.firebaseFunctions.submitIssue(issueData);
    
    if (result.success) {
        showToast('Issue submitted successfully!', 'success');
        clearForm();
        selectedPhotos = []; // Clear selected photos
        updatePhotoPreview();
        showPage('track');
    } else {
        showToast(`Failed to submit issue: ${result.error}`, 'error');
    }

    // Reset button state
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
}

// Clear form function
function clearForm() {
    document.getElementById('issueTitle').value = '';
    document.getElementById('issueCategory').value = '';
    document.getElementById('issueDescription').value = '';
    document.getElementById('issueLocation').value = '';
    document.getElementById('photoInput').value = '';
    selectedPhotos = [];
    updatePhotoPreview();
}
// Function to handle registration
async function handleRegistration() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;

    if (!name || !email || !password) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    const result = await window.firebaseFunctions.registerUser(name, email, password, phone, address);
    
    if (result.success) {
        showToast('Registration successful!', 'success');
        showPage('dashboard');
    } else {
        showToast(`Registration failed: ${result.error}`, 'error');
    }
}

// Function to handle login
async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showToast('Please enter email and password', 'error');
        return;
    }

    const result = await window.firebaseFunctions.loginUser(email, password);
    
    if (result.success) {
        showToast('Login successful!', 'success');
        showPage('dashboard');
    } else {
        showToast(`Login failed: ${result.error}`, 'error');
    }
}

// Function to handle issue submission
async function handleIssueSubmission() {
    const issueData = {
        title: document.getElementById('issueTitle').value,
        category: document.getElementById('issueCategory').value,
        priority: document.getElementById('issuePriority').value,
        description: document.getElementById('issueDescription').value,
        address: document.getElementById('issueLocation').value,
        coordinates: null, // You can add GPS coordinates here
        photos: selectedPhotos // Your existing photo array
    };

    if (!issueData.title || !issueData.category || !issueData.description) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    const result = await window.firebaseFunctions.submitIssue(issueData);
    
    if (result.success) {
        showToast('Issue submitted successfully!', 'success');
        clearForm();
        showPage('track');
    } else {
        showToast(`Failed to submit issue: ${result.error}`, 'error');
    }
}

// Update your existing issue display function
function updateIssueDisplay(issues) {
    // Replace your existing localStorage issue loading with this
    appData.userIssues = issues;
    // Call your existing display function
    if (typeof loadTrackPage === 'function') {
        loadTrackPage();
    }
}

// Make function available globally
window.updateIssueDisplay = updateIssueDisplay;
// Mock Data for Mobile App
const mockData = {
    issues: [
        {
            id: 'ISS-2024-001',
            title: 'Large pothole on Main Street',
            category: 'Roads',
            status: 'Open',
            priority: 'High',
            description: 'Large pothole causing vehicle damage near the intersection',
            address: '123 Main Street, Downtown',
            coordinates: { lat: 40.7128, lng: -74.0060 },
            submittedDate: '2024-09-19',
            citizenName: 'You',
            timeline: [
                { date: '2024-09-19', event: 'Issue reported', status: 'submitted' },
                { date: '2024-09-19', event: 'Assigned to Public Works', status: 'assigned' }
            ]
        },
        {
            id: 'ISS-2024-002',
            title: 'Streetlight not working',
            category: 'Utilities',
            status: 'In Progress',
            priority: 'Medium',
            description: 'Street light has been out for 3 days, creating safety concern',
            address: '125 Main Street, Downtown',
            coordinates: { lat: 40.7130, lng: -74.0058 },
            submittedDate: '2024-09-18',
            assignedTo: 'Mike Davis',
            citizenName: 'You',
            timeline: [
                { date: '2024-09-18', event: 'Issue reported', status: 'submitted' },
                { date: '2024-09-18', event: 'Assigned to Mike Davis', status: 'assigned' },
                { date: '2024-09-19', event: 'Work started', status: 'in-progress' }
            ]
        },
        {
            id: 'ISS-2024-003',
            title: 'Broken sidewalk',
            category: 'Safety',
            status: 'Under Review',
            priority: 'Critical',
            description: 'Cracked sidewalk creating trip hazard for pedestrians',
            address: '120 Main Street, Downtown',
            coordinates: { lat: 40.7125, lng: -74.0062 },
            submittedDate: '2024-09-17',
            assignedTo: 'Tom Anderson',
            completedDate: '2024-09-19',
            citizenName: 'You',
            timeline: [
                { date: '2024-09-17', event: 'Issue reported', status: 'submitted' },
                { date: '2024-09-18', event: 'Assigned to Tom Anderson', status: 'assigned' },
                { date: '2024-09-19', event: 'Work completed', status: 'completed' },
                { date: '2024-09-19', event: 'Under review', status: 'review' }
            ]
        },
        {
            id: 'ISS-2024-004',
            title: 'Water leak on street',
            category: 'Utilities',
            status: 'Closed',
            priority: 'Critical',
            description: 'Large water leak flooding the street',
            address: '130 Main Street, Downtown',
            coordinates: { lat: 40.7132, lng: -74.0064 },
            submittedDate: '2024-09-17',
            assignedTo: 'Mike Davis',
            completedDate: '2024-09-19',
            citizenName: 'You',
            rating: 5,
            timeline: [
                { date: '2024-09-17', event: 'Issue reported', status: 'submitted' },
                { date: '2024-09-18', event: 'Assigned to Mike Davis', status: 'assigned' },
                { date: '2024-09-19', event: 'Work completed', status: 'completed' },
                { date: '2024-09-19', event: 'Issue resolved', status: 'closed' }
            ]
        }
    ],
    notifications: [
        {
            id: 1,
            title: 'Issue Updated',
            message: 'Your streetlight issue is now in progress',
            type: 'update',
            timestamp: '2024-09-19T10:30:00Z',
            read: false,
            issueId: 'ISS-2024-002'
        },
        {
            id: 2,
            title: 'Work Completed',
            message: 'Sidewalk repair has been completed. Please verify the work.',
            type: 'completion',
            timestamp: '2024-09-19T09:15:00Z',
            read: false,
            issueId: 'ISS-2024-003'
        },
        {
            id: 3,
            title: 'Issue Resolved',
            message: 'Water leak has been successfully fixed',
            type: 'resolved',
            timestamp: '2024-09-18T14:20:00Z',
            read: true,
            issueId: 'ISS-2024-004'
        }
    ]
};

// Application State
let currentPage = 'dashboard';
let currentStep = 1;
let currentIssue = null;
let formData = {};
let touchStartY = 0;
let touchEndY = 0;
let slideIndex = 1;
let selectedRating = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 App loaded, initializing mobile features...');
    
    initializeNavigation();
    initializeDashboard();
    initializeReportForm();
    initializeTrackPage();
    initializeNotifications();
    initializeProfile();
    initializeModals();
    initializeTouchGestures();
    initializeCarousel();
    initializePWA();
    
    // Load initial page content
    showPage('dashboard');
    updateNotificationCount();
    
    console.log('✅ Mobile app ready!');
});

// Navigation System
function initializeNavigation() {
    console.log('🧭 Setting up navigation...');
    
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            showPage(page);
        });
    });
}

function showPage(pageId) {
    console.log(`📄 Showing page: ${pageId}`);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active state from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Activate nav item
    const targetNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (targetNav) {
        targetNav.classList.add('active');
    }
    
    currentPage = pageId;
    
    // Load page-specific content
    loadPageContent(pageId);
    
    // Reset scroll position
    window.scrollTo(0, 0);
}

function loadPageContent(pageId) {
    switch (pageId) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'report':
            resetReportForm();
            break;
        case 'track':
            loadIssuesList();
            break;
        case 'notifications':
            loadNotifications();
            break;
        case 'profile':
            loadProfile();
            break;
    }
}

// Dashboard Functions
function initializeDashboard() {
    console.log('🏠 Setting up dashboard...');
    
    // Quick action buttons are handled by onclick attributes in HTML
}

function loadDashboard() {
    console.log('📊 Loading dashboard content...');
    
    // Update stats
    updateDashboardStats();
    
    // Load recent activity
    loadRecentActivity();
    
    // Update announcements carousel
    updateCarousel();
}

function updateDashboardStats() {
    const openIssues = mockData.issues.filter(issue => issue.status === 'Open').length;
    const inProgressIssues = mockData.issues.filter(issue => issue.status === 'In Progress').length;
    
    const openElement = document.getElementById('openIssues');
    const inProgressElement = document.getElementById('inProgressIssues');
    
    if (openElement) openElement.textContent = openIssues;
    if (inProgressElement) inProgressElement.textContent = inProgressIssues;
}

function loadRecentActivity() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    const activities = [
        {
            icon: 'fas fa-tools',
            iconBg: 'var(--color-bg-6)',
            title: 'Work started on streetlight issue',
            time: '30 minutes ago'
        },
        {
            icon: 'fas fa-check-circle',
            iconBg: 'var(--color-bg-3)',
            title: 'Sidewalk repair completed',
            time: '2 hours ago'
        },
        {
            icon: 'fas fa-user-plus',
            iconBg: 'var(--color-bg-1)',
            title: 'New issue assigned to staff',
            time: '4 hours ago'
        }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background-color: ${activity.iconBg};">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Report Form Functions
function initializeReportForm() {
    console.log('📝 Setting up report form...');
    
    // Photo upload
    const photoDropZone = document.getElementById('photoDropZone');
    const photoInput = document.getElementById('photoInput');
    
    if (photoDropZone && photoInput) {
        photoDropZone.addEventListener('click', () => {
            photoInput.click();
        });
        
        photoInput.addEventListener('change', handlePhotoUpload);
    }
    
    // Address input
    const addressInput = document.getElementById('issueAddress');
    if (addressInput) {
        addressInput.addEventListener('input', handleAddressInput);
    }
}

function resetReportForm() {
    currentStep = 1;
    formData = {};
    updateProgressBar();
    showFormStep(1);
    
    // Clear form fields
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const form = document.querySelector('#report-page');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.type !== 'file') {
                input.value = '';
            }
        });
    }
    
    // Clear photo preview
    const photoPreview = document.getElementById('photoPreview');
    if (photoPreview) {
        photoPreview.innerHTML = '';
    }
    
    // Update navigation buttons
    updateFormNavigation();
}

function selectCategory(category) {
    console.log(`🏷️ Selected category: ${category}`);
    
    // Remove selection from all cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    const selectedCard = document.querySelector(`[data-category="${category}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    formData.category = category;
    updateFormNavigation();
}

function getCurrentLocation() {
    console.log('📍 Getting current location...');
    
    showToast('Getting your location...', 'info');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                formData.coordinates = { lat: latitude, lng: longitude };
                
                // Simulate reverse geocoding
                const mockAddress = '123 Current Street, Your City';
                document.getElementById('issueAddress').value = mockAddress;
                formData.address = mockAddress;
                
                updateLocationPreview(latitude, longitude);
                showToast('Location captured successfully!', 'success');
                updateFormNavigation();
            },
            (error) => {
                console.error('Location error:', error);
                showToast('Unable to get location. Please enter address manually.', 'warning');
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    } else {
        showToast('Location services not supported', 'error');
    }
}

function handleAddressInput(e) {
    const address = e.target.value;
    formData.address = address;
    
    if (address.length > 5) {
        // Simulate geocoding
        const mockCoords = { lat: 40.7128 + Math.random() * 0.01, lng: -74.0060 + Math.random() * 0.01 };
        formData.coordinates = mockCoords;
        updateLocationPreview(mockCoords.lat, mockCoords.lng);
    }
    
    updateFormNavigation();
}

function updateLocationPreview(lat, lng) {
    const locationPreview = document.getElementById('locationPreview');
    if (locationPreview) {
        locationPreview.innerHTML = `
            <div class="location-map" style="height: 200px; background: linear-gradient(45deg, var(--color-bg-1), var(--color-bg-3)); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px;">
                <i class="fas fa-map-marker-alt" style="font-size: 24px; color: var(--color-primary);"></i>
                <div style="font-size: 12px; color: var(--color-text-secondary); text-align: center;">
                    <div>📍 Location Captured</div>
                    <div>${lat.toFixed(6)}, ${lng.toFixed(6)}</div>
                </div>
            </div>
        `;
    }
}

function handlePhotoUpload(e) {
    const files = Array.from(e.target.files);
    const photoPreview = document.getElementById('photoPreview');
    
    if (!photoPreview) return;
    
    formData.photos = files;
    
    photoPreview.innerHTML = files.map((file, index) => {
        const url = URL.createObjectURL(file);
        return `<img src="${url}" alt="Photo ${index + 1}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid var(--color-border);">`;
    }).join('');
    
    if (files.length > 0) {
        showToast(`${files.length} photo(s) added`, 'success');
    }
}

function nextStep() {
    if (!validateCurrentStep()) {
        return;
    }
    
    if (currentStep === 4) {
        // Submit form
        submitIssue();
        return;
    }
    
    currentStep++;
    updateProgressBar();
    showFormStep(currentStep);
    updateFormNavigation();
    
    if (currentStep === 4) {
        buildReviewSection();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
        showFormStep(currentStep);
        updateFormNavigation();
    }
}

function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            if (!formData.category) {
                showToast('Please select a category', 'warning');
                return false;
            }
            break;
        case 2:
            if (!formData.address) {
                showToast('Please provide a location', 'warning');
                return false;
            }
            break;
        case 3:
            const title = document.getElementById('issueTitle').value;
            const description = document.getElementById('issueDescription').value;
            const priority = document.getElementById('issuePriority').value;
            
            if (!title.trim()) {
                showToast('Please provide an issue title', 'warning');
                return false;
            }
            if (!description.trim()) {
                showToast('Please provide a description', 'warning');
                return false;
            }
            
            formData.title = title;
            formData.description = description;
            formData.priority = priority;
            break;
    }
    return true;
}

function updateProgressBar() {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

function showFormStep(step) {
    document.querySelectorAll('.form-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    
    const targetStep = document.getElementById(`step-${step}`);
    if (targetStep) {
        targetStep.classList.add('active');
    }
}

function updateFormNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        if (currentStep === 1) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
    }
    
    if (nextBtn) {
        if (currentStep === 4) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Submit Issue';
            nextBtn.classList.remove('btn--outline');
            nextBtn.classList.add('btn--primary');
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
            nextBtn.classList.remove('btn--outline');
            nextBtn.classList.add('btn--primary');
        }
    }
}

function buildReviewSection() {
    const reviewSection = document.getElementById('reviewSection');
    if (!reviewSection) return;
    
    reviewSection.innerHTML = `
        <div class="review-item">
            <span class="review-label">Category</span>
            <span class="review-value">${formData.category}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Title</span>
            <span class="review-value">${formData.title}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Priority</span>
            <span class="review-value">${formData.priority}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Location</span>
            <span class="review-value">${formData.address}</span>
        </div>
        <div class="review-item">
            <span class="review-label">Photos</span>
            <span class="review-value">${formData.photos ? formData.photos.length : 0} attached</span>
        </div>
        ${formData.description ? `
            <div style="margin-top: 16px;">
                <div class="review-label">Description</div>
                <div style="margin-top: 8px; padding: 12px; background: var(--color-bg-1); border-radius: 8px; font-size: 14px;">
                    ${formData.description}
                </div>
            </div>
        ` : ''}
    `;
}

function submitIssue() {
    console.log('📤 Submitting issue...', formData);
    
    showToast('Submitting your issue...', 'info');
    
    // Simulate API call
    setTimeout(() => {
        const newIssue = {
            id: `ISS-2024-${String(mockData.issues.length + 1).padStart(3, '0')}`,
            title: formData.title,
            category: formData.category,
            status: 'Open',
            priority: formData.priority,
            description: formData.description,
            address: formData.address,
            coordinates: formData.coordinates,
            submittedDate: new Date().toISOString().split('T')[0],
            citizenName: 'You',
            timeline: [
                { date: new Date().toISOString().split('T')[0], event: 'Issue reported', status: 'submitted' }
            ]
        };
        
        mockData.issues.unshift(newIssue);
        
        showToast('Issue submitted successfully! 🎉', 'success');
        
        setTimeout(() => {
            showPage('track');
        }, 1500);
        
    }, 2000);
}

// Track Page Functions
function initializeTrackPage() {
    console.log('📋 Setting up track page...');
    
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        // Event listener added via onclick in HTML
    }
    
    const statusFilter = document.getElementById('statusFilterMobile');
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            loadIssuesList(e.target.value);
        });
    }
}

function toggleFilters() {
    const filtersSection = document.getElementById('filtersSection');
    if (filtersSection) {
        filtersSection.classList.toggle('hidden');
    }
}

function loadIssuesList(statusFilter = '') {
    console.log('📋 Loading issues list...');
    
    const issuesList = document.getElementById('issuesList');
    if (!issuesList) return;
    
    let filteredIssues = mockData.issues;
    if (statusFilter) {
        filteredIssues = mockData.issues.filter(issue => issue.status === statusFilter);
    }
    
    issuesList.innerHTML = filteredIssues.map(issue => `
        <div class="issue-card" data-issue-id="${issue.id}">
            <div class="issue-header" onclick="toggleIssueCard('${issue.id}')">
                <div class="issue-main-info">
                    <h3 class="issue-title">${issue.title}</h3>
                    <div class="issue-meta">
                        <span class="issue-id">${issue.id}</span>
                        <span class="issue-category">${issue.category}</span>
                    </div>
                </div>
                <div class="issue-status">
                    <span class="status-badge status-${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</span>
                    <i class="fas fa-chevron-down expand-icon"></i>
                </div>
            </div>
            <div class="issue-details">
                <div class="issue-description">${issue.description}</div>
                <div class="issue-timeline">
                    ${issue.timeline.map(event => `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <strong>${event.event}</strong> - ${formatDate(event.date)}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${issue.status === 'Under Review' ? `
                    <div class="issue-actions">
                        <button class="verify-btn" onclick="showVerifyWorkModal('${issue.id}')">
                            <i class="fas fa-check"></i> Verify Work
                        </button>
                    </div>
                ` : ''}
                ${issue.status === 'Closed' && !issue.rating ? `
                    <div class="issue-actions">
                        <button class="rate-btn" onclick="showRateServiceModal('${issue.id}')">
                            <i class="fas fa-star"></i> Rate Service
                        </button>
                    </div>
                ` : ''}
                ${issue.rating ? `
                    <div class="issue-actions">
                        <div style="text-align: center; padding: 12px; background: var(--color-bg-3); border-radius: 8px; color: var(--color-success); font-weight: 500;">
                            <i class="fas fa-star"></i> Rated: ${issue.rating}/5 stars
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function toggleIssueCard(issueId) {
    const card = document.querySelector(`[data-issue-id="${issueId}"]`);
    if (card) {
        card.classList.toggle('expanded');
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
}

// Notifications Functions
function initializeNotifications() {
    console.log('🔔 Setting up notifications...');
}

function loadNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = mockData.notifications.map(notification => `
        <div class="notification-item ${notification.read ? '' : 'unread'}" data-notification-id="${notification.id}">
            <div class="notification-header">
                <div class="notification-icon">
                    <i class="fas ${getNotificationIcon(notification.type)}"></i>
                </div>
                <div class="notification-title">${notification.title}</div>
                <div class="notification-time">${formatTimeAgo(notification.timestamp)}</div>
            </div>
            <div class="notification-message">${notification.message}</div>
        </div>
    `).join('');
    
    // Add swipe-to-read functionality
    document.querySelectorAll('.notification-item').forEach(item => {
        addSwipeToRead(item);
    });
}

function getNotificationIcon(type) {
    const icons = {
        'update': 'fa-info-circle',
        'completion': 'fa-check-circle',
        'resolved': 'fa-thumbs-up',
        'assigned': 'fa-user-plus'
    };
    return icons[type] || 'fa-bell';
}

function formatTimeAgo(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
}

function updateNotificationCount() {
    const unreadCount = mockData.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationCount');
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

function markAllAsRead() {
    mockData.notifications.forEach(notification => {
        notification.read = true;
    });
    loadNotifications();
    updateNotificationCount();
    showToast('All notifications marked as read', 'success');
}

// Profile Functions
function initializeProfile() {
    console.log('👤 Setting up profile...');
}

function loadProfile() {
    // Profile content is static in HTML
}

function showSettings() {
    showToast('Settings page would open here', 'info');
}

function showHelp() {
    showToast('Help & Support page would open here', 'info');
}

function showAbout() {
    showToast('About page would open here', 'info');
}

function logout() {
    if (confirm('Are you sure you want to sign out?')) {
        showToast('Signing out...', 'info');
        setTimeout(() => {
            showToast('You have been signed out', 'success');
        }, 1000);
    }
}

// Modal Functions
function initializeModals() {
    console.log('🔲 Setting up modals...');
    
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Setup rating stars
    document.querySelectorAll('#ratingStars i').forEach((star, index) => {
        star.addEventListener('click', () => {
            setRating(index + 1);
        });
    });
}

function showModal(modalId) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    
    if (overlay && modal) {
        document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        overlay.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.classList.add('hidden');
            document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
            
            // Restore body scroll
            document.body.style.overflow = '';
        }, 300);
    }
}

function showVerifyWorkModal(issueId) {
    currentIssue = issueId;
    showModal('verifyWorkModal');
}

function verifyWork(isResolved) {
    const issue = mockData.issues.find(i => i.id === currentIssue);
    if (issue) {
        if (isResolved) {
            issue.status = 'Closed';
            showToast('Work verified and issue closed!', 'success');
            setTimeout(() => showRateServiceModal(currentIssue), 1000);
        } else {
            issue.status = 'In Progress';
            issue.timeline.push({
                date: new Date().toISOString().split('T')[0],
                event: 'Work needs revision',
                status: 'revision'
            });
            showToast('Issue reopened for additional work', 'info');
        }
        loadIssuesList();
    }
    closeModal();
}

function showRateServiceModal(issueId) {
    currentIssue = issueId;
    selectedRating = 0;
    updateRatingStars();
    showModal('rateServiceModal');
}

function setRating(rating) {
    selectedRating = rating;
    updateRatingStars();
}

function updateRatingStars() {
    document.querySelectorAll('#ratingStars i').forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitRating() {
    if (selectedRating === 0) {
        showToast('Please select a rating', 'warning');
        return;
    }
    
    const issue = mockData.issues.find(i => i.id === currentIssue);
    if (issue) {
        issue.rating = selectedRating;
        const comments = document.getElementById('ratingComments').value;
        if (comments) {
            issue.comments = comments;
        }
        
        showToast(`Thank you for rating our service! (${selectedRating}/5 stars)`, 'success');
        loadIssuesList();
    }
    
    closeModal();
}

// Touch Gestures
function initializeTouchGestures() {
    console.log('👆 Setting up touch gestures...');
    
    // Pull to refresh simulation
    let startY = 0;
    let startTime = 0;
    
    document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startTime = Date.now();
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        const endTime = Date.now();
        const deltaY = endY - startY;
        const deltaTime = endTime - startTime;
        
        // Pull to refresh (swipe down from top)
        if (window.scrollY === 0 && deltaY > 100 && deltaTime < 500) {
            simulatePullToRefresh();
        }
    }, { passive: true });
}

function simulatePullToRefresh() {
    showToast('Refreshing...', 'info');
    
    // Simulate refresh
    setTimeout(() => {
        loadPageContent(currentPage);
        showToast('Content updated!', 'success');
    }, 1500);
}

function addSwipeToRead(element) {
    let startX = 0;
    
    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    element.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;
        
        if (deltaX > 100) {
            // Swipe left to mark as read
            const notificationId = parseInt(element.dataset.notificationId);
            const notification = mockData.notifications.find(n => n.id === notificationId);
            if (notification && !notification.read) {
                notification.read = true;
                element.classList.remove('unread');
                updateNotificationCount();
                showToast('Marked as read', 'success');
            }
        }
    }, { passive: true });
}

// Carousel Functions
function initializeCarousel() {
    console.log('🎠 Setting up carousel...');
    
    // Auto-advance carousel
    setInterval(() => {
        const slides = document.querySelectorAll('.announcement-slide');
        if (slides.length > 1) {
            slideIndex = slideIndex >= slides.length ? 1 : slideIndex + 1;
            currentSlide(slideIndex);
        }
    }, 5000);
}

function currentSlide(n) {
    slideIndex = n;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.announcement-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex - 1) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex - 1) {
            dot.classList.add('active');
        }
    });
}

// PWA Functions
function initializePWA() {
    console.log('📱 Setting up PWA features...');
    
    // Register service worker (simulated)
    if ('serviceWorker' in navigator) {
        console.log('Service Worker supported');
        // Would register actual service worker here
    }
    
    // Add to home screen prompt
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install prompt after a delay
        setTimeout(() => {
            if (confirm('Install this app to your home screen for quick access?')) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('PWA install accepted');
                        showToast('App installed successfully!', 'success');
                    }
                    deferredPrompt = null;
                });
            }
        }, 10000);
    });
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const iconClass = {
        'success': 'fa-check-circle',
        'error': 'fa-exclamation-circle',
        'warning': 'fa-exclamation-triangle',
        'info': 'fa-info-circle'
    }[type] || 'fa-info-circle';
    
    toast.innerHTML = `
        <i class="fas ${iconClass}"></i>
        <div class="toast-content">${message}</div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; cursor: pointer; color: inherit; padding: 4px;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Global function exports for onclick handlers
window.showPage = showPage;
window.selectCategory = selectCategory;
window.getCurrentLocation = getCurrentLocation;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.toggleFilters = toggleFilters;
window.toggleIssueCard = toggleIssueCard;
window.showVerifyWorkModal = showVerifyWorkModal;
window.verifyWork = verifyWork;
window.showRateServiceModal = showRateServiceModal;
window.submitRating = submitRating;
window.currentSlide = currentSlide;
window.closeModal = closeModal;
window.markAllAsRead = markAllAsRead;
window.showSettings = showSettings;
window.showHelp = showHelp;
window.showAbout = showAbout;
window.logout = logout;

console.log('🎉 Mobile app initialization complete!');