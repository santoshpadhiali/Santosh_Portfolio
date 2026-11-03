/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION - MONALISA BEHERA
 * =========================================================================
 * Comprehensive categorization of technical proficiencies, frameworks,
 * databases, core concepts, and development tools.
 */

export const skillsCategories = [
  {
    id: "backend",
    title: "Backend & Frameworks",
    icon: "server",
    color: "from-blue-500 to-indigo-500",
    description: "Architecting enterprise-grade server-side applications, REST APIs, and business logic.",
    skills: [
      { name: "Java (Core & Java 8+)", level: 92, experience: "Advanced", badge: "Core Language" },
      { name: "Spring Boot & Spring Framework", level: 88, experience: "Advanced", badge: "Framework" },
      { name: "Hibernate ORM", level: 86, experience: "Advanced", badge: "ORM" },
      { name: "JDBC (Java Database Connectivity)", level: 90, experience: "Advanced", badge: "Data Access" },
      { name: "RESTful API Design", level: 88, experience: "Advanced", badge: "Architecture" },
      { name: "MVC Architecture", level: 90, experience: "Advanced", badge: "Design Pattern" },
      { name: "Java 8+ (Streams, Lambdas)", level: 88, experience: "Proficient", badge: "Modern Java" }
    ]
  },
  {
    id: "database",
    title: "Databases & Querying",
    icon: "database",
    color: "from-emerald-500 to-teal-400",
    description: "Designing normalized schemas, complex querying, and transactional data persistence.",
    skills: [
      { name: "Oracle SQL (400+ Queries)", level: 94, experience: "Advanced", badge: "RDBMS Core" },
      { name: "PostgreSQL", level: 86, experience: "Proficient", badge: "RDBMS" },
      { name: "MySQL", level: 90, experience: "Advanced", badge: "RDBMS" },
      { name: "DBMS & Schema Normalization", level: 88, experience: "Advanced", badge: "Foundations" },
      { name: "Complex Joins, Subqueries & CTEs", level: 92, experience: "Advanced", badge: "SQL Mastery" },
      { name: "CRUD & Transaction Management", level: 90, experience: "Advanced", badge: "Data Integrity" }
    ]
  },
  {
    id: "realtime",
    title: "Real-Time & Networking",
    icon: "terminal",
    color: "from-cyan-500 to-blue-400",
    description: "Low-latency bidirectional communication pipelines and event-driven messaging.",
    skills: [
      { name: "WebSocket (STOMP Protocol)", level: 88, experience: "Advanced", badge: "Bidirectional" },
      { name: "SockJS Fallback Engine", level: 86, experience: "Proficient", badge: "Protocol" },
      { name: "Multi-Channel Broadcast Messaging", level: 86, experience: "Proficient", badge: "Pub/Sub" },
      { name: "Thymeleaf Server-side Templating", level: 84, experience: "Proficient", badge: "Templating" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    icon: "code",
    color: "from-purple-500 to-pink-400",
    description: "Creating responsive, accessible, and user-centric web interfaces.",
    skills: [
      { name: "HTML5 Semantic Web", level: 92, experience: "Expert", badge: "Markup" },
      { name: "CSS3 & Modern Styling", level: 88, experience: "Advanced", badge: "Styling" },
      { name: "JavaScript (ES6+)", level: 85, experience: "Proficient", badge: "Scripting" },
      { name: "Responsive Layouts & Media Queries", level: 90, experience: "Advanced", badge: "Design" },
      { name: "DOM Manipulation & Event Handling", level: 86, experience: "Proficient", badge: "Interactive" }
    ]
  },
  {
    id: "core",
    title: "Core CS & Problem Solving",
    icon: "cpu",
    color: "from-amber-500 to-orange-400",
    description: "Algorithmic thinking, data structures, and computer science paradigms.",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 88, experience: "150+ Solved", badge: "LeetCode" },
      { name: "Object Oriented Programming (OOP)", level: 94, experience: "Expert", badge: "Core Paradigm" },
      { name: "Regular Expressions (Regex)", level: 86, experience: "Proficient", badge: "Pattern Matching" },
      { name: "Database Management Systems (DBMS)", level: 88, experience: "Advanced", badge: "Core CS" }
    ]
  },
  {
    id: "tools",
    title: "Dev Tools & Environment",
    icon: "terminal",
    color: "from-rose-500 to-red-400",
    description: "Version control, IDEs, API testing clients, and continuous problem-solving platforms.",
    skills: [
      { name: "Git & GitHub", level: 88, experience: "Advanced", badge: "Version Control" },
      { name: "LeetCode & Problem Solving", level: 90, experience: "Active", badge: "Algorithms" },
      { name: "Postman API Testing", level: 86, experience: "Proficient", badge: "API Testing" },
      { name: "Eclipse / IntelliJ IDEA / VS Code", level: 90, experience: "Advanced", badge: "IDE" }
    ]
  }
];

export const skillsQuickList = [
  "Core Java (8+)",
  "Spring Boot",
  "Hibernate ORM",
  "Oracle SQL (400+ Queries)",
  "PostgreSQL",
  "MySQL",
  "WebSocket (STOMP)",
  "JDBC",
  "RESTful APIs",
  "HTML5 & CSS3",
  "JavaScript",
  "OOP",
  "DSA (LeetCode 150+)",
  "Regular Expressions",
  "Git & GitHub"
];
