import React from 'react';
import { useRouter } from '../context/RouterContext';
import { IconSparkles, IconArrowUp, IconCode } from '../components/Icons';

export const NotFoundPage = () => {
  const { currentPath, navigate } = useRouter();

  return (
    <div className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center relative overflow-hidden animate-fadeIn">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404 Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* Big Futuristic 404 Display */}
        <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight leading-none">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight">
          Page Not Found
        </h2>

        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
          The requested route <code className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono">{currentPath}</code> does not exist on this portfolio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200"
          >
            ← Return to Home
          </button>

          <button
            onClick={() => navigate('/projects')}
            className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-all"
          >
            View Projects
          </button>
        </div>

        {/* Quick Links Menu */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-4">
            Popular Destinations
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Skills', path: '/skills' },
              { label: 'Projects', path: '/projects' },
              { label: 'Education', path: '/education' },
              { label: 'Contact', path: '/contact' }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => navigate(link.path)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

