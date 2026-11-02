import React, { useState, useEffect } from 'react';
import { IconDownload, IconMenu, IconClose, IconSparkles } from './Icons';
import { profileData, navItems } from '../data';
import { useRouter } from '../context/RouterContext';

export const Navbar = ({ onDownloadResume, onOpenResumeModal }) => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="group flex items-center gap-2.5 focus:outline-none select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 p-[1.5px] transition-transform duration-200 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-base">
                  SP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase -mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Zero Layout Shift & Silky Smooth) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ease-out select-none active:scale-95 ${
                    isActive
                      ? 'border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-sm shadow-cyan-500/20'
                      : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-800/70 hover:border-slate-700/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Download Resume + Preview) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-95 select-none"
              title="Preview Resume"
            >
              Resume Preview
            </button>

            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 select-none"
            >
              <IconDownload className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              onClick={onDownloadResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-sm active:scale-95"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-150 active:scale-98 ${
                    isActive
                      ? 'border-cyan-500/30 bg-cyan-500/15 text-cyan-400'
                      : 'border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 text-sm font-semibold text-center text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl active:scale-98"
              >
                Preview Full Resume
              </button>
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-center text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-md active:scale-98"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
