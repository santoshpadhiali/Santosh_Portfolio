import React from 'react';
import { IconClose, IconDownload, IconExternalLink, IconSparkles } from './Icons';
import { profileData } from '../data';

export const ResumeModal = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <IconSparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {profileData.name} — Resume
              </h3>
              <p className="text-xs text-slate-400">
                {profileData.role} • 8.34 CGPA • B.Tech CSE ('26)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              onClick={onDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-md hover:shadow-cyan-500/25 transition-all duration-200"
            >
              <IconDownload className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={profileData.resume.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <IconExternalLink className="w-4 h-4" />
              <span>New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame / Preview */}
        <div className="flex-1 w-full bg-slate-950 min-h-[500px] overflow-hidden relative">
          <iframe
            src={`${profileData.resume.viewUrl}#toolbar=0`}
            title="Santosh Padhiali Resume"
            className="w-full h-full min-h-[550px] border-none"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <span>Need a direct copy? Click Download above or reach out at <strong className="text-slate-200">{profileData.email}</strong></span>
          <span className="text-cyan-400 font-medium">Santosh Padhiali • Portfolio</span>
        </div>
      </div>
    </div>
  );
};

