/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION
 * =========================================================================
 * Add, edit, or remove technical skills here. Any changes will immediately
 * reflect in the Skills & About sections of the portfolio!
 */

export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "code",
    color: "from-blue-500 to-cyan-400",
    description: "Crafting fast, dynamic, and responsive web user interfaces.",
    skills: [
      { name: "React.js", level: 92, experience: "Advanced", badge: "Core" },
      { name: "JavaScript (ES6+)", level: 92, experience: "Advanced", badge: "Core" },
      { name: "Redux Toolkit", level: 88, experience: "Advanced", badge: "State Mgmt" },
      { name: "Tailwind CSS", level: 90, experience: "Advanced", badge: "Styling" },
      { name: "HTML5 & Semantic Web", level: 95, experience: "Expert", badge: "Markup" },
      { name: "CSS3 & Animations", level: 88, experience: "Advanced", badge: "Styling" },
      { name: "Bootstrap", level: 85, experience: "Proficient", badge: "Framework" },
      { name: "Responsive UI/UX", level: 92, experience: "Advanced", badge: "Design" }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "server",
    color: "from-emerald-500 to-teal-400",
    description: "Building scalable server architectures, REST APIs, and real-time sockets.",
    skills: [
      { name: "Node.js", level: 88, experience: "Advanced", badge: "Runtime" },
      { name: "Express.js", level: 86, experience: "Advanced", badge: "Framework" },
      { name: "RESTful API Design", level: 90, experience: "Advanced", badge: "Architecture" },
      { name: "Strapi Headless CMS", level: 85, experience: "Proficient", badge: "Headless CMS" },
      { name: "Socket.io", level: 84, experience: "Proficient", badge: "Real-time" },
      { name: "JWT Authentication", level: 88, experience: "Advanced", badge: "Security" },
      { name: "Clerk Auth & GetStream", level: 80, experience: "Hands-on", badge: "SDK" }
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    icon: "database",
    color: "from-purple-500 to-indigo-400",
    description: "Designing structured and NoSQL schemas, queries, and media CDNs.",
    skills: [
      { name: "MongoDB", level: 88, experience: "Advanced", badge: "NoSQL" },
      { name: "Oracle SQL", level: 82, experience: "Proficient", badge: "RDBMS" },
      { name: "Database Design & Modeling", level: 85, experience: "Proficient", badge: "Architecture" },
      { name: "Cloudinary Media CDN", level: 86, experience: "Proficient", badge: "Cloud Media" }
    ]
  },
  {
    id: "core",
    title: "Core CS & Languages",
    icon: "cpu",
    color: "from-amber-500 to-orange-400",
    description: "Strong theoretical foundations driving optimized problem solving.",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 85, experience: "Solid Foundation", badge: "CS Core" },
      { name: "Object Oriented Programming (OOP)", level: 90, experience: "Advanced", badge: "Paradigm" },
      { name: "Database Management Systems (DBMS)", level: 86, experience: "Proficient", badge: "CS Core" },
      { name: "C / C++ Basics", level: 80, experience: "Academic", badge: "Language" },
      { name: "Core Java Basics", level: 75, experience: "Academic", badge: "Language" },
      { name: "Python Basics", level: 75, experience: "Academic", badge: "Language" }
    ]
  },
  {
    id: "tools",
    title: "Dev Tools & AI Integration",
    icon: "terminal",
    color: "from-pink-500 to-rose-400",
    description: "Version control, build tools, AI APIs, testing, and modern developer environments.",
    skills: [
      { name: "Google Gemini AI API", level: 88, experience: "Hands-on", badge: "Generative AI" },
      { name: "Git & GitHub", level: 90, experience: "Advanced", badge: "VCS" },
      { name: "Vite & Modern Bundlers", level: 90, experience: "Advanced", badge: "Build" },
      { name: "Postman API Testing", level: 86, experience: "Proficient", badge: "Testing" },
      { name: "VS Code & Debugging", level: 92, experience: "Advanced", badge: "IDE" },
      { name: "Vercel / Cloud Deployment", level: 82, experience: "Hands-on", badge: "Hosting" }
    ]
  }
];

export const skillsQuickList = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Redux Toolkit",
  "Google Gemini AI",
  "Strapi CMS",
  "Tailwind CSS",
  "Socket.io",
  "Oracle SQL",
  "Cloudinary",
  "JWT",
  "OOP",
  "DSA",
  "Git & GitHub"
];
