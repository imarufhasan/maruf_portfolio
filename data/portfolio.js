export const profile = {
  name: "Md Maruf Hasan",
  role: "Senior Mobile Application Engineer",
  titleBadge: "React Native & Android Specialist",
  location: "Dhaka, Bangladesh",
  photo: "/images/profile.jpeg",
  availability: "Available for Full-Time & Contract Roles",
  intro:
    "Mobile Application Engineer with 4+ years of hands-on production experience designing, building, and scaling cross-platform React Native and native Android applications. Shipped 6+ mission-critical apps to Google Play and the App Store across EdTech, Job Portals, POS, and Hospitality.",
  resumeUrl: "/resume",
  whatsappUrl: "https://wa.me/8801679663160?text=Hi%20Maruf,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
  stats: [
    { value: "4+", label: "Years Shipping", sub: "Production Apps" },
    { value: "6+", label: "Apps in Production", sub: "Google Play & App Store" },
    { value: "99.9%", label: "Crash-Free Rate", sub: "Production Stability" },
    { value: "20K+", label: "Combined Users", sub: "Across All Platforms" },
  ],
};

export const apps = [
  {
    id: "com.smartsoftware.sas",
    n: "Smart Academic System",
    category: "EdTech & School ERP",
    t: "School Management ERP",
    d: "Comprehensive institutional ERP managing automated biometric attendance, gradebooks, exam routines, fee dues, and role-based permissions for administrators, teachers, students, and guardians.",
    accent: "#3b82f6",
    gradient: "linear-gradient(135deg, #2563eb, #38bdf8)",
    rating: "4.8 ★",
    installs: "10K+ Installs",
    tech: ["React Native", "Redux Toolkit", "RTK Query", "Firebase FCM", "Offline SQLite", "REST APIs"],
    features: [
      "Real-time biometric attendance sync",
      "Dynamic gradebook & report card generator",
      "Role-based multi-tenant authentication",
      "Instant push notifications for exams & fees",
    ],
    mockType: "academic",
  },
  {
    id: "com.smartsoftware.bdjobslive",
    n: "BDJobs Live",
    category: "Job Portal & Careers",
    t: "Employment & Career Portal",
    d: "High-traffic employment discovery mobile application offering real-time job listings, smart multi-criteria filtering, 1-tap instant applications, saved bookmarks, and push alert notifications.",
    accent: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
    rating: "4.7 ★",
    installs: "50K+ Installs",
    tech: ["React Native", "TypeScript", "React Navigation", "JWT Auth", "REST APIs", "Local Caching"],
    features: [
      "Fast faceted search & filter by salary/location",
      "Instant 1-tap CV application workflow",
      "Automated job alert push notifications",
      "Offline resume & bookmarked jobs storage",
    ],
    mockType: "jobs",
  },
  {
    id: "com.smartsoftware.islamiclife",
    n: "Islamic Life",
    category: "Lifestyle & Utility",
    t: "Lifestyle & Daily Companion",
    d: "Complete lifestyle companion featuring hyper-accurate GPS prayer timings with countdowns, audio Quran player, digital Tasbih counter, Qibla compass, and daily Islamic resources.",
    accent: "#10b981",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
    rating: "4.9 ★",
    installs: "25K+ Installs",
    tech: ["React Native", "Android SDK", "GPS Location Services", "SQLite", "Audio Player", "Sensors API"],
    features: [
      "GPS-calculated prayer schedule & Athan alerts",
      "Offline Quran audio recitation & translation",
      "Hardware sensor-assisted Qibla direction finder",
      "Haptic-enabled digital Tasbih counter",
    ],
    mockType: "islamic",
  },
  {
    id: "com.smartsoftwareltd.restaurant",
    n: "Smart Restaurant POS",
    category: "Retail & Hospitality POS",
    t: "Restaurant POS & KDS",
    d: "Real-time Point-of-Sale (POS) and Kitchen Display System (KDS) for food service businesses, featuring instant table ordering, thermal receipt printing, split billing, and inventory tracking.",
    accent: "#f97316",
    gradient: "linear-gradient(135deg, #ea580c, #fb923c)",
    rating: "4.8 ★",
    installs: "Production B2B",
    tech: ["React Native", "ESC/POS Thermal Printing", "WebSocket", "Redux Toolkit", "Local Database"],
    features: [
      "Interactive visual floor table management",
      "Real-time kitchen order ticket (KOT) sync",
      "Bluetooth & Wi-Fi ESC/POS thermal printing",
      "Offline order queuing with automatic recovery",
    ],
    mockType: "restaurant",
  },
  {
    id: "com.smartsoftware.hotel",
    n: "Smart Hotel PMS",
    category: "Hospitality & Management",
    t: "Property Management System",
    d: "Enterprise property management mobile client enabling hotel staff to handle room reservations, contactless guest check-ins, guest folio billing, housekeeping status updates, and occupancy analytics.",
    accent: "#8b5cf6",
    gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    rating: "4.7 ★",
    installs: "Enterprise PMS",
    tech: ["React Native", "TypeScript", "Camera QR Scanner", "Secure Storage", "REST APIs"],
    features: [
      "Live room occupancy & housekeeping grid",
      "Rapid QR code guest check-in & check-out",
      "Split folio invoicing & digital receipts",
      "Staff audit log & multi-property switching",
    ],
    mockType: "hotel",
  },
  {
    id: "com.skillcare.smart",
    n: "Skill Care LMS",
    category: "EdTech & Assessment",
    t: "E-Learning & Examination",
    d: "Interactive mobile learning platform featuring timed online exams, instant quiz evaluations, multimedia video lessons, student performance analytics, and digital certification.",
    accent: "#ec4899",
    gradient: "linear-gradient(135deg, #db2777, #f472b6)",
    rating: "4.8 ★",
    installs: "15K+ Students",
    tech: ["React Native", "Expo", "Reanimated 3", "Video Streaming", "JWT Auth", "SQLite"],
    features: [
      "Anti-cheating timed examination engine",
      "Instant score computation & detailed solution keys",
      "Interactive progress ring & mastery badges",
      "Secure offline video lecture caching",
    ],
    mockType: "skillcare",
  },
];

export const architectureHighlights = [
  {
    title: "Offline-First & High-Throughput Sync",
    badge: "Architecture",
    icon: "database",
    summary:
      "Engineered resilient local-first data layers with SQLite, MMKV, and Redux Toolkit. Built optimistic mutation queues with automatic background sync, ensuring seamless offline usability in low-connectivity environments.",
    chips: ["SQLite / MMKV", "Optimistic Updates", "Background Sync", "Conflict Resolution"],
  },
  {
    title: "React Native New Architecture & Native Bridges",
    badge: "Native Core",
    icon: "cpu",
    summary:
      "Deep expertise bridging JavaScript with Kotlin and Java Android SDK. Prepared for the New Architecture (JSI, Fabric, TurboModules) and custom native modules for ESC/POS thermal printing, biometrics, and GPS sensors.",
    chips: ["TurboModules / JSI", "Kotlin Native Bridge", "Android SDK", "Hardware APIs"],
  },
  {
    title: "Fluid 60/120 FPS Motion & Memory Optimization",
    badge: "Performance",
    icon: "zap",
    summary:
      "Crafted buttery-smooth user interfaces using React Native Reanimated 3 and Gesture Handler running on the UI thread. Utilized FlashList and memoization patterns to eliminate frame drops and memory leaks.",
    chips: ["Reanimated 3", "FlashList", "UI Thread Gestures", "Memory Profiling"],
  },
  {
    title: "Automated CI/CD & Store Deployment",
    badge: "DevOps",
    icon: "rocket",
    summary:
      "Automated build, test, and release pipelines using GitHub Actions, Fastlane, and Expo EAS. Managed production rollouts, alpha/beta tracks, and store compliance on Google Play Console and Apple App Store.",
    chips: ["Fastlane", "GitHub Actions", "EAS Build", "Google Play / App Store"],
  },
];

export const skillsGrouped = [
  {
    category: "Mobile Core Development",
    icon: "mobile",
    skills: [
      "React Native",
      "Expo & Expo Router",
      "React Native CLI",
      "TypeScript",
      "Android SDK",
      "Kotlin",
      "Java",
      "Gradle",
    ],
  },
  {
    category: "State Management & Architecture",
    icon: "layers",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "Clean Architecture",
      "Component-Based Design",
      "Offline-First Design",
    ],
  },
  {
    category: "Navigation & Device APIs",
    icon: "navigation",
    skills: [
      "React Navigation",
      "Native Modules Bridge",
      "Biometrics & Sensors",
      "Camera & QR Scanner",
      "Push Notifications (FCM)",
      "Deep Linking",
    ],
  },
  {
    category: "APIs, Backend & Storage",
    icon: "server",
    skills: [
      "RESTful APIs",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "SQLite / MMKV",
      "JWT Authentication",
      "PHP & MySQL",
      "JSON Parsing",
    ],
  },
  {
    category: "Testing & DevOps",
    icon: "check-circle",
    skills: [
      "Jest",
      "React Native Testing Library",
      "Fastlane",
      "GitHub Actions",
      "Google Play Console",
      "Apple App Store Connect",
    ],
  },
  {
    category: "Developer Tools & Profiling",
    icon: "tool",
    skills: [
      "Git & GitHub",
      "GitLab",
      "Android Studio",
      "Flipper / React DevTools",
      "Postman",
      "VS Code",
    ],
  },
];

export const jobs = [
  {
    role: "Mobile App Developer",
    company: "Sparktech Agency",
    period: "Feb 2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    points: [
      "Architect and lead end-to-end development of scalable, high-performance mobile apps using React Native and TypeScript.",
      "Own cross-platform state management, network caching layers, and deep API integrations with international backend teams.",
      "Spearhead performance profiling, reducing app startup times and achieving smooth 60 FPS transitions.",
      "Oversee production build releases, store compliance, and version updates on Google Play and Apple App Store.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Smart Software Ltd",
    period: "May 2025 – Jan 2026",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    points: [
      "Engineered and maintained multiple production enterprise mobile apps including School ERP, Job Portal, and POS systems.",
      "Built resilient offline-first architecture with SQLite local storage and background synchronizations.",
      "Integrated Firebase Cloud Messaging (FCM), role-based JWT auth, and third-party payment gateways.",
      "Published and maintained multiple production apps on Google Play, resolving crashes and store policy updates.",
    ],
  },
  {
    role: "Junior Programmer (Intern to Trainee to Programmer)",
    company: "Ascent Group",
    period: "Aug 2019 – Jun 2024",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    points: [
      "Successfully migrated legacy native Android (Java) enterprise applications to modern React Native codebases.",
      "Implemented local databases, real-time messaging/chat, file transfers, and task management features.",
      "Conducted rigorous QA testing, automated build checks, and memory leak profiling to stabilize long-running apps.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "Xubisoft Ltd.",
    period: "Feb 2019 – Apr 2019",
    location: "Sylhet, Bangladesh",
    type: "Full-Time",
    points: [
      "Developed native Android application in Java with PHP & MySQL backend, featuring service listings and course purchasing modules.",
      "Implemented client-side caching and responsive layouts across varied Android device form factors.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Dhaka International University",
    year: "Graduated 2024",
    grade: "CGPA 3.78 / 4.00",
    badge: "First Class Distinction",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Sylhet Polytechnic Institute",
    year: "Completed 2019",
    grade: "CGPA 3.16 / 4.00",
    badge: "Engineering Diploma",
  },
  {
    degree: "Secondary School Certificate (SSC - Science)",
    institution: "A. H. C. Taranga Pre-Cadet & High School",
    year: "Completed 2015",
    grade: "GPA 4.89 / 5.00",
    badge: "Excellence in Science",
  },
];

export const community = [
  {
    title: "Founding Member, Community of Engineers",
    desc: "Collaborative tech forum sharing mobile system design, architecture best practices, and mentoring junior engineers.",
  },
  {
    title: "Former President, IT Club, Sylhet Polytechnic Institute",
    desc: "Led technological workshops, bootcamps on mobile & web programming, and organized technical fests.",
  },
  {
    title: "Former Advisor, SPICC Computer Club",
    desc: "Mentored aspiring student programmers in data structures, algorithms, and project architecture.",
  },
  {
    title: "Competitive Programming Finalist & Winner",
    desc: "Winner, Intra Programming Contest 2017 & Winter Programming Contest 2017. Participant in ACM ICPC Dhaka Regional 2018 and National Collegiate Programming Contest (NCPC) 2018.",
  },
];

export const links = [
  { label: "Email", value: "marufhasan.cse@gmail.com", href: "mailto:marufhasan.cse@gmail.com", icon: "email" },
  { label: "WhatsApp", value: "+880 1679 663160", href: "https://wa.me/8801679663160", icon: "whatsapp" },
  { label: "Phone", value: "+880 1679 663160", href: "tel:+8801679663160", icon: "phone" },
  { label: "LinkedIn", value: "linkedin.com/in/imarufhasan", href: "https://linkedin.com/in/imarufhasan", icon: "linkedin" },
  { label: "GitHub", value: "github.com/imarufhasan", href: "https://github.com/imarufhasan", icon: "github" },
  { label: "Codeforces", value: "codeforces.com/profile/Marufm", href: "https://codeforces.com/profile/Marufm", icon: "code" },
];

export const playUrl = (id) => `https://play.google.com/store/apps/details?id=${id}`;
