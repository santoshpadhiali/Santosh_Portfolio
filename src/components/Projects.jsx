import React, { useState } from 'react';
import {
  IconExternalLink,
  IconGithub,
  IconSparkles,
  IconEye,
  IconCheckCircle
} from './Icons';
import { projectsData, projectFilterCategories, profileData } from '../data';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleOpenDetails = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <IconSparkles className="w-4 h-4" />
            <span>Featured Software Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production-Ready{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Java Full Stack applications, real-time WebSocket communication engines, and enterprise database solutions built with scalable architecture.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {projectFilterCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image & Overlay */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => handleOpenDetails(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${project.badgeColor || 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-lg">
                    <IconEye className="w-4 h-4" />
                    <span>View Architecture</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 
                      className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                      onClick={() => handleOpenDetails(project)}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <IconCheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-slate-800/80 rounded-md border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                    >
                      <IconEye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Details &amp; Architecture</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <IconGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800/90 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">
              Looking for more repositories &amp; open source code?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Check out all my work, commits, and experiments on GitHub.
            </p>
          </div>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-md transition-all shrink-0"
          >
            <IconGithub className="w-5 h-5" />
            <span>Visit GitHub Profile</span>
            <IconExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

