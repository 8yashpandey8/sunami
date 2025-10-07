// Matri Connect Complete - Comprehensive Healthcare Management System
// Unified Interface for ASHA Workers, PHC Doctors, PHC Nurses, and PHC Administrators

class MatriConnectComplete {
    constructor() {
        this.currentUser = null;
        this.currentLanguage = 'en';
        this.currentView = 'dashboard';
        this.currentPatient = null;
        this.currentChild = null;
        
        // Initialize comprehensive application data
        this.users = [
            {
                id: "ASHA001",
                name: "Priya Devi",
                role: "asha",
                phone: "9876543210",
                village: "Rampur",
                block: "Baruipur",
                district: "South 24 Parganas",
                state: "West Bengal",
                phcId: "PHC001",
                assignedPopulation: 1200,
                assignedFamilies: 240,
                joiningDate: "2020-01-15",
                lastTraining: "2024-08-15",
                performance: {
                    monthlyTarget: 25,
                    achieved: 23,
                    efficiency: 92
                },
                password: "password123"
            },
            {
                id: "PHC001",
                name: "Dr. Rajesh Kumar",
                role: "phc_doctor",
                phone: "9876543200",
                phcName: "Baruipur PHC",
                block: "Baruipur",
                district: "South 24 Parganas",
                state: "West Bengal",
                qualification: "MBBS",
                experience: "8 years",
                assignedASHAs: ["ASHA001", "ASHA002", "ASHA003"],
                specialization: "General Medicine",
                password: "password123"
            },
            {
                id: "PHC002",
                name: "Sister Meena Roy",
                role: "phc_nurse",
                phone: "9876543201",
                phcName: "Baruipur PHC",
                qualification: "GNM",
                experience: "12 years",
                responsibilities: ["Immunization", "ANC", "PNC", "Training"],
                password: "password123"
            },
            {
                id: "ADMIN001",
                name: "Dr. Amit Sharma",
                role: "phc_admin",
                designation: "Chief Medical Officer",
                phone: "9876543100",
                email: "amit.sharma@health.wb.gov.in",
                district: "South 24 Parganas",
                state: "West Bengal",
                managedPHCs: ["PHC001", "PHC002", "PHC003"],
                permissions: ["all_access", "budget_control", "staff_management", "quality_oversight"],
                experience: "15 years",
                qualification: "MBBS, MPH",
                password: "admin123"
            }
        ];

        // PHC Network Data
        this.managedPHCs = [
            {
                id: "PHC001",
                name: "Baruipur Primary Health Center",
                address: "Block Road, Baruipur, South 24 Parganas",
                district: "South 24 Parganas",
                state: "West Bengal",
                establishedYear: "1985",
                bedCapacity: 6,
                catchmentPopulation: 30000,
                services: ["OPD", "Emergency", "Maternity", "Immunization", "Lab"],
                coordinates: {latitude: 22.3647, longitude: 88.4328},
                status: "operational",
                lastInspection: "2024-08-15",
                accreditation: "NQAS Level 2",
                monthlyStats: {
                    opdVisits: 1200,
                    emergencies: 45,
                    deliveries: 38,
                    immunizations: 250
                }
            },
            {
                id: "PHC002",
                name: "Kultali Primary Health Center",
                address: "Main Road, Kultali, South 24 Parganas",
                district: "South 24 Parganas",
                state: "West Bengal",
                establishedYear: "1992",
                bedCapacity: 4,
                catchmentPopulation: 25000,
                services: ["OPD", "Maternity", "Immunization"],
                coordinates: {latitude: 22.2842, longitude: 88.5476},
                status: "operational",
                lastInspection: "2024-09-01",
                accreditation: "NQAS Level 1",
                monthlyStats: {
                    opdVisits: 800,
                    emergencies: 25,
                    deliveries: 28,
                    immunizations: 180
                }
            },
            {
                id: "PHC003",
                name: "Canning Primary Health Center",
                address: "Hospital Road, Canning, South 24 Parganas",
                district: "South 24 Parganas",
                state: "West Bengal",
                establishedYear: "1978",
                bedCapacity: 8,
                catchmentPopulation: 40000,
                services: ["OPD", "Emergency", "Maternity", "Immunization", "Lab", "X-ray"],
                coordinates: {latitude: 22.3096, longitude: 88.6739},
                status: "operational",
                lastInspection: "2024-07-20",
                accreditation: "NQAS Level 3",
                monthlyStats: {
                    opdVisits: 1800,
                    emergencies: 65,
                    deliveries: 54,
                    immunizations: 370
                }
            }
        ];

        this.networkStatistics = {
            totalPHCs: 3,
            totalStaff: 45,
            totalASHAs: 75,
            totalPatients: 15000,
            monthlyDeliveries: 120,
            monthlyImmunizations: 800,
            catchmentPopulation: 95000,
            averageOPDVisits: 2500
        };

        this.budgetOverview = {
            annualBudget: 15000000,
            utilized: 8500000,
            remaining: 6500000,
            utilizationRate: 56.7,
            categories: {
                staff: {
                    allocated: 8000000,
                    spent: 4800000,
                    percentage: 60
                },
                medicines: {
                    allocated: 3000000,
                    spent: 1800000,
                    percentage: 60
                },
                equipment: {
                    allocated: 2000000,
                    spent: 900000,
                    percentage: 45
                },
                infrastructure: {
                    allocated: 1500000,
                    spent: 700000,
                    percentage: 47
                },
                training: {
                    allocated: 500000,
                    spent: 300000,
                    percentage: 60
                }
            }
        };

        this.patients = [
            {
                id: "PAT001",
                name: "Meera Devi",
                husbandName: "Rajesh Kumar",
                age: 25,
                phoneNumber: "9876543210",
                address: "House No. 123, Village Road",
                village: "Rampur",
                block: "Baruipur",
                district: "South 24 Parganas",
                aadharNumber: "1234-5678-9012",
                bankAccount: "12345678901",
                ifscCode: "SBIN0001234",
                religion: "Hindu",
                caste: "SC",
                education: "Primary",
                occupation: "Housewife",
                economicStatus: "BPL",
                pregnancyNumber: 1,
                liveChildren: 0,
                previousAbortions: 0,
                lmpDate: "2024-04-01",
                eddDate: "2025-01-06",
                pregnancyStatus: "pregnant",
                riskFactors: ["first_pregnancy", "young_age"],
                height: "152",
                bloodGroup: "O+",
                registrationDate: "2024-05-15",
                ashaId: "ASHA001",
                phcId: "PHC001",
                isHighRisk: false,
                assignedDoctor: "PHC001",
                lastVisit: "2024-09-15"
            },
            {
                id: "PAT002",
                name: "Kavita Singh",
                husbandName: "Amit Singh",
                age: 28,
                phoneNumber: "9876543212",
                address: "House No. 67, Main Street",
                village: "Shyampur",
                pregnancyStatus: "delivered",
                deliveryDate: "2024-08-15",
                childId: "CHILD001",
                pregnancyNumber: 2,
                liveChildren: 1,
                ashaId: "ASHA001",
                phcId: "PHC001",
                bloodGroup: "A+",
                height: "158"
            }
        ];

        this.children = [
            {
                id: "CHILD001",
                motherId: "PAT002",
                name: "Baby Singh",
                gender: "male",
                birthDate: "2024-08-15",
                birthWeight: "2.8",
                birthLength: "48",
                placeOfBirth: "Hospital",
                deliveryType: "normal",
                complications: "none",
                currentWeight: "3.2",
                currentLength: "52",
                nutritionalStatus: "normal",
                ashaId: "ASHA001",
                phcId: "PHC001"
            }
        ];

        this.inventory = {
            medicines: [
                {
                    id: "MED001",
                    name: "IFA Tablets",
                    category: "Supplement",
                    currentStock: 5000,
                    minimumStock: 1000,
                    expiryDate: "2025-12-31",
                    batchNumber: "IFA2024001",
                    supplier: "Government Supply",
                    costPerUnit: 2.5,
                    phcDistribution: {
                        "PHC001": 2000,
                        "PHC002": 1500,
                        "PHC003": 1500
                    }
                },
                {
                    id: "MED002",
                    name: "Calcium Tablets",
                    category: "Supplement",
                    currentStock: 3000,
                    minimumStock: 500,
                    expiryDate: "2025-10-31",
                    batchNumber: "CAL2024002",
                    supplier: "Government Supply",
                    costPerUnit: 3.0,
                    phcDistribution: {
                        "PHC001": 1200,
                        "PHC002": 900,
                        "PHC003": 900
                    }
                }
            ],
            vaccines: [
                {
                    id: "VAC001",
                    name: "BCG",
                    currentStock: 500,
                    minimumStock: 50,
                    expiryDate: "2025-03-31",
                    batchNumber: "BCG2024001",
                    storageTemp: "2-8°C",
                    manufacturer: "Serum Institute",
                    phcDistribution: {
                        "PHC001": 200,
                        "PHC002": 150,
                        "PHC003": 150
                    }
                }
            ]
        };

        this.trainingPrograms = [
            {
                id: "TRN001",
                title: "Advanced ANC Care Protocols",
                targetAudience: "ASHA Workers",
                duration: "2 days",
                scheduled: "2024-10-15",
                facilitator: "Dr. Meera Sen",
                enrolledParticipants: 25,
                status: "scheduled",
                location: "PHC001 Training Hall",
                topics: ["High-risk pregnancy identification", "Emergency referrals", "Data collection"]
            }
        ];

        this.emergencyAlerts = [
            {
                id: "ALERT001",
                type: "critical_patient",
                message: "High-risk pregnancy case referred from ASHA001",
                phcId: "PHC001",
                patientId: "PAT001",
                timestamp: "2024-10-07 14:30:00",
                status: "active",
                priority: "high",
                assignedTo: "Dr. Rajesh Kumar"
            }
        ];

        this.visits = [
            {
                id: "VISIT001",
                patientId: "PAT001",
                visitType: "anc",
                visitDate: "2024-10-15",
                status: "scheduled",
                purpose: "Second ANC checkup",
                conductedBy: "ASHA001"
            }
        ];

        this.referrals = [
            {
                id: "REF001",
                patientId: "PAT001",
                referredBy: "ASHA001",
                referredTo: "PHC001",
                referralDate: "2024-09-20",
                reason: "High blood pressure in pregnancy",
                urgency: "high",
                status: "pending",
                symptoms: ["Headache", "Blurred vision", "High BP 150/100"],
                actionTaken: "Immediate referral for evaluation",
                expectedDate: "2024-09-21"
            }
        ];

        this.emergencyContacts = [
            {
                service: "Ambulance",
                number: "108",
                type: "emergency"
            },
            {
                service: "District Hospital",
                number: "03324567890",
                type: "referral"
            },
            {
                service: "Blood Bank",
                number: "03324567891",
                type: "support"
            },
            {
                service: "Police",
                number: "100",
                type: "emergency"
            },
            {
                service: "Fire Service",
                number: "101",
                type: "emergency"
            }
        ];

        this.translations = {
            en: {
                appTitle: "Matri Connect Complete",
                appSubtitle: "Complete Maternal & Child Health Management System",
                userId: "User ID",
                userRole: "Role",
                password: "Password",
                login: "Sign In",
                logout: "Logout",
                dashboard: "Dashboard",
                networkOverview: "Network Overview",
                staffManagement: "Staff Management",
                financialManagement: "Financial Management",
                qualityAssurance: "Quality Assurance",
                emergencyCenter: "Emergency Center",
                patients: "Patients",
                children: "Children",
                visits: "Visits",
                referrals: "Referrals",
                schemes: "Schemes",
                reports: "Reports",
                inventory: "Inventory",
                training: "Training",
                ashaWorkers: "ASHA Workers",
                emergency: "Emergency",
                addPatient: "Add Patient",
                addChild: "Add Child",
                scheduleVisit: "Schedule Visit",
                search: "Search",
                all: "All",
                pregnant: "Pregnant",
                delivered: "Delivered",
                none: "None",
                male: "Male",
                female: "Female",
                save: "Save",
                cancel: "Cancel",
                edit: "Edit",
                delete: "Delete",
                completed: "Completed",
                scheduled: "Scheduled",
                pending: "Pending",
                approved: "Approved",
                high: "High",
                medium: "Medium",
                low: "Low",
                asha: "ASHA Worker",
                phc_doctor: "PHC Doctor",
                phc_nurse: "PHC Nurse",
                phc_admin: "PHC Administrator",
                operational: "Operational",
                resolved: "Resolved"
            },
            hi: {
                appTitle: "मातृ कनेक्ट सम्पूर्ण",
                dashboard: "डैशबोर्ड",
                patients: "मरीज़",
                ashaWorkers: "आशा कार्यकर्ता"
            },
            bn: {
                appTitle: "মাতৃ কানেক্ট সম্পূর্ণ",
                dashboard: "ড্যাশবোর্ড",
                patients: "রোগী",
                ashaWorkers: "আশা কর্মী"
            }
        };

        this.rolePermissions = {
            asha: ['dashboard', 'patients', 'children', 'visits', 'referrals', 'schemes', 'reports', 'emergency'],
            phc_doctor: ['dashboard', 'patients', 'children', 'visits', 'referrals', 'ashaWorkers', 'inventory', 'training', 'reports', 'emergency'],
            phc_nurse: ['dashboard', 'patients', 'children', 'visits', 'referrals', 'ashaWorkers', 'inventory', 'training', 'reports', 'emergency'],
            phc_admin: ['dashboard', 'networkOverview', 'staffManagement', 'financialManagement', 'qualityAssurance', 'emergencyCenter', 'patients', 'children', 'visits', 'referrals', 'ashaWorkers', 'inventory', 'training', 'reports', 'schemes', 'emergency']
        };

        this.charts = {};
        this.init();
    }

    init() {
        // Force light theme
        document.documentElement.setAttribute('data-color-scheme', 'light');
        this.setupEventListeners();
        this.showView('login');
    }

    // Event Listeners
    setupEventListeners() {
        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));

        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                this.handleNavigation(e);
            }
            if (e.target.classList.contains('filter-tab')) {
                this.handleFilterTab(e);
            }
        });

        // Language selector
        document.getElementById('languageSelector').addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Forms
        document.getElementById('addPatientForm').addEventListener('submit', (e) => this.handleAddPatient(e));
        document.getElementById('addChildForm').addEventListener('submit', (e) => this.handleAddChild(e));
        document.getElementById('scheduleVisitForm').addEventListener('submit', (e) => this.handleScheduleVisit(e));

        // Search functionality
        const patientSearch = document.getElementById('patientSearch');
        if (patientSearch) {
            patientSearch.addEventListener('input', (e) => this.searchPatients(e.target.value));
        }

        const childSearch = document.getElementById('childSearch');
        if (childSearch) {
            childSearch.addEventListener('input', (e) => this.searchChildren(e.target.value));
        }

        const staffSearch = document.getElementById('staffSearch');
        if (staffSearch) {
            staffSearch.addEventListener('input', (e) => this.searchStaff(e.target.value));
        }

        const ashaSearch = document.getElementById('ashaSearch');
        if (ashaSearch) {
            ashaSearch.addEventListener('input', (e) => this.searchASHA(e.target.value));
        }
    }

    // Authentication
    handleLogin(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value.trim();
        const userRole = document.getElementById('userRole').value;
        const password = document.getElementById('password').value.trim();

        if (!userId || !userRole || !password) {
            this.showAlert('Please fill in all fields', 'error');
            return;
        }

        // Find user
        const user = this.users.find(u => u.id === userId && u.role === userRole);
        if (user && user.password === password) {
            this.currentUser = user;
            this.showView('main');
            this.setupUserInterface();
            this.showView('dashboard');
            this.updateDashboard();
        } else {
            this.showAlert('Invalid credentials', 'error');
        }
    }

    logout() {
        this.currentUser = null;
        this.currentPatient = null;
        this.currentChild = null;
        this.showView('login');
        this.clearForms();
        // Destroy charts
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.charts = {};
    }

    // User Interface Setup
    setupUserInterface() {
        this.updateUserDisplay();
        this.setupNavigation();
        this.updateHeaderStats();
    }

    updateUserDisplay() {
        document.getElementById('userNameDisplay').textContent = this.currentUser.name;
        document.getElementById('userRoleDisplay').textContent = this.t(this.currentUser.role);
        document.getElementById('userRoleDisplay').className = `role-badge ${this.currentUser.role}`;
    }

    setupNavigation() {
        const navigationLinks = document.getElementById('navigationLinks');
        const permissions = this.rolePermissions[this.currentUser.role] || [];
        
        const navItems = [
            { key: 'dashboard', view: 'dashboard', icon: '📊' },
            { key: 'networkOverview', view: 'networkOverview', icon: '🌐' },
            { key: 'staffManagement', view: 'staffManagement', icon: '👥' },
            { key: 'financialManagement', view: 'financialManagement', icon: '💰' },
            { key: 'qualityAssurance', view: 'qualityAssurance', icon: '⭐' },
            { key: 'emergencyCenter', view: 'emergencyCenter', icon: '🚨' },
            { key: 'patients', view: 'patients', icon: '👤' },
            { key: 'children', view: 'children', icon: '👶' },
            { key: 'visits', view: 'visits', icon: '🏥' },
            { key: 'referrals', view: 'referrals', icon: '📋' },
            { key: 'ashaWorkers', view: 'ashaWorkers', icon: '👩‍⚕️' },
            { key: 'inventory', view: 'inventory', icon: '📦' },
            { key: 'training', view: 'training', icon: '📚' },
            { key: 'schemes', view: 'schemes', icon: '💸' },
            { key: 'reports', view: 'reports', icon: '📈' },
            { key: 'emergency', view: 'emergency', icon: '☎️' }
        ];

        navigationLinks.innerHTML = navItems
            .filter(item => permissions.includes(item.view))
            .map(item => `
                <button class="nav-link" data-view="${item.view}" data-translate="${item.key}">
                    ${item.icon} ${this.t(item.key)}
                </button>
            `).join('');
    }

    updateHeaderStats() {
        const patientCount = this.patients.length;
        const alertCount = this.getAlertCount();
        
        document.getElementById('headerPatientCount').textContent = patientCount;
        document.getElementById('headerAlertCount').textContent = alertCount;
        
        if (alertCount > 0) {
            document.getElementById('headerAlerts').classList.add('alert');
        }
    }

    getAlertCount() {
        let alerts = 0;
        
        // High risk patients
        alerts += this.patients.filter(p => p.isHighRisk).length;
        
        // Pending referrals
        alerts += this.referrals.filter(r => r.status === 'pending' && r.urgency === 'high').length;
        
        // Low stock items
        if (this.hasInventoryAccess()) {
            alerts += this.getLowStockItems().length;
        }
        
        return alerts;
    }

    // View Management
    showView(viewName) {
        if (viewName === 'login') {
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('mainApp').classList.add('hidden');
            return;
        }

        if (viewName === 'main') {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('mainApp').classList.remove('hidden');
            return;
        }

        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const navLink = document.querySelector(`[data-view="${viewName}"]`);
        if (navLink) navLink.classList.add('active');

        // Show/hide views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        const targetView = document.getElementById(`${viewName}View`);
        if (targetView) targetView.classList.add('active');

        this.currentView = viewName;
        this.loadViewData(viewName);
    }

    loadViewData(viewName) {
        switch (viewName) {
            case 'dashboard':
                this.updateDashboard();
                break;
            case 'networkOverview':
                this.loadNetworkOverview();
                break;
            case 'staffManagement':
                this.loadStaffManagement();
                break;
            case 'financialManagement':
                this.loadFinancialManagement();
                break;
            case 'qualityAssurance':
                this.loadQualityAssurance();
                break;
            case 'emergencyCenter':
                this.loadEmergencyCenter();
                break;
            case 'patients':
                this.loadPatients();
                break;
            case 'children':
                this.loadChildren();
                break;
            case 'visits':
                this.loadVisits();
                break;
            case 'referrals':
                this.loadReferrals();
                break;
            case 'ashaWorkers':
                this.loadASHAWorkers();
                break;
            case 'inventory':
                this.loadInventory();
                break;
            case 'training':
                this.loadTraining();
                break;
            case 'schemes':
                this.loadSchemes();
                break;
            case 'reports':
                this.loadReports();
                break;
            case 'emergency':
                this.loadEmergencyContacts();
                break;
        }
    }

    handleNavigation(e) {
        const view = e.target.getAttribute('data-view');
        if (view && this.hasPermission(view)) {
            this.showView(view);
        }
    }

    hasPermission(view) {
        const permissions = this.rolePermissions[this.currentUser.role] || [];
        return permissions.includes(view);
    }

    hasInventoryAccess() {
        return this.currentUser.role !== 'asha';
    }

    // Dashboard
    updateDashboard() {
        this.updateWelcomeSection();
        this.updateDashboardStats();
        this.setupDashboardSections();
    }

    updateWelcomeSection() {
        document.getElementById('welcomeText').textContent = `Welcome, ${this.currentUser.name}!`;
        const userInfo = this.currentUser.village || this.currentUser.phcName || this.currentUser.district || '';
        const userLocation = this.currentUser.block || this.currentUser.district || '';
        document.getElementById('userInfoText').textContent = `${userInfo} • ${userLocation}`;
    }

    updateDashboardStats() {
        const statsContainer = document.getElementById('dashboardStats');
        
        if (this.currentUser.role === 'asha') {
            this.setupASHAStats(statsContainer);
        } else if (this.currentUser.role === 'phc_admin') {
            this.setupAdminStats(statsContainer);
        } else {
            this.setupPHCStats(statsContainer);
        }
    }

    setupASHAStats(container) {
        const stats = [
            { label: 'Total Patients', value: this.patients.filter(p => p.ashaId === this.currentUser.id).length },
            { label: 'Pregnant Women', value: this.patients.filter(p => p.ashaId === this.currentUser.id && p.pregnancyStatus === 'pregnant').length },
            { label: 'Children', value: this.children.filter(c => c.ashaId === this.currentUser.id).length },
            { label: 'Upcoming Visits', value: this.visits.filter(v => v.status === 'scheduled').length },
            { label: 'High Risk Cases', value: this.patients.filter(p => p.ashaId === this.currentUser.id && p.isHighRisk).length },
            { label: 'Monthly Target', value: this.currentUser.performance?.monthlyTarget || 0 }
        ];

        container.innerHTML = stats.map(stat => `
            <div class="stat-card">
                <h3>${stat.label}</h3>
                <div class="stat-number">${stat.value}</div>
            </div>
        `).join('');
    }

    setupPHCStats(container) {
        const stats = [
            { label: 'Total Patients', value: this.patients.length },
            { label: 'ASHA Workers', value: this.users.filter(u => u.role === 'asha').length },
            { label: 'Pending Referrals', value: this.referrals.filter(r => r.status === 'pending').length },
            { label: 'Training Sessions', value: this.trainingPrograms.filter(t => t.status === 'scheduled').length },
            { label: 'Emergency Cases', value: this.referrals.filter(r => r.urgency === 'high').length },
            { label: 'Monthly Visits', value: this.visits.length }
        ];

        container.innerHTML = stats.map(stat => `
            <div class="stat-card">
                <h3>${stat.label}</h3>
                <div class="stat-number">${stat.value}</div>
            </div>
        `).join('');
    }

    setupAdminStats(container) {
        const stats = [
            { label: 'Total PHCs', value: this.networkStatistics.totalPHCs },
            { label: 'Total Population', value: this.networkStatistics.catchmentPopulation.toLocaleString() },
            { label: 'Total Staff', value: this.networkStatistics.totalStaff },
            { label: 'Monthly OPD', value: this.networkStatistics.averageOPDVisits.toLocaleString() },
            { label: 'Budget Utilized', value: `${this.budgetOverview.utilizationRate}%` },
            { label: 'Emergency Alerts', value: this.emergencyAlerts.filter(a => a.status === 'active').length }
        ];

        container.innerHTML = stats.map(stat => `
            <div class="stat-card">
                <h3>${stat.label}</h3>
                <div class="stat-number">${stat.value}</div>
            </div>
        `).join('');
    }

    setupDashboardSections() {
        const sectionsContainer = document.getElementById('dashboardSections');
        
        if (this.currentUser.role === 'asha') {
            sectionsContainer.innerHTML = `
                <div class="recent-activities">
                    <h3>Recent Activities</h3>
                    <div id="recentActivitiesList" class="activities-list">
                        <p>No recent activities</p>
                    </div>
                </div>
                <div class="quick-actions">
                    <h3>Quick Actions</h3>
                    <div class="quick-actions-buttons">
                        <button class="btn btn--primary" onclick="app.showAddPatientModal()">Add Patient</button>
                        <button class="btn btn--secondary" onclick="app.showAddChildModal()">Add Child</button>
                        <button class="btn btn--outline" onclick="app.showScheduleVisitModal()">Schedule Visit</button>
                        <button class="btn btn--outline" onclick="app.showView('reports')">View Reports</button>
                    </div>
                </div>
            `;
        } else if (this.currentUser.role === 'phc_admin') {
            sectionsContainer.innerHTML = `
                <div class="admin-overview">
                    <h3>Network Performance</h3>
                    <div class="chart-container" style="position: relative; height: 300px;">
                        <canvas id="networkPerformanceChart"></canvas>
                    </div>
                </div>
                <div class="urgent-actions">
                    <h3>Urgent Actions Required</h3>
                    <div id="adminUrgentActions" class="actions-list">
                        <div class="action-item">
                            <div class="action-title">Review Budget Allocation</div>
                            <div class="action-time">Today</div>
                        </div>
                        <div class="action-item">
                            <div class="action-title">Staff Performance Review Due</div>
                            <div class="action-time">This Week</div>
                        </div>
                    </div>
                </div>
            `;
            this.setupNetworkPerformanceChart();
        }
    }

    setupNetworkPerformanceChart() {
        const ctx = document.getElementById('networkPerformanceChart');
        if (!ctx) return;

        if (this.charts.networkPerformance) {
            this.charts.networkPerformance.destroy();
        }

        this.charts.networkPerformance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'OPD Visits',
                        data: [2200, 2400, 2300, 2500, 2600, 2500],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Deliveries',
                        data: [110, 125, 115, 130, 120, 120],
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Network Overview (Admin)
    loadNetworkOverview() {
        this.updateNetworkStatistics();
        this.loadPHCGrid();
    }

    updateNetworkStatistics() {
        document.getElementById('totalPHCs').textContent = this.networkStatistics.totalPHCs;
        document.getElementById('totalPopulation').textContent = this.networkStatistics.catchmentPopulation.toLocaleString();
        document.getElementById('totalStaff').textContent = this.networkStatistics.totalStaff;
        document.getElementById('monthlyOPD').textContent = this.networkStatistics.averageOPDVisits.toLocaleString();
    }

    loadPHCGrid() {
        const phcGrid = document.getElementById('phcGrid');
        phcGrid.innerHTML = this.managedPHCs.map(phc => `
            <div class="phc-card" onclick="app.viewPHCDetails('${phc.id}')">
                <div class="phc-card-header">
                    <h3 class="phc-name">${phc.name}</h3>
                    <div class="phc-location">${phc.address}</div>
                </div>
                <div class="phc-card-body">
                    <div class="phc-info">
                        <div class="phc-info-item">
                            <div class="phc-info-label">Population</div>
                            <div class="phc-info-value">${phc.catchmentPopulation.toLocaleString()}</div>
                        </div>
                        <div class="phc-info-item">
                            <div class="phc-info-label">Bed Capacity</div>
                            <div class="phc-info-value">${phc.bedCapacity}</div>
                        </div>
                        <div class="phc-info-item">
                            <div class="phc-info-label">Monthly OPD</div>
                            <div class="phc-info-value">${phc.monthlyStats.opdVisits}</div>
                        </div>
                        <div class="phc-info-item">
                            <div class="phc-info-label">Accreditation</div>
                            <div class="phc-info-value">${phc.accreditation}</div>
                        </div>
                        <div class="phc-info-item">
                            <div class="phc-info-label">Status</div>
                            <div class="phc-info-value">
                                <span class="status-badge ${phc.status}">${this.t(phc.status)}</span>
                            </div>
                        </div>
                        <div class="phc-info-item">
                            <div class="phc-info-label">Last Inspection</div>
                            <div class="phc-info-value">${this.formatDate(phc.lastInspection)}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Staff Management (Admin)
    loadStaffManagement() {
        this.loadStaffList();
    }

    loadStaffList(filter = 'all', searchTerm = '') {
        const staffList = document.getElementById('staffList');
        let filteredStaff = [...this.users];

        // Apply filters
        if (filter !== 'all') {
            if (filter === 'doctors') {
                filteredStaff = filteredStaff.filter(u => u.role === 'phc_doctor');
            } else if (filter === 'nurses') {
                filteredStaff = filteredStaff.filter(u => u.role === 'phc_nurse');
            } else if (filter === 'asha') {
                filteredStaff = filteredStaff.filter(u => u.role === 'asha');
            } else if (filter === 'performance') {
                filteredStaff = filteredStaff.filter(u => u.performance && u.performance.efficiency < 80);
            }
        }

        // Apply search
        if (searchTerm) {
            filteredStaff = filteredStaff.filter(staff => 
                staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                staff.phone.includes(searchTerm)
            );
        }

        if (filteredStaff.length === 0) {
            staffList.innerHTML = '<div class="empty-state"><h3>No staff found</h3><p>Try adjusting your filters</p></div>';
            return;
        }

        staffList.innerHTML = filteredStaff.map(staff => `
            <div class="staff-card" onclick="app.viewStaffDetails('${staff.id}')">
                <div class="staff-card-header">
                    <h3 class="staff-name">${staff.name}</h3>
                    <div class="staff-role">${this.t(staff.role)}</div>
                </div>
                <div class="staff-card-body">
                    <div class="staff-info">
                        <div class="staff-info-item">
                            <div class="staff-info-label">Phone</div>
                            <div class="staff-info-value">${staff.phone}</div>
                        </div>
                        <div class="staff-info-item">
                            <div class="staff-info-label">Location</div>
                            <div class="staff-info-value">${staff.village || staff.phcName || staff.district}</div>
                        </div>
                        <div class="staff-info-item">
                            <div class="staff-info-label">Experience</div>
                            <div class="staff-info-value">${staff.experience || 'N/A'}</div>
                        </div>
                        ${staff.performance ? `
                        <div class="staff-info-item">
                            <div class="staff-info-label">Performance</div>
                            <div class="staff-info-value">${staff.performance.efficiency}%</div>
                        </div>
                        ` : ''}
                        <div class="staff-info-item">
                            <div class="staff-info-label">Last Training</div>
                            <div class="staff-info-value">${this.formatDate(staff.lastTraining) || 'N/A'}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Financial Management (Admin)
    loadFinancialManagement() {
        this.setupBudgetChart();
        this.loadBudgetBreakdown();
    }

    setupBudgetChart() {
        const ctx = document.getElementById('budgetChart');
        if (!ctx) return;

        if (this.charts.budget) {
            this.charts.budget.destroy();
        }

        const categories = this.budgetOverview.categories;
        this.charts.budget = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(categories),
                datasets: [{
                    data: Object.values(categories).map(c => c.spent),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    loadBudgetBreakdown() {
        const budgetBreakdown = document.getElementById('budgetBreakdown');
        const categories = this.budgetOverview.categories;

        budgetBreakdown.innerHTML = Object.entries(categories).map(([category, data]) => `
            <div class="budget-category">
                <div class="category-name">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                <div class="category-amounts">
                    <span class="amount-label">Allocated:</span>
                    <span class="amount-value">₹${(data.allocated / 100000).toFixed(1)}L</span>
                </div>
                <div class="category-amounts">
                    <span class="amount-label">Spent:</span>
                    <span class="amount-value">₹${(data.spent / 100000).toFixed(1)}L</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${data.percentage}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Quality Assurance (Admin)
    loadQualityAssurance() {
        this.loadQualityActivities();
    }

    loadQualityActivities() {
        const qualityActivities = document.getElementById('qualityActivities');
        const activities = [
            {
                title: "Monthly Quality Review",
                date: "2024-10-15",
                status: "scheduled",
                description: "Review quality metrics for all PHCs"
            },
            {
                title: "Patient Feedback Analysis",
                date: "2024-10-10",
                status: "completed",
                description: "Analysis of patient satisfaction surveys"
            }
        ];

        qualityActivities.innerHTML = activities.map(activity => `
            <div class="quality-activity-card">
                <div class="activity-header">
                    <h4>${activity.title}</h4>
                    <span class="status-badge ${activity.status}">${this.t(activity.status)}</span>
                </div>
                <div class="activity-details">
                    <div class="activity-date">Date: ${this.formatDate(activity.date)}</div>
                    <div class="activity-description">${activity.description}</div>
                </div>
            </div>
        `).join('');
    }

    // Emergency Center (Admin)
    loadEmergencyCenter() {
        this.loadEmergencyLog();
    }

    loadEmergencyLog() {
        const emergencyLog = document.getElementById('emergencyLog');
        const logEntries = [
            {
                timestamp: "2024-10-07 14:30:00",
                type: "High Priority Referral",
                description: "Critical pregnancy case from Rampur",
                status: "resolved"
            },
            {
                timestamp: "2024-10-06 09:15:00",
                type: "Medical Emergency",
                description: "Ambulance dispatched to Kultali",
                status: "resolved"
            }
        ];

        emergencyLog.innerHTML = logEntries.map(entry => `
            <div class="emergency-log-entry">
                <div class="log-header">
                    <span class="log-type">${entry.type}</span>
                    <span class="log-timestamp">${this.formatDateTime(entry.timestamp)}</span>
                </div>
                <div class="log-description">${entry.description}</div>
                <span class="status-badge ${entry.status}">${this.t(entry.status)}</span>
            </div>
        `).join('');
    }

    // Patient Management
    loadPatients(filter = 'all', searchTerm = '') {
        const patientsList = document.getElementById('patientsList');
        let filteredPatients = this.currentUser.role === 'asha' 
            ? this.patients.filter(p => p.ashaId === this.currentUser.id)
            : this.patients;

        // Apply filters
        if (filter !== 'all') {
            if (filter === 'highrisk') {
                filteredPatients = filteredPatients.filter(p => p.isHighRisk);
            } else if (filter === 'referrals') {
                const referredPatientIds = this.referrals.map(r => r.patientId);
                filteredPatients = filteredPatients.filter(p => referredPatientIds.includes(p.id));
            } else {
                filteredPatients = filteredPatients.filter(p => p.pregnancyStatus === filter);
            }
        }

        // Apply search
        if (searchTerm) {
            filteredPatients = filteredPatients.filter(patient => 
                patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.phoneNumber.includes(searchTerm)
            );
        }

        if (filteredPatients.length === 0) {
            patientsList.innerHTML = '<div class="empty-state"><h3>No patients found</h3><p>Try adjusting your filters or search terms</p></div>';
            return;
        }

        patientsList.innerHTML = filteredPatients.map(patient => `
            <div class="patient-card" onclick="app.showPatientDetail('${patient.id}')">
                <div class="patient-card-header">
                    <h3 class="patient-name">${patient.name}</h3>
                    <div class="status-container">
                        <span class="status-badge ${patient.pregnancyStatus}">${this.t(patient.pregnancyStatus)}</span>
                        ${patient.isHighRisk ? '<div class="high-risk-indicator">High Risk</div>' : ''}
                    </div>
                </div>
                <div class="patient-card-body">
                    <div class="patient-info">
                        <div class="patient-info-item">
                            <div class="patient-info-label">Age</div>
                            <div class="patient-info-value">${patient.age} years</div>
                        </div>
                        <div class="patient-info-item">
                            <div class="patient-info-label">Village</div>
                            <div class="patient-info-value">${patient.village}</div>
                        </div>
                        <div class="patient-info-item">
                            <div class="patient-info-label">Phone</div>
                            <div class="patient-info-value">${patient.phoneNumber}</div>
                        </div>
                        ${patient.eddDate ? `
                        <div class="patient-info-item">
                            <div class="patient-info-label">EDD</div>
                            <div class="patient-info-value">${this.formatDate(patient.eddDate)}</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Children Management
    loadChildren(filter = 'all', searchTerm = '') {
        const childrenList = document.getElementById('childrenList');
        let filteredChildren = this.currentUser.role === 'asha' 
            ? this.children.filter(c => c.ashaId === this.currentUser.id)
            : this.children;

        // Apply search
        if (searchTerm) {
            filteredChildren = filteredChildren.filter(child => 
                child.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filteredChildren.length === 0) {
            childrenList.innerHTML = '<div class="empty-state"><h3>No children found</h3><p>Try adjusting your search terms</p></div>';
            return;
        }

        childrenList.innerHTML = filteredChildren.map(child => {
            const age = this.calculateAgeInMonths(child.birthDate);
            
            return `
                <div class="child-card" onclick="app.showChildDetail('${child.id}')">
                    <div class="child-card-header">
                        <h3 class="child-name">${child.name}</h3>
                        <span class="status-badge ${child.gender}">${this.t(child.gender)}</span>
                    </div>
                    <div class="child-card-body">
                        <div class="child-info">
                            <div class="child-info-item">
                                <div class="child-info-label">Age</div>
                                <div class="child-info-value">${age}</div>
                            </div>
                            <div class="child-info-item">
                                <div class="child-info-label">Birth Weight</div>
                                <div class="child-info-value">${child.birthWeight} kg</div>
                            </div>
                            <div class="child-info-item">
                                <div class="child-info-label">Current Weight</div>
                                <div class="child-info-value">${child.currentWeight} kg</div>
                            </div>
                            <div class="child-info-item">
                                <div class="child-info-label">Status</div>
                                <div class="child-info-value">
                                    <span class="status-badge ${child.nutritionalStatus}">${child.nutritionalStatus}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Other load functions (simplified)
    loadVisits() {
        const visitsList = document.getElementById('visitsList');
        visitsList.innerHTML = this.visits.length > 0 ? 
            this.visits.map(visit => `
                <div class="visit-card">
                    <div class="visit-header">
                        <span class="visit-type">${visit.visitType.toUpperCase()}</span>
                        <span class="status-badge ${visit.status}">${this.t(visit.status)}</span>
                    </div>
                    <div class="visit-patient">${this.getPatientName(visit.patientId)}</div>
                    <div class="visit-date">${this.formatDate(visit.visitDate)}</div>
                    <div class="visit-details">${visit.purpose || 'No purpose specified'}</div>
                </div>
            `).join('') :
            '<div class="empty-state"><h3>No visits found</h3><p>Schedule your first visit</p></div>';
    }

    loadReferrals() {
        const referralsList = document.getElementById('referralsList');
        referralsList.innerHTML = this.referrals.length > 0 ?
            this.referrals.map(referral => `
                <div class="referral-card">
                    <div class="referral-header">
                        <div class="referral-info">
                            <h4>${this.getPatientName(referral.patientId)}</h4>
                            <p>Referred by: ${this.getUserName(referral.referredBy)}</p>
                        </div>
                        <span class="status-badge ${referral.status}">${this.t(referral.status)}</span>
                    </div>
                    <div class="referral-body">
                        <div class="referral-reason"><strong>Reason:</strong> ${referral.reason}</div>
                        <div class="referral-date"><strong>Date:</strong> ${this.formatDate(referral.referralDate)}</div>
                    </div>
                </div>
            `).join('') :
            '<div class="empty-state"><h3>No referrals found</h3></div>';
    }

    loadASHAWorkers() {
        const ashaWorkersList = document.getElementById('ashaWorkersList');
        const ashaWorkers = this.users.filter(u => u.role === 'asha');
        
        if (ashaWorkers.length === 0) {
            ashaWorkersList.innerHTML = '<div class="empty-state"><h3>No ASHA workers found</h3></div>';
            return;
        }

        ashaWorkersList.innerHTML = ashaWorkers.map(asha => {
            const performance = asha.performance || { efficiency: 0, achieved: 0, monthlyTarget: 0 };
            
            return `
                <div class="asha-worker-card">
                    <div class="asha-card-header">
                        <h3 class="asha-name">${asha.name}</h3>
                        <div class="performance-indicator">
                            <span class="performance-percentage">${performance.efficiency}%</span>
                        </div>
                    </div>
                    <div class="asha-card-body">
                        <div class="asha-info">
                            <div class="asha-info-item">
                                <div class="asha-info-label">Village</div>
                                <div class="asha-info-value">${asha.village}</div>
                            </div>
                            <div class="asha-info-item">
                                <div class="asha-info-label">Phone</div>
                                <div class="asha-info-value">${asha.phone}</div>
                            </div>
                            <div class="asha-info-item">
                                <div class="asha-info-label">Performance</div>
                                <div class="asha-info-value">${performance.achieved}/${performance.monthlyTarget}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    loadInventory(category = 'medicines') {
        const inventoryList = document.getElementById('inventoryList');
        let items = [];

        switch (category) {
            case 'medicines':
                items = this.inventory.medicines;
                break;
            case 'vaccines':
                items = this.inventory.vaccines;
                break;
            default:
                items = [...this.inventory.medicines, ...this.inventory.vaccines];
        }

        if (items.length === 0) {
            inventoryList.innerHTML = '<div class="empty-state"><h3>No items found</h3></div>';
            return;
        }

        inventoryList.innerHTML = items.map(item => {
            const stockLevel = this.getStockLevel(item);
            const stockClass = stockLevel === 'In Stock' ? 'in' : 
                              stockLevel === 'Low Stock' ? 'low' : 'out';
            
            return `
                <div class="inventory-item">
                    <div class="inventory-info">
                        <h4>${item.name}</h4>
                        <div class="inventory-details">
                            <div class="inventory-detail-item">
                                <div class="inventory-detail-label">Current Stock</div>
                                <div class="inventory-detail-value">${item.currentStock}</div>
                            </div>
                            <div class="inventory-detail-item">
                                <div class="inventory-detail-label">Minimum Stock</div>
                                <div class="inventory-detail-value">${item.minimumStock}</div>
                            </div>
                            ${item.expiryDate ? `
                            <div class="inventory-detail-item">
                                <div class="inventory-detail-label">Expiry</div>
                                <div class="inventory-detail-value">${this.formatDate(item.expiryDate)}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="stock-indicator">
                        <div class="stock-level stock-${stockClass}">${item.currentStock}</div>
                        <div class="stock-status">${stockLevel}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    loadTraining() {
        const trainingList = document.getElementById('trainingList');
        
        if (this.trainingPrograms.length === 0) {
            trainingList.innerHTML = '<div class="empty-state"><h3>No training sessions found</h3></div>';
            return;
        }

        trainingList.innerHTML = this.trainingPrograms.map(session => `
            <div class="training-card">
                <div class="training-header">
                    <div class="training-info">
                        <h4 class="training-title">${session.title}</h4>
                        <p>Duration: ${session.duration}</p>
                    </div>
                    <span class="status-badge ${session.status}">${this.t(session.status)}</span>
                </div>
                <div class="training-details">
                    <div class="training-detail-item">
                        <div class="training-detail-label">Date</div>
                        <div class="training-detail-value">${this.formatDate(session.scheduled)}</div>
                    </div>
                    <div class="training-detail-item">
                        <div class="training-detail-label">Participants</div>
                        <div class="training-detail-value">${session.enrolledParticipants || 0}</div>
                    </div>
                    <div class="training-detail-item">
                        <div class="training-detail-label">Location</div>
                        <div class="training-detail-value">${session.location}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadSchemes() {
        const schemesList = document.getElementById('schemesList');
        const schemes = [
            {
                id: "JSY001",
                patientId: "PAT002",
                schemeName: "JSY",
                approvalStatus: "approved",
                amountDue: 1400,
                disbursementDate: "2024-08-20"
            }
        ];
        
        schemesList.innerHTML = schemes.length > 0 ?
            schemes.map(scheme => `
                <div class="scheme-card">
                    <div class="scheme-header">
                        <div class="scheme-name">${scheme.schemeName}</div>
                        <div class="scheme-amount">₹${scheme.amountDue}</div>
                    </div>
                    <div class="scheme-details">
                        <div class="patient-info-item">
                            <div class="patient-info-label">Patient</div>
                            <div class="patient-info-value">${this.getPatientName(scheme.patientId)}</div>
                        </div>
                        <div class="patient-info-item">
                            <div class="patient-info-label">Status</div>
                            <div class="patient-info-value">
                                <span class="status-badge ${scheme.approvalStatus}">${this.t(scheme.approvalStatus)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('') :
            '<div class="empty-state"><h3>No schemes found</h3></div>';
    }

    loadReports() {
        const reportContent = document.getElementById('reportContent');
        this.generateReport();
    }

    loadEmergencyContacts() {
        const contactsList = document.getElementById('emergencyContactsList');
        
        contactsList.innerHTML = this.emergencyContacts.map(contact => `
            <div class="emergency-contact-card ${contact.type}">
                <div class="emergency-service">${contact.service}</div>
                <a href="tel:${contact.number}" class="emergency-number">${contact.number}</a>
            </div>
        `).join('');
    }

    // Modal Management
    showAddPatientModal() {
        this.clearForms();
        document.getElementById('addPatientModal').classList.remove('hidden');
    }

    showAddChildModal() {
        this.clearForms();
        document.getElementById('addChildModal').classList.remove('hidden');
    }

    showScheduleVisitModal() {
        this.clearForms();
        this.populatePatientDropdown();
        document.getElementById('scheduleVisitModal').classList.remove('hidden');
    }

    populatePatientDropdown() {
        const select = document.getElementById('visitPatient');
        select.innerHTML = '<option value="">Choose Patient</option>';
        
        const availablePatients = this.currentUser.role === 'asha' 
            ? this.patients.filter(p => p.ashaId === this.currentUser.id)
            : this.patients;
            
        availablePatients.forEach(patient => {
            const option = document.createElement('option');
            option.value = patient.id;
            option.textContent = `${patient.name} - ${patient.village}`;
            select.appendChild(option);
        });
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }

    // Form Handlers
    handleAddPatient(e) {
        e.preventDefault();
        
        const newPatient = {
            id: `PAT${Date.now()}`,
            name: document.getElementById('patientName').value.trim(),
            age: parseInt(document.getElementById('patientAge').value),
            phoneNumber: document.getElementById('patientPhone').value.trim(),
            village: document.getElementById('patientVillage').value.trim(),
            pregnancyStatus: 'none',
            registrationDate: new Date().toISOString().split('T')[0],
            ashaId: this.currentUser.id,
            isHighRisk: false
        };

        this.patients.push(newPatient);
        this.closeModal('addPatientModal');
        this.showAlert('Patient added successfully!', 'success');
        
        if (this.currentView === 'patients') {
            this.loadPatients();
        }
        this.updateHeaderStats();
    }

    handleAddChild(e) {
        e.preventDefault();
        
        const newChild = {
            id: `CHILD${Date.now()}`,
            name: document.getElementById('childName').value.trim(),
            gender: document.getElementById('childGender').value,
            birthDate: new Date().toISOString().split('T')[0],
            birthWeight: '3.0',
            registrationDate: new Date().toISOString().split('T')[0],
            ashaId: this.currentUser.id,
            nutritionalStatus: 'normal',
            currentWeight: '3.0'
        };

        this.children.push(newChild);
        this.closeModal('addChildModal');
        this.showAlert('Child added successfully!', 'success');
        
        if (this.currentView === 'children') {
            this.loadChildren();
        }
        this.updateHeaderStats();
    }

    handleScheduleVisit(e) {
        e.preventDefault();
        
        const newVisit = {
            id: `VISIT${Date.now()}`,
            patientId: document.getElementById('visitPatient').value,
            visitDate: document.getElementById('visitDate').value,
            status: 'scheduled',
            conductedBy: this.currentUser.id
        };

        this.visits.push(newVisit);
        this.closeModal('scheduleVisitModal');
        this.showAlert('Visit scheduled successfully!', 'success');
        
        if (this.currentView === 'visits') {
            this.loadVisits();
        }
    }

    // Utility Functions
    getStockLevel(item) {
        if (item.currentStock <= 0) return 'Out of Stock';
        if (item.currentStock <= item.minimumStock) return 'Low Stock';
        return 'In Stock';
    }

    getLowStockItems() {
        const allItems = [...this.inventory.medicines, ...this.inventory.vaccines];
        return allItems.filter(item => item.currentStock <= item.minimumStock);
    }

    getPatientName(patientId) {
        const patient = this.patients.find(p => p.id === patientId);
        return patient ? patient.name : 'Unknown Patient';
    }

    getUserName(userId) {
        const user = this.users.find(u => u.id === userId);
        return user ? user.name : 'Unknown User';
    }

    calculateAgeInMonths(birthDate) {
        const birth = new Date(birthDate);
        const now = new Date();
        const diffTime = Math.abs(now - birth);
        const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
        
        if (diffMonths < 1) {
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return `${diffDays} days`;
        } else if (diffMonths < 12) {
            return `${diffMonths} months`;
        } else {
            const years = Math.floor(diffMonths / 12);
            const remainingMonths = diffMonths % 12;
            return `${years}y ${remainingMonths}m`;
        }
    }

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    formatDateTime(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Language Support
    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.updateTranslations();
    }

    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        if (this.currentUser) {
            this.setupNavigation();
        }
    }

    clearForms() {
        document.querySelectorAll('form').forEach(form => form.reset());
    }

    showAlert(message, type = 'info') {
        // Create and show a proper notification
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-info)'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
        
        // Add CSS animation
        if (!document.getElementById('notificationStyles')) {
            const style = document.createElement('style');
            style.id = 'notificationStyles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            `;
            document.head.appendChild(style);
        }
    }

    handleFilterTab(e) {
        const tab = e.target;
        const parent = tab.parentElement;
        const filter = tab.getAttribute('data-filter') || tab.getAttribute('data-category');
        
        // Update active tab
        parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Apply filter based on current view
        if (this.currentView === 'patients') {
            this.loadPatients(filter, document.getElementById('patientSearch')?.value || '');
        } else if (this.currentView === 'children') {
            this.loadChildren(filter, document.getElementById('childSearch')?.value || '');
        } else if (this.currentView === 'inventory') {
            this.loadInventory(filter);
        } else if (this.currentView === 'staffManagement') {
            this.loadStaffList(filter, document.getElementById('staffSearch')?.value || '');
        }
    }

    searchPatients(searchTerm) {
        const activeFilter = document.querySelector('#patientsView .filter-tab.active')?.getAttribute('data-filter') || 'all';
        this.loadPatients(activeFilter, searchTerm);
    }

    searchChildren(searchTerm) {
        const activeFilter = document.querySelector('#childrenView .filter-tab.active')?.getAttribute('data-filter') || 'all';
        this.loadChildren(activeFilter, searchTerm);
    }

    searchStaff(searchTerm) {
        const activeFilter = document.querySelector('#staffManagementView .filter-tab.active')?.getAttribute('data-filter') || 'all';
        this.loadStaffList(activeFilter, searchTerm);
    }

    searchASHA(searchTerm) {
        // Implement ASHA search functionality
        this.loadASHAWorkers();
    }

    // Enhanced Admin Panel Action Functions with Working Functionality
    addNewPHC() {
        const phcName = prompt('Enter new PHC name:');
        if (phcName) {
            const newPHC = {
                id: `PHC${Date.now()}`,
                name: phcName,
                address: 'New Address (To be updated)',
                district: 'South 24 Parganas',
                state: 'West Bengal',
                establishedYear: new Date().getFullYear().toString(),
                bedCapacity: 4,
                catchmentPopulation: 20000,
                services: ['OPD', 'Maternity', 'Immunization'],
                status: 'operational',
                lastInspection: new Date().toISOString().split('T')[0],
                accreditation: 'Pending',
                monthlyStats: {
                    opdVisits: 0,
                    emergencies: 0,
                    deliveries: 0,
                    immunizations: 0
                }
            };
            
            this.managedPHCs.push(newPHC);
            this.networkStatistics.totalPHCs += 1;
            this.loadPHCGrid();
            this.updateNetworkStatistics();
            this.showAlert(`New PHC "${phcName}" added successfully!`, 'success');
        }
    }

    generateNetworkReport() {
        this.showAlert('Generating comprehensive network report...', 'info');
        
        // Simulate report generation
        setTimeout(() => {
            const reportData = {
                totalPHCs: this.networkStatistics.totalPHCs,
                totalPatients: this.patients.length,
                totalStaff: this.networkStatistics.totalStaff,
                monthlyOPD: this.networkStatistics.averageOPDVisits,
                budgetUtilization: this.budgetOverview.utilizationRate
            };
            
            console.log('Network Report Generated:', reportData);
            this.showAlert('Network report generated successfully! Check console for details.', 'success');
        }, 2000);
    }

    viewPHCDetails(phcId) {
        const phc = this.managedPHCs.find(p => p.id === phcId);
        if (phc) {
            this.showAlert(`Viewing details for ${phc.name}\n\nPopulation: ${phc.catchmentPopulation.toLocaleString()}\nBeds: ${phc.bedCapacity}\nStatus: ${phc.status}\nAccreditation: ${phc.accreditation}`, 'info');
        }
    }

    addNewStaff() {
        const staffName = prompt('Enter new staff member name:');
        if (staffName) {
            const staffRole = prompt('Enter role (asha/phc_doctor/phc_nurse):') || 'asha';
            const newStaff = {
                id: `STAFF${Date.now()}`,
                name: staffName,
                role: staffRole,
                phone: '9876543XXX',
                village: 'New Village',
                district: 'South 24 Parganas',
                state: 'West Bengal',
                joiningDate: new Date().toISOString().split('T')[0],
                password: 'password123'
            };
            
            if (staffRole === 'asha') {
                newStaff.performance = {
                    monthlyTarget: 25,
                    achieved: 0,
                    efficiency: 0
                };
            }
            
            this.users.push(newStaff);
            this.networkStatistics.totalStaff += 1;
            this.loadStaffList();
            this.showAlert(`New staff member "${staffName}" added successfully!`, 'success');
        }
    }

    viewStaffDetails(staffId) {
        const staff = this.users.find(u => u.id === staffId);
        if (staff) {
            const details = `Staff Details:\n\nName: ${staff.name}\nRole: ${staff.role}\nPhone: ${staff.phone}\nLocation: ${staff.village || staff.phcName || staff.district}`;
            this.showAlert(details, 'info');
        }
    }

    generateFinancialReport() {
        this.showAlert('Generating financial report...', 'info');
        
        setTimeout(() => {
            const report = {
                totalBudget: this.budgetOverview.annualBudget,
                utilized: this.budgetOverview.utilized,
                remaining: this.budgetOverview.remaining,
                utilizationRate: this.budgetOverview.utilizationRate,
                categories: this.budgetOverview.categories
            };
            
            console.log('Financial Report:', report);
            this.showAlert('Financial report generated successfully! Budget utilization: ' + this.budgetOverview.utilizationRate + '%', 'success');
        }, 1500);
    }

    manageBudget() {
        const action = prompt('Budget Management Options:\n1. Reallocate funds\n2. Request additional budget\n3. View detailed breakdown\n\nEnter choice (1-3):');
        
        switch(action) {
            case '1':
                this.showAlert('Budget reallocation interface would open here. Current utilization: ' + this.budgetOverview.utilizationRate + '%', 'info');
                break;
            case '2':
                const amount = prompt('Enter additional budget request amount (₹):');
                if (amount && !isNaN(amount)) {
                    this.showAlert(`Budget request for ₹${parseInt(amount).toLocaleString()} has been submitted for approval.`, 'success');
                }
                break;
            case '3':
                let breakdown = 'Budget Breakdown:\n\n';
                Object.entries(this.budgetOverview.categories).forEach(([category, data]) => {
                    breakdown += `${category.toUpperCase()}: ₹${(data.allocated/100000).toFixed(1)}L allocated, ₹${(data.spent/100000).toFixed(1)}L spent (${data.percentage}%)\n`;
                });
                this.showAlert(breakdown, 'info');
                break;
            default:
                this.showAlert('Invalid choice', 'error');
        }
    }

    scheduleAudit() {
        const auditType = prompt('Audit Type:\n1. Quality Audit\n2. Financial Audit\n3. Compliance Audit\n\nEnter choice (1-3):');
        const phcId = prompt('Select PHC for audit:\n1. Baruipur PHC\n2. Kultali PHC\n3. Canning PHC\n\nEnter choice (1-3):');
        
        if (auditType && phcId) {
            const auditTypes = ['Quality Audit', 'Financial Audit', 'Compliance Audit'];
            const phcNames = ['Baruipur PHC', 'Kultali PHC', 'Canning PHC'];
            
            if (auditType >= 1 && auditType <= 3 && phcId >= 1 && phcId <= 3) {
                const scheduledDate = new Date();
                scheduledDate.setDate(scheduledDate.getDate() + 7); // Schedule for next week
                
                this.showAlert(`${auditTypes[auditType-1]} scheduled for ${phcNames[phcId-1]} on ${this.formatDate(scheduledDate.toISOString())}`, 'success');
            } else {
                this.showAlert('Invalid selection', 'error');
            }
        }
    }

    generateQualityReport() {
        this.showAlert('Generating quality assurance report...', 'info');
        
        setTimeout(() => {
            const qualityMetrics = {
                patientSatisfaction: '8.5/10',
                serviceQuality: '92%',
                complianceRate: '95%',
                avgWaitTime: '15 minutes',
                serviceUptime: '98.5%'
            };
            
            let report = 'Quality Metrics Report:\n\n';
            Object.entries(qualityMetrics).forEach(([metric, value]) => {
                report += `${metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${value}\n`;
            });
            
            console.log('Quality Report:', qualityMetrics);
            this.showAlert(report + '\nDetailed report available in console.', 'success');
        }, 1500);
    }

    createEmergencyAlert() {
        const alertType = prompt('Emergency Alert Type:\n1. Medical Emergency\n2. System Failure\n3. Staff Shortage\n4. Supply Critical\n\nEnter choice (1-4):');
        const phcId = prompt('Select PHC:\n1. Baruipur PHC\n2. Kultali PHC\n3. Canning PHC\n\nEnter choice (1-3):');
        const description = prompt('Enter alert description:');
        
        if (alertType && phcId && description) {
            const alertTypes = ['Medical Emergency', 'System Failure', 'Staff Shortage', 'Supply Critical'];
            const phcNames = ['PHC001', 'PHC002', 'PHC003'];
            
            if (alertType >= 1 && alertType <= 4 && phcId >= 1 && phcId <= 3) {
                const newAlert = {
                    id: `ALERT${Date.now()}`,
                    type: alertTypes[alertType-1],
                    message: description,
                    phcId: phcNames[phcId-1],
                    timestamp: new Date().toISOString(),
                    status: 'active',
                    priority: 'high'
                };
                
                this.emergencyAlerts.push(newAlert);
                this.updateHeaderStats(); // Update alert count
                this.showAlert(`Emergency alert created: ${alertTypes[alertType-1]} at ${phcNames[phcId-1]}`, 'success');
            } else {
                this.showAlert('Invalid selection', 'error');
            }
        }
    }

    viewEmergencyProtocols() {
        const protocols = `Emergency Response Protocols:

1. MEDICAL EMERGENCY
   • Immediate triage assessment
   • Stabilize patient
   • Contact emergency services (108)
   • Notify supervisor

2. EQUIPMENT FAILURE  
   • Switch to backup systems
   • Contact technical support
   • Document incident
   • Report to administration

3. STAFF SHORTAGE
   • Redistribute workload
   • Contact relief staff
   • Prioritize critical services
   • Escalate to district office

4. SUPPLY SHORTAGE
   • Implement rationing
   • Emergency procurement
   • Contact suppliers
   • Request urgent delivery

For detailed protocols, refer to the Emergency Response Manual.`;
        
        this.showAlert(protocols, 'info');
    }

    showAssignTaskModal() {
        const ashaId = prompt('Select ASHA Worker:\n1. Priya Devi (ASHA001)\n2. Other ASHA Worker\n\nEnter choice (1-2):');
        const taskType = prompt('Task Type:\n1. Patient Follow-up\n2. Health Survey\n3. Training Session\n4. Community Outreach\n\nEnter choice (1-4):');
        
        if (ashaId && taskType) {
            const ashaNames = ['Priya Devi', 'Other ASHA Worker'];
            const taskTypes = ['Patient Follow-up', 'Health Survey', 'Training Session', 'Community Outreach'];
            
            if (ashaId >= 1 && ashaId <= 2 && taskType >= 1 && taskType <= 4) {
                this.showAlert(`Task "${taskTypes[taskType-1]}" assigned to ${ashaNames[ashaId-1]} successfully!`, 'success');
            } else {
                this.showAlert('Invalid selection', 'error');
            }
        }
    }

    showAddInventoryModal() {
        const itemName = prompt('Enter item name:');
        const itemCategory = prompt('Category:\n1. Medicine\n2. Vaccine\n3. Supply\n\nEnter choice (1-3):');
        const quantity = prompt('Enter quantity:');
        
        if (itemName && itemCategory && quantity && !isNaN(quantity)) {
            const categories = ['medicines', 'vaccines', 'supplies'];
            const categoryNames = ['Medicine', 'Vaccine', 'Supply'];
            
            if (itemCategory >= 1 && itemCategory <= 3) {
                const newItem = {
                    id: `ITEM${Date.now()}`,
                    name: itemName,
                    category: categoryNames[itemCategory-1],
                    currentStock: parseInt(quantity),
                    minimumStock: Math.floor(parseInt(quantity) * 0.2), // 20% of current as minimum
                    expiryDate: '2025-12-31',
                    batchNumber: `BATCH${Date.now()}`,
                    supplier: 'Government Supply'
                };
                
                if (categories[itemCategory-1] === 'medicines') {
                    this.inventory.medicines.push(newItem);
                } else if (categories[itemCategory-1] === 'vaccines') {
                    this.inventory.vaccines.push(newItem);
                }
                
                this.showAlert(`${categoryNames[itemCategory-1]} "${itemName}" (${quantity} units) added to inventory successfully!`, 'success');
                
                if (this.currentView === 'inventory') {
                    this.loadInventory();
                }
            } else {
                this.showAlert('Invalid category selection', 'error');
            }
        }
    }

    showScheduleTrainingModal() {
        const trainingTitle = prompt('Enter training title:');
        const targetAudience = prompt('Target Audience:\n1. ASHA Workers\n2. PHC Staff\n3. All Staff\n\nEnter choice (1-3):');
        const duration = prompt('Duration in days:');
        
        if (trainingTitle && targetAudience && duration && !isNaN(duration)) {
            const audiences = ['ASHA Workers', 'PHC Staff', 'All Staff'];
            
            if (targetAudience >= 1 && targetAudience <= 3) {
                const futureDate = new Date();
                futureDate.setDate(futureDate.getDate() + 14); // Schedule for 2 weeks from now
                
                const newTraining = {
                    id: `TRN${Date.now()}`,
                    title: trainingTitle,
                    targetAudience: audiences[targetAudience-1],
                    duration: `${duration} days`,
                    scheduled: futureDate.toISOString().split('T')[0],
                    facilitator: 'External Trainer',
                    enrolledParticipants: 0,
                    status: 'scheduled',
                    location: 'PHC001 Training Hall',
                    topics: ['Basic training topics']
                };
                
                this.trainingPrograms.push(newTraining);
                this.showAlert(`Training "${trainingTitle}" scheduled for ${this.formatDate(futureDate.toISOString())} successfully!`, 'success');
                
                if (this.currentView === 'training') {
                    this.loadTraining();
                }
            } else {
                this.showAlert('Invalid audience selection', 'error');
            }
        }
    }

    generateReport() {
        const reportContent = document.getElementById('reportContent');
        const totalPatients = this.patients.length;
        const pregnantWomen = this.patients.filter(p => p.pregnancyStatus === 'pregnant').length;
        const children = this.children.length;
        const visits = this.visits.length;
        
        reportContent.innerHTML = `
            <div class="report-section">
                <h3 class="report-title">Monthly Performance Report - October 2024</h3>
                <div class="report-stats">
                    <div class="report-stat-item">
                        <div class="report-stat-number">${totalPatients}</div>
                        <div class="report-stat-label">Total Patients</div>
                    </div>
                    <div class="report-stat-item">
                        <div class="report-stat-number">${pregnantWomen}</div>
                        <div class="report-stat-label">Pregnant Women</div>
                    </div>
                    <div class="report-stat-item">
                        <div class="report-stat-number">${children}</div>
                        <div class="report-stat-label">Children Registered</div>
                    </div>
                    <div class="report-stat-item">
                        <div class="report-stat-number">${visits}</div>
                        <div class="report-stat-label">Total Visits</div>
                    </div>
                    <div class="report-stat-item">
                        <div class="report-stat-number">${this.budgetOverview.utilizationRate}%</div>
                        <div class="report-stat-label">Budget Utilized</div>
                    </div>
                    <div class="report-stat-item">
                        <div class="report-stat-number">${this.networkStatistics.totalPHCs}</div>
                        <div class="report-stat-label">Active PHCs</div>
                    </div>
                </div>
            </div>
        `;
        
        this.showAlert('Report generated successfully!', 'success');
    }

    showPatientDetail(patientId) {
        const patient = this.patients.find(p => p.id === patientId);
        if (patient) {
            let details = `Patient Details:\n\nName: ${patient.name}\nAge: ${patient.age} years\nPhone: ${patient.phoneNumber}\nVillage: ${patient.village}\nStatus: ${patient.pregnancyStatus}`;
            
            if (patient.eddDate) {
                details += `\nEDD: ${this.formatDate(patient.eddDate)}`;
            }
            
            if (patient.bloodGroup) {
                details += `\nBlood Group: ${patient.bloodGroup}`;
            }
            
            if (patient.isHighRisk) {
                details += '\n\n⚠️ HIGH RISK PATIENT';
            }
            
            this.showAlert(details, 'info');
        }
    }

    showChildDetail(childId) {
        const child = this.children.find(c => c.id === childId);
        if (child) {
            const age = this.calculateAgeInMonths(child.birthDate);
            const details = `Child Details:\n\nName: ${child.name}\nGender: ${child.gender}\nAge: ${age}\nBirth Weight: ${child.birthWeight} kg\nCurrent Weight: ${child.currentWeight} kg\nNutritional Status: ${child.nutritionalStatus}\nPlace of Birth: ${child.placeOfBirth}`;
            
            this.showAlert(details, 'info');
        }
    }
}

// Initialize the application
const app = new MatriConnectComplete();

// Make app globally available for onclick handlers
window.app = app;