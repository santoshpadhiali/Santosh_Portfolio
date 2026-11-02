/**
 * =========================================================================
 * PROJECTS DATA CONFIGURATION
 * =========================================================================
 * Modify or add projects here. Every project card, modal details view,
 * tech stack tag, and GitHub link will automatically update across the portfolio!
 */

export const projectsData = [
  {
    id: "hire-hub",
    title: "HireHub",
    subtitle: "Full-Stack Job Portal Application with Role-Based Access",
    category: "Full Stack & Web Apps",
    featured: true,
    image: "/projects/hirehub.svg",
    githubUrl: "https://github.com/santoshpadhiali/Hire-HUB",
    liveUrl: "https://github.com/santoshpadhiali/Hire-HUB",
    badge: "Featured / Full-Stack MERN",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    summary: "Developed a full-stack Job Portal Platform (HireHub) using the MERN stack, enabling users to search, apply, and manage job applications efficiently with Redux Toolkit and Cloudinary.",
    description: "HireHub is a modern, responsive, full-stack MERN (MongoDB, Express.js, React, Node.js) web application engineered to bridge the gap between job seekers (students/candidates) and recruiters (employers/companies). Built with state-of-the-art web technologies including Redux Toolkit, Tailwind CSS, Vite, JWT authentication, and Cloudinary, HireHub delivers a seamless hiring lifecycle: from candidate job discovery, real-time filtering, and one-click applications to recruiter company onboarding, job vacancy distribution, candidate resume reviews, and status management.",
    highlights: [
      "Developed a full-stack Job Portal Platform (HireHub) using the MERN stack, enabling users to search, apply, and manage job applications efficiently.",
      "Designed a responsive and modern UI using React.js and Tailwind CSS with Redux Toolkit for centralized state management, focusing on user experience, performance, and accessibility.",
      "Implemented JWT-based authentication with role-based access (Job Seekers & Recruiters) ensuring secure user management and protected routes.",
      "Built scalable RESTful APIs with Node.js, Express.js, and MongoDB, supporting job listings, multi-criteria filtering, and application tracking.",
      "Integrated Cloudinary for candidate resume storage, profile pictures, and recruiter company logos.",
      "Full recruiter dashboard: company registration, posting vacancies, reviewing candidate resumes, and tracking pipeline stages (Applied, In Review, Shortlisted, Accepted, Rejected)."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vite",
      "JWT Auth",
      "Cloudinary"
    ],
    metrics: [
      { label: "Lifecycle", value: "Candidate & Recruiter" },
      { label: "State Mgmt", value: "Redux Toolkit" },
      { label: "Media Storage", value: "Cloudinary CDN" }
    ]
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    subtitle: "Dynamic Resume Builder with Google Gemini AI & Strapi Backend",
    category: "AI & Cloud",
    featured: true,
    image: "/projects/airesume.svg",
    githubUrl: "https://github.com/santoshpadhiali/Ai-resume-Billder",
    liveUrl: "https://github.com/santoshpadhiali/Ai-resume-Billder",
    badge: "AI Powered / Strapi CMS",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    summary: "Built a dynamic resume builder using React.js with a Strapi backend for structured data management, integrated with Google Gemini AI for smart content generation.",
    description: "An intelligent resume creation platform leveraging the power of Google Gemini AI to assist users in crafting professional, ATS-optimized resumes. Powered by a flexible Strapi Headless CMS backend for structured resume storage, dynamic sections, and instant PDF generation.",
    highlights: [
      "Built a dynamic resume builder using React.js with a Strapi backend for structured data management.",
      "Integrated Google Gemini AI for smart content generation, automated bullet-point rewriting, and professional suggestions.",
      "Dynamic form schemas allowing users to customize work history, education, certifications, and technical skills in real time.",
      "ATS score optimization feedback to ensure resumes pass corporate screening algorithms.",
      "Clean, modern UI designed with Tailwind CSS and Vite for sub-second build times and rendering."
    ],
    techStack: [
      "React.js",
      "Google Gemini AI",
      "Strapi CMS",
      "Tailwind CSS",
      "Vite",
      "REST APIs"
    ],
    metrics: [
      { label: "AI Engine", value: "Google Gemini" },
      { label: "CMS Backend", value: "Strapi Headless" },
      { label: "Optimization", value: "ATS Compliant" }
    ]
  },
  {
    id: "chatlify",
    title: "CHATliFY",
    subtitle: "Real-time MERN Chat Application with Socket.io",
    category: "Real-time & MERN",
    featured: true,
    image: "/projects/chatlify.svg",
    githubUrl: "https://github.com/santoshpadhiali/CHATliFY",
    liveUrl: "https://github.com/santoshpadhiali/CHATliFY",
    badge: "Real-Time / Socket.io",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    summary: "Developed a scalable real-time chat application using MERN & Socket.io, enabling low-latency bidirectional communication with secure JWT authentication and Cloudinary media handling.",
    description: "CHATliFY is an ultra-fast bidirectional communication platform built with the MERN stack and Socket.io. It supports one-on-one and group chat rooms, instant message broadcasting, media sharing powered by Cloudinary, active online user status, and secure JWT-based session protection.",
    highlights: [
      "Low-latency bidirectional communication with Socket.io WebSockets",
      "Secure JWT-based authentication with protected routes and cookie sessions",
      "RESTful APIs engineered with Node.js & Express.js",
      "MongoDB database modeling for scalable message threads and user profiles",
      "Cloudinary integration for seamless image and media handling"
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Latency", value: "< 50ms" },
      { label: "Protocol", value: "WebSockets" },
      { label: "Auth", value: "JWT Tokens" }
    ]
  },
  {
    id: "code-pulse",
    title: "CodePulse (Code Plus)",
    subtitle: "Real-time Collaborative Coding Platform with Multi-Language Sandbox",
    category: "Collaboration & Cloud",
    featured: true,
    image: "/projects/codepulse.svg",
    githubUrl: "https://github.com/santoshpadhiali/Code-Plus-",
    liveUrl: "https://github.com/santoshpadhiali/Code-Plus-",
    badge: "Collaboration / Video",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    summary: "Full-stack real-time collaborative coding platform using React.js, Node.js/Express, MongoDB, and GetStream SDK, featuring live video calls, synchronized editor, and secure multi-language code execution.",
    description: "CodePulse allows developers to interview, pair program, and brainstorm code in real-time. It features video calls and chat powered by GetStream SDK, a multi-user code editor with real-time cursor synchronisation, and a sandboxed compiler supporting JavaScript, Java, Python, C, and C++ with role-based Clerk authentication.",
    highlights: [
      "Integrated GetStream SDK for high-definition live video calling, audio, and room chat",
      "Multi-user code editor with real-time cursor syncing and simultaneous editing",
      "Secure sandboxed code execution environment supporting JavaScript, Java, Python, C, and C++",
      "Clerk-powered authentication with enterprise-grade role-based access control",
      "Optimized application performance with fast load times and HTTPS security"
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GetStream SDK",
      "Clerk Auth",
      "Compiler Sandbox",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Languages", value: "JS, Java, Py, C, C++" },
      { label: "Video Calls", value: "GetStream HD" },
      { label: "Security", value: "Sandboxed Runner" }
    ]
  }
];

export const projectFilterCategories = [
  "All",
  "Full Stack & Web Apps",
  "AI & Cloud",
  "Real-time & MERN",
  "Collaboration & Cloud"
];
