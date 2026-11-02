import React from 'react';
import { Hero } from '../components/Hero';
import { useRouter } from '../context/RouterContext';
import {
  IconArrowUp,
  IconBriefcase,
  IconCode,
  IconGraduationCap,
  IconSparkles,
  IconExternalLink
} from '../components/Icons';
import { projectsData, skillsQuickList, educationData } from '../data';

export const HomePage = ({ onDownloadResume, onOpenResumeModal, onShowToast }) => {
  const { navigate } = useRouter();

  const featuredProjects = projectsData.slice(0, 2);
  const currentEducation = educationData[0];

  return (
    <div className="animate-fadeIn">
      {/* 1. Hero Landing Presentation */}
      <Hero
        onDownloadResume={onDownloadResume}
        onOpenResumeModal={onOpenResumeModal}
        onShowToast={onShowToast}
      />

      {/* 2. Quick Preview Section on Home */}
      <section className="py-16 bg-slate-950/80 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Quick Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Explore My Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: About */}
            <div 
              onClick={() => navigate('/about')}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconSparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  About Me
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Learn about my coding journey, CS background at KMBB (BPUT), and engineering values.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <span>View About Page</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 2: Projects */}
            <div 
              onClick={() => navigate('/projects')}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconCode className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Projects ({projectsData.length})
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  HireHub, AI Resume Builder, CHATliFY, and CodePulse with live demos and architecture.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-blue-400">
                <span>Explore All Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 3: Skills */}
            <div 
              onClick={() => navigate('/skills')}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconBriefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Skills &amp; Tech Stack
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  MERN, Redux Toolkit, Google Gemini AI, Strapi, WebSockets, Tailwind, and Core CS.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Inspect Skills</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 4: Education */}
            <div 
              onClick={() => navigate('/education')}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconGraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Education (8.34 CGPA)
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  B.Tech in CSE at KMBB (BPUT), Intermediate (70.16%), and Matriculation details.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-purple-400">
                <span>View Education Journey</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

          </div>

          {/* Quick CTA banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Interested in working together or hiring me?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                I am actively seeking software engineering roles and internships.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
              >
                Go to Contact Page
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

