import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  IconDownload,
  IconEye,
  IconGithub,
  IconMail,
  IconSparkles,
  IconArrowUp,
  IconCheck,
  IconCode,
  IconServer,
  IconDatabase
} from './Icons';
import { profileData } from '../data';

export const Hero = ({ onDownloadResume, onOpenResumeModal, onShowToast }) => {
  const { navigate } = useRouter();
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % profileData.taglines.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadClick = () => {
    onDownloadResume();
    if (onShowToast) {
      onShowToast(`${profileData.preferredName}'s Resume downloaded successfully!`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {profileData.statusBadge}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-cyan-400 flex items-center justify-center lg:justify-start gap-2">
                <IconSparkles className="w-4 h-4 text-cyan-400" />
                Hello, Welcome to my Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  {profileData.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Rotating Tagline */}
            <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-bold text-slate-300">
                Crafting{" "}
                <span 
                  key={taglineIndex}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 border-b-2 border-cyan-400/60 pb-0.5 animate-fadeIn"
                >
                  {profileData.taglines[taglineIndex]}
                </span>
              </span>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {profileData.bioIntro}
            </p>

            {/* Primary Action Buttons (Download Resume + Explore Projects) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              
              {/* Core Requirement 1: Download Resume Functionality */}
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                onClick={handleDownloadClick}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <IconDownload className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
                <span>{profileData.resume.buttonText}</span>
              </a>

              {/* View Resume in Modal */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-slate-600 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <IconEye className="w-5 h-5 text-cyan-400" />
                <span>{profileData.resume.secondaryButtonText}</span>
              </button>

              {/* Browse Projects */}
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all duration-200"
              >
                <IconCode className="w-5 h-5 text-indigo-400" />
                <span>See Projects</span>
              </button>
            </div>

            {/* Quick Links & Contact Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Connect:
              </span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
                title="GitHub Profile"
              >
                <IconGithub className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
                title="Send Email"
              >
                <IconMail className="w-5 h-5" />
              </a>
              <span className="text-xs text-slate-400 hidden sm:inline">
                • {profileData.location}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Profile Portrait & Tech Stack Orbit */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-2xl animate-pulse" />
              
              {/* Portrait Container with Modern Tech Frame */}
              <div className="relative w-full h-full rounded-3xl p-1.5 bg-gradient-to-tr from-cyan-500/80 via-blue-500/40 to-indigo-500/80 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-[22px] bg-slate-950 overflow-hidden">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Bottom Portrait Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{profileData.name}</div>
                      <div className="text-xs text-cyan-400 font-medium">{profileData.role}</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-bold text-cyan-300">
                      8.4 CGPA
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              {/* Badge 1: Java */}
              <div className="absolute -top-4 -left-4 px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce [animation-duration:3s]">
                <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                  ☕
                </div>
                <span className="text-xs font-bold text-white">Java 17</span>
              </div>

              {/* Badge 2: Spring Boot */}
              <div className="absolute -bottom-3 -left-3 px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                  🍃
                </div>
                <span className="text-xs font-bold text-white">Spring Boot</span>
              </div>

              {/* Badge 3: WebSocket / STOMP */}
              <div className="absolute -top-4 -right-3 px-3 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce [animation-duration:3.5s]">
                <span className="text-purple-400 text-xs">⚡</span>
                <span className="text-xs font-bold text-white">WebSocket</span>
              </div>

              {/* Badge 4: Oracle SQL */}
              <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">
                  🗄️
                </div>
                <span className="text-xs font-bold text-white">Oracle SQL</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 group"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

