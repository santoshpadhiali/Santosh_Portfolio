/**
 * =========================================================================
 * NAVIGATION & FOOTER DATA CONFIGURATION - MONALISA BEHERA
 * =========================================================================
 * Navigation menu items, social profile links, and footer configuration.
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
    url: "https://github.com/Misspuja12",
    icon: "github",
    description: "Explore my GitHub repositories and code",
    color: "hover:text-white hover:border-gray-500"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
    description: "Connect on LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-500/50"
  },
  {
    name: "Email",
    url: "mailto:m4264548@gmail.com",
    icon: "mail",
    description: "Direct email: m4264548@gmail.com",
    color: "hover:text-cyan-400 hover:border-cyan-500/50"
  },
  {
    name: "Phone",
    url: "tel:+918093174459",
    icon: "phone",
    description: "Call or message: +91 8093174459",
    color: "hover:text-emerald-400 hover:border-emerald-500/50"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918093174459?text=Hi%20Monalisa,%20I%20saw%20your%20portfolio!",
    icon: "whatsapp",
    description: "Quick chat on WhatsApp",
    color: "hover:text-emerald-400 hover:border-emerald-500/50"
  }
];

export const footerData = {
  copyrightYear: new Date().getFullYear(),
  craftedWith: "React.js & Tailwind CSS",
  developerNote: "Designed & Built by Monalisa Behera • Java Full Stack Developer.",
  quickLinks: [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Skills & Stack", path: "/skills" },
    { label: "Featured Projects", path: "/projects" },
    { label: "Education Journey", path: "/education" },
    { label: "Contact Me", path: "/contact" }
  ]
};
