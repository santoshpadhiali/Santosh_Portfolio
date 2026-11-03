/**
 * =========================================================================
 * PROFILE DATA CONFIGURATION - MONALISA BEHERA
 * =========================================================================
 * Centralized personal details, titles, contact information,
 * resume links, stats, experience, certifications, and achievements.
 */

export const profileData = {
  name: "Monalisa Behera",
  preferredName: "Monalisa",
  role: "Java Full Stack Developer",
  taglines: [
    "Java Full Stack Developer",
    "Spring Boot & Hibernate Architect",
    "WebSocket & Real-time App Engineer",
    "Oracle SQL & PostgreSQL Specialist",
    "Computer Science Engineer (B.Tech '26)"
  ],
  bioIntro: "Passionate and dedicated aspiring Java Full Stack Developer seeking an opportunity to apply technical and problem-solving skills in building scalable applications, collaborate on innovative projects, and continuously learn new technologies while contributing to organizational success.",
  bioFull: [
    "I am a Computer Science and Engineering undergraduate at KMBB College of Engineering and Technology (under BPUT) with an 8.4 CGPA, graduating in the class of 2026.",
    "My core technical expertise spans Java Full Stack development using Core Java (Java 8+ features, Streams, Collections, Multi-threading), Spring Boot, Hibernate ORM, JDBC, and RESTful API architecture following clean MVC design principles.",
    "On the frontend, I create responsive, intuitive interfaces using HTML5, CSS3, JavaScript, and modern templating engines like Thymeleaf. For real-time applications, I build low-latency bidirectional communications using WebSocket (STOMP protocol) and SockJS.",
    "I have gained invaluable industrial experience as a Java Intern at Hindustan Aeronautics Limited (HAL), Koraput Division, developing a full-stack Complaint Management System. Driven by problem-solving, I have solved 150+ DSA problems on LeetCode and 400+ SQL queries on Oracle SQL."
  ],
  avatar: "/profile.png",
  avatarFallback: "MB",
  statusBadge: "Available for Java Developer Roles & Internships",
  location: "Odisha, India",
  relocation: "Open to Remote & Relocation",
  email: "m4264548@gmail.com",
  phone: "+91 8093174459",
  displayPhone: "+91 80931 74459",
  github: "https://github.com/Misspuja12",
  linkedin: "https://linkedin.com",
  portfolioUrl: "https://github.com/Misspuja12",
  
  // Resume Configuration
  resume: {
    downloadUrl: "/Monalisa_Behera_Resume.pdf",
    fileName: "Monalisa_Behera_Resume.pdf",
    viewUrl: "/Monalisa_Behera_Resume.pdf",
    buttonText: "Download Resume",
    secondaryButtonText: "View Resume"
  },

  // Key stats displayed on Home / About
  stats: [
    {
      label: "B.Tech CGPA",
      value: "8.4",
      subtext: "CSE @ KMBB (BPUT)",
      highlight: true
    },
    {
      label: "LeetCode DSA",
      value: "150+",
      subtext: "Problems Solved",
      highlight: false
    },
    {
      label: "Oracle SQL",
      value: "400+",
      subtext: "Queries Mastered",
      highlight: false
    },
    {
      label: "Industry Experience",
      value: "HAL",
      subtext: "Java Intern (Koraput)",
      highlight: false
    }
  ],

  // Core values / Highlights
  highlights: [
    {
      title: "Java Full Stack Architecture",
      description: "Robust backend engineering with Core Java, Java 8+, Spring Boot, Hibernate ORM, JDBC, and RESTful API design following strict MVC architecture."
    },
    {
      title: "Real-Time Bidirectional Systems",
      description: "Hands-on experience architecting real-time communication platforms using WebSocket (STOMP protocol), SockJS fallbacks, and multi-channel message broadcasting."
    },
    {
      title: "Database Querying & Schema Design",
      description: "Mastery of 400+ complex queries in Oracle SQL, PostgreSQL, and MySQL covering complex joins, subqueries, normalization, and CRUD transaction safety."
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Strong foundation with 150+ DSA problems solved on LeetCode, mastering Data Structures, Algorithms, Object-Oriented Programming (OOP), and Regular Expressions."
    }
  ],

  // Industry Experience
  experience: [
    {
      id: "hal-internship",
      company: "Hindustan Aeronautics Limited (HAL)",
      division: "Koraput Division",
      role: "Java Intern",
      project: "Complaint Management System",
      period: "June 2024 – July 2024",
      badge: "Industry Internship",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      location: "Koraput, Odisha",
      points: [
        "Contributed to the development of a Java Full Stack Complaint Management System for complaint registration, tracking, and resolution lifecycle management.",
        "Developed the frontend UI using HTML, CSS, and JavaScript, focusing on responsive layouts, accessibility, and user-friendly interfaces.",
        "Gained practical exposure to Java, JDBC, MySQL, CRUD operations, database connectivity, and Java OOP concepts while contributing to the application."
      ],
      techStack: ["Java", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript", "OOP"]
    }
  ],

  // Certifications & Courses
  certifications: [
    {
      title: "Java Programming",
      issuer: "JSpider",
      status: "In Progress",
      badge: "Professional Training",
      icon: "code",
      description: "Comprehensive training in Core Java, Java 8+ features, Collection Framework, Multi-threading, Exception Handling, and JDBC."
    },
    {
      title: "Internship Certificate",
      issuer: "Hindustan Aeronautics Limited (HAL) Koraput",
      status: "Completed",
      badge: "Verified Industry Certificate",
      icon: "award",
      description: "Practical industrial internship completion certificate for Java Full Stack Complaint Management System development."
    }
  ],

  // Achievements
  achievements: [
    {
      title: "LeetCode 150+ DSA Solved",
      metric: "150+ Problems",
      description: "Solved 150+ DSA problems on LeetCode strengthening problem-solving, data structures, and algorithmic thinking."
    },
    {
      title: "Oracle SQL 400+ Queries",
      metric: "400+ Queries",
      description: "Executed and optimized 400+ SQL queries on Oracle SQL, strengthening database querying, schema modeling, and transaction management."
    },
    {
      title: "Academic Excellence",
      metric: "8.4 CGPA",
      description: "Consistently maintained an 8.4 CGPA in Bachelor of Technology in Computer Science & Engineering under BPUT."
    }
  ]
};
