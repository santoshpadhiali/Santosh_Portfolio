import React from 'react';
import {
  IconArrowUp,
  IconDownload,
  IconGithub,
  IconMail,
  IconPhone,
  IconWhatsapp,
  IconSparkles,
  DynamicIcon
} from './Icons';
import { profileData, socialLinks, footerData, navItems } from '../data';
import { useRouter } from '../context/RouterContext';

export const Footer = ({ onDownloadResume, onOpenResumeModal }) => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Avatar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-md shadow-cyan-500/20 shrink-0">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  {profileData.name}
                </span>
                <p className="text-xs text-cyan-400 font-medium">
                  {profileData.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Java Full Stack Developer graduating in Computer Science &amp; Engineering from KMBB (BPUT) in 2026. Passionate about scalable backend systems, Spring Boot, WebSocket architectures, and relational database optimization.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 transition-all ${social.color}`}
                  title={social.description || social.name}
                >
                  <DynamicIcon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume & Opportunities */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Curriculum Vitae / Resume
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Download the official PDF resume containing all academic records, project architectures, and verified skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors"
              >
                <span>Preview PDF</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">● Immediate Joiner:</span> Open for internships &amp; full-time positions.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {footerData.copyrightYear} {profileData.name}. All rights reserved.
            <span className="block sm:inline sm:ml-2 text-slate-600">
              • Built with React &amp; Tailwind CSS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all"
          >
            <span>Back to top</span>
            <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
