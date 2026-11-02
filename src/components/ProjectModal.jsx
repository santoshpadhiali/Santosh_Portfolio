import React from 'react';
import { IconClose, IconExternalLink, IconGithub, IconCheckCircle, IconSparkles } from './Icons';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${project.badgeColor || 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Project Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/60 shadow-lg bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[360px]"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700 rounded-full backdrop-blur-sm">
                Interactive Architecture Preview
              </span>
            </div>
          </div>

          {/* Subtitle & Description */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">{project.subtitle}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description || project.summary}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-slate-400">{metric.label}</div>
                  <div className="text-sm sm:text-base font-bold text-cyan-400 mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Core Features & Architectural Highlights */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <IconSparkles className="w-4 h-4 text-cyan-400" />
              Key Technical Implementations
            </h5>
            <ul className="space-y-2">
              {project.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <IconCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Technologies &amp; Libraries
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Source code published on GitHub under open license
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all"
            >
              <IconGithub className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md hover:shadow-cyan-500/25 transition-all"
            >
              <span>Explore Project</span>
              <IconExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

