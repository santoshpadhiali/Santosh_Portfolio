import React, { useState } from 'react';
import {
  IconCode,
  IconServer,
  IconDatabase,
  IconCpu,
  IconTerminal,
  IconSparkles,
  DynamicIcon
} from './Icons';
import { skillsCategories, skillsQuickList } from '../data';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = activeCategory === "all"
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <IconSparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Proficiencies
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Hands-on expertise across modern frontend libraries, backend architectures, databases, and core computer science fundamentals.
          </p>
        </div>

        {/* Quick Skills Marquee / Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {skillsQuickList.map((skill, index) => (
            <span
              key={index}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:scale-105 transition-all cursor-default shadow-sm"
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800"
            }`}
          >
            All Skills
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800"
              }`}
            >
              <DynamicIcon name={cat.icon} className="w-4 h-4" />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm">
                    <DynamicIcon name={category.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.skills.length} core technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700/50">
                            {skill.badge}
                          </span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-700/40">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified in production projects</span>
                <span className="text-cyan-400/80 font-medium">Ready for deployment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

