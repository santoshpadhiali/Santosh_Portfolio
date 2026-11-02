import React from 'react';
import {
  IconGraduationCap,
  IconCalendar,
  IconMapPin,
  IconSparkles,
  IconAward,
  IconCheckCircle
} from './Icons';
import { educationData } from '../data';

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 via-blue-500/5 to-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <IconSparkles className="w-4 h-4" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Journey
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            My academic foundation in Computer Science and Engineering, pre-engineering science, and secondary education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className="relative md:pl-20 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-7 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:border-cyan-400 group-hover:scale-110 items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 z-10">
                  <IconGraduationCap className="w-4 h-4" />
                </div>

                {/* Education Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 group-hover:border-slate-700/90 shadow-xl transition-all duration-300 space-y-5">
                  
                  {/* Top Bar: Dates & Score Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        <IconCalendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </span>

                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Academic Score Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30 text-cyan-300">
                      <span className="text-xs font-medium text-slate-400">{item.gradeType}:</span>
                      <span className="text-base font-extrabold text-cyan-400">{item.score}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.degree}
                    </h3>
                    
                    <div className="text-base font-semibold text-slate-200 mt-1">
                      {item.institution}
                    </div>

                    <div className="text-xs text-slate-400 mt-0.5">
                      {item.affiliation}
                    </div>

                    {item.location && (
                      <div className="inline-flex items-center gap-1 text-xs text-slate-400 mt-1.5">
                        <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coursework & Focus Areas */}
                  {item.keyCoursework && item.keyCoursework.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                        Core Subjects &amp; Focus:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.keyCoursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/60"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-2">
                      <div className="space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <IconCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

