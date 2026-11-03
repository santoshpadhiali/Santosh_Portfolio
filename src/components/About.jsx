import React, { useState } from 'react';
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconEye,
  IconMail,
  IconPhone,
  IconMapPin,
  IconSparkles,
  IconBriefcase,
  IconAward,
  IconCalendar,
  IconCheckCircle,
  IconCode
} from './Icons';
import { profileData } from '../data';

export const About = ({ onDownloadResume, onOpenResumeModal, onShowToast }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <IconSparkles className="w-4 h-4" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Me
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Aspiring Java Full Stack Developer bridging algorithmic problem-solving with scalable enterprise application architectures.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>Who is {profileData.name}?</span>
              </h3>
              
              {profileData.bioFull.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={profileData.resume.downloadUrl}
                  download={profileData.resume.fileName}
                  onClick={onDownloadResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <IconDownload className="w-4 h-4" />
                  <span>Download Complete Resume</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                >
                  <IconEye className="w-4 h-4 text-cyan-400" />
                  <span>Preview PDF</span>
                </button>
              </div>
            </div>

            {/* Quick Contact & Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-bold text-white truncate">{profileData.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.email, "Email")}
                  className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedField === "Email" ? <IconCheck className="w-4 h-4 text-emerald-400" /> : <IconCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium">Phone &amp; WhatsApp</div>
                    <div className="text-sm font-bold text-white truncate">{profileData.displayPhone}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.phone, "Phone number")}
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0 ml-2"
                  title="Copy phone"
                >
                  {copiedField === "Phone number" ? <IconCheck className="w-4 h-4 text-emerald-400" /> : <IconCopy className="w-4 h-4" />}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Engineering Pillars & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Core Strengths &amp; Engineering Focus
            </h4>

            {profileData.highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">
                    0{index + 1}
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h5>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-10">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Quick Profile Summary Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/60 border border-indigo-500/30 shadow-lg">
              <div className="flex items-center gap-2.5 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <IconBriefcase className="w-4 h-4" />
                Seeking Opportunities
              </div>
              <p className="text-sm text-slate-300">
                Seeking an opportunity to apply technical and problem-solving skills in building scalable applications, collaborate on innovative projects, and continuously learn new technologies while contributing to organizational success.
              </p>
            </div>
          </div>

        </div>

        {/* Industry Experience Section (HAL Koraput) */}
        {profileData.experience && profileData.experience.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800/80">
            <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <IconBriefcase className="w-4 h-4" />
              <span>Industry Work Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Experience
              </span>
            </h3>

            <div className="space-y-6">
              {profileData.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h4>
                        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="text-base font-semibold text-cyan-400 mt-1">
                        {exp.company} — <span className="text-slate-300">{exp.division}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-slate-700">
                      <IconCalendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <IconCheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {exp.techStack && (
                    <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mr-2">
                        Technologies:
                      </span>
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications & Achievements Grid */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <IconAward className="w-4 h-4" />
              <span>Training &amp; Credentials</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-6">
              Certifications &amp; Courses
            </h3>

            <div className="space-y-4">
              {profileData.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <IconAward className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {cert.status}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-slate-400 mb-2">
                      Issuer: <strong className="text-slate-200">{cert.issuer}</strong>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <IconSparkles className="w-4 h-4" />
              <span>Milestones &amp; Problem Solving</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-6">
              Key Achievements
            </h3>

            <div className="space-y-4">
              {profileData.achievements.map((ach, aIdx) => (
                <div
                  key={aIdx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <IconCheckCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <h4 className="text-base font-bold text-white">{ach.title}</h4>
                      <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {ach.metric}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
