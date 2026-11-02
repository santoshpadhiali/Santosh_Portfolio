/**
 * =========================================================================
 * NAVIGATION & FOOTER DATA CONFIGURATION
 * =========================================================================
 * Manage navigation menu items, social profile links, and footer data here!
 */

export const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/santoshpadhiali",
    icon: "github",
    description: "Explore my open-source code and projects",
    color: "hover:text-white hover:border-gray-500"
  },
  {
    name: "Email",
    url: "mailto:santoshpadhiali180@gmail.com",
    icon: "mail",
    description: "Direct email for business and inquiries",
    color: "hover:text-cyan-400 hover:border-cyan-500/50"
  },
  {
    name: "Phone",
    url: "tel:+918144107001",
    icon: "phone",
    description: "Call or message: +91 8144107001",
    color: "hover:text-emerald-400 hover:border-emerald-500/50"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918144107001?text=Hi%20Santosh,%20I%20saw%20your%20portfolio!",
    icon: "whatsapp",
    description: "Quick chat on WhatsApp",
    color: "hover:text-emerald-400 hover:border-emerald-500/50"
  }
];

export const footerData = {
  copyrightYear: new Date().getFullYear(),
  craftedWith: "React.js & Tailwind CSS",
  developerNote: "Designed & Built by Santosh Padhiali • Engineered for speed & performance.",
  quickLinks: [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Skills & Stack", path: "/skills" },
    { label: "Featured Projects", path: "/projects" },
    { label: "Education Journey", path: "/education" },
    { label: "Contact Me", path: "/contact" }
  ]
};
