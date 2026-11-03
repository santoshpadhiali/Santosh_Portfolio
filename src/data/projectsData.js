/**
 * =========================================================================
 * PROJECTS DATA CONFIGURATION - MONALISA BEHERA
 * =========================================================================
 * Real-world Java full-stack applications, real-time WebSocket systems,
 * industry enterprise platforms, and problem solving achievements.
 */

export const projectsData = [
  {
    id: "digital-library-management",
    title: "Digital Library Management System",
    subtitle: "Java Full Stack System with Spring Boot, Hibernate & MySQL",
    category: "Java Full Stack",
    featured: true,
    image: "/projects/library.svg",
    githubUrl: "https://github.com/Misspuja12/Book-store",
    liveUrl: "https://github.com/Misspuja12/Book-store",
    badge: "Featured / Spring Boot & Hibernate",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    summary: "Developed a Java Full Stack Library Management System using Spring Boot, Hibernate, and MySQL to manage books, members, and transactions efficiently.",
    description: "Digital Library Management System is a comprehensive enterprise Java web application engineered to streamline the entire lifecycle of library operations. Built with Spring Boot and Hibernate ORM, it provides robust book inventory tracking, student membership management, automated issue/return processing, fine calculations, and secure role-based access following clean MVC architecture and RESTful API principles.",
    highlights: [
      "Developed a Java Full Stack Library Management System using Spring Boot, Hibernate, and MySQL to manage books, members, and transactions efficiently.",
      "Implemented comprehensive CRUD operations, user authentication, and database integration while following MVC architecture and RESTful API design principles.",
      "Designed normalized relational database schema with Hibernate ORM mapping entity relationships (One-to-Many, Many-to-One) across Books, Patrons, and Borrow Records.",
      "Architected REST endpoints with proper HTTP status codes, validation, and structured exception handling.",
      "Designed a responsive and clean user interface using HTML5, CSS3, and JavaScript focusing on efficient book discovery and librarian workflows."
    ],
    techStack: [
      "Java 17",
      "Spring Boot",
      "Hibernate ORM",
      "MySQL",
      "RESTful APIs",
      "MVC Architecture",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    metrics: [
      { label: "Architecture", value: "Spring Boot MVC" },
      { label: "Persistence", value: "Hibernate ORM" },
      { label: "Database", value: "MySQL RDBMS" }
    ]
  },
  {
    id: "chat-next",
    title: "Chat Next – Real-Time WebSocket Chat Application",
    subtitle: "Bidirectional Real-Time Communication with Spring Boot & STOMP",
    category: "Real-Time & Networking",
    featured: true,
    image: "/projects/chatnext.svg",
    githubUrl: "https://github.com/Misspuja12/Chat-App",
    liveUrl: "https://github.com/Misspuja12/Chat-App",
    badge: "Real-Time / WebSocket (STOMP)",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    summary: "Developed a real-time chat application using Java 17, Spring Boot, WebSocket (STOMP), SockJS, and Thymeleaf for instant bidirectional messaging.",
    description: "Chat Next is an ultra-responsive, real-time bidirectional communication engine built with Java 17 and Spring Boot. Powered by the STOMP protocol over WebSocket with SockJS fallback, it delivers low-latency group and multi-channel conversations, user onboarding, message reactions, live search, and transcript exports.",
    highlights: [
      "Developed a real-time chat application using Java 17, Spring Boot, WebSocket (STOMP), SockJS, and Thymeleaf for instant bidirectional messaging.",
      "Implemented multi-channel chat rooms, user onboarding workflows, emoji message reactions, live text search, and transcript exports.",
      "Configured STOMP message broker to handle pub/sub event broadcasting across connected clients with minimal network overhead.",
      "Integrated SockJS fallback mechanism to guarantee uninterrupted connectivity across restrictive proxy environments.",
      "Designed a responsive web interface using HTML5, CSS3, and JavaScript ensuring seamless communication across desktop and mobile screens."
    ],
    techStack: [
      "Java 17",
      "Spring Boot",
      "WebSocket (STOMP)",
      "SockJS",
      "Thymeleaf",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    metrics: [
      { label: "Latency", value: "Real-Time (<50ms)" },
      { label: "Protocol", value: "STOMP & SockJS" },
      { label: "Messaging", value: "Multi-Channel Broadcast" }
    ]
  },
  {
    id: "complaint-management-system",
    title: "Complaint Management System",
    subtitle: "Enterprise Grievance Registration & Tracking System at HAL Koraput",
    category: "Industry Experience & Enterprise",
    featured: true,
    image: "/projects/complaint.svg",
    githubUrl: "https://github.com/Misspuja12",
    liveUrl: "https://github.com/Misspuja12",
    badge: "Industry Project / HAL Koraput",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    summary: "Contributed to the development of a Java Full Stack Complaint Management System for complaint registration, tracking, and resolution lifecycle management during internship at HAL.",
    description: "Developed during an industrial internship at Hindustan Aeronautics Limited (HAL), Koraput Division. The platform facilitates digitized complaint registration, automated departmental ticket routing, status tracking, and resolution auditing for internal organizational operations.",
    highlights: [
      "Contributed to the development of a Java Full Stack Complaint Management System for complaint registration, tracking, and management.",
      "Developed the frontend UI using HTML, CSS, and JavaScript, focusing on responsive layouts and user-friendly interfaces.",
      "Gained practical exposure to Java, JDBC, MySQL, CRUD operations, database connectivity, and Java OOP concepts while contributing to the application.",
      "Engineered secure database queries and transaction integrity ensuring grievance records are accurately preserved and updated."
    ],
    techStack: [
      "Java",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "OOP",
      "CRUD Operations"
    ],
    metrics: [
      { label: "Organization", value: "HAL Koraput Division" },
      { label: "Role", value: "Java Intern (2024)" },
      { label: "Data Access", value: "JDBC & MySQL" }
    ]
  },
  {
    id: "dsa-sql-problem-solving",
    title: "DSA & Database Problem Solving",
    subtitle: "150+ LeetCode DSA Solutions & 400+ Oracle SQL Queries",
    category: "Core CS & Problem Solving",
    featured: true,
    image: "/projects/problem-solving.svg",
    githubUrl: "https://github.com/Misspuja12",
    liveUrl: "https://github.com/Misspuja12",
    badge: "LeetCode & Oracle SQL",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    summary: "Solved 150+ DSA problems on LeetCode and 400+ SQL queries on Oracle SQL, strengthening problem-solving, algorithmic thinking, and database querying skills.",
    description: "A continuous commitment to algorithmic excellence and database query mastery. Rigorously trained in core Data Structures (Arrays, Strings, Linked Lists, Trees, Stacks, Queues) and relational querying spanning complex joins, aggregations, subqueries, and window functions.",
    highlights: [
      "Solved 150+ DSA problems on LeetCode strengthening problem-solving, algorithmic thinking, and time/space complexity optimization.",
      "Executed and mastered 400+ SQL queries on Oracle SQL, strengthening database querying, schema modeling, and transaction management.",
      "Comprehensive application of Object-Oriented Programming (OOP) paradigms including Polymorphism, Inheritance, Encapsulation, and Abstraction.",
      "Extensive experience with Regular Expressions (Regex) for data validation and pattern processing."
    ],
    techStack: [
      "Java",
      "Oracle SQL",
      "DSA",
      "LeetCode",
      "OOP",
      "DBMS",
      "Regex"
    ],
    metrics: [
      { label: "LeetCode DSA", value: "150+ Solved" },
      { label: "Oracle SQL", value: "400+ Queries" },
      { label: "Focus", value: "Algorithms & Databases" }
    ]
  }
];

export const projectFilterCategories = [
  "All",
  "Java Full Stack",
  "Real-Time & Networking",
  "Industry Experience & Enterprise",
  "Core CS & Problem Solving"
];
