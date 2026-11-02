import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { IconCheckCircle } from './components/Icons';
import { profileData } from './data';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function PortfolioApp() {
  const { currentPath } = useRouter();
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleDownloadResume = () => {
    showToast(`Downloading ${profileData.name}'s Resume...`);
  };

  // Route selector: Renders only the requested page (+ Navbar & Footer)
  const renderCurrentPage = () => {
    const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '').toLowerCase();

    switch (path) {
      case '/':
      case '':
        return (
          <HomePage
            onDownloadResume={handleDownloadResume}
            onOpenResumeModal={() => setResumeModalOpen(true)}
            onShowToast={showToast}
          />
        );
      case '/about':
        return (
          <AboutPage
            onDownloadResume={handleDownloadResume}
            onOpenResumeModal={() => setResumeModalOpen(true)}
            onShowToast={showToast}
          />
        );
      case '/skills':
        return <SkillsPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/education':
        return <EducationPage />;
      case '/contact':
        return <ContactPage onShowToast={showToast} />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navbar with Active Page Indicators */}
      <Navbar
        onDownloadResume={handleDownloadResume}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Dynamic Active Page Content with Silky Smooth Transition */}
      <main className="flex-1 min-h-[75vh]">
        <div key={currentPath} className="animate-fadeIn">
          {renderCurrentPage()}
        </div>
      </main>

      {/* Footer across all pages */}
      <Footer
        onDownloadResume={handleDownloadResume}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 border border-cyan-500/50 text-white text-sm font-semibold shadow-2xl shadow-cyan-500/20 backdrop-blur-md animate-fadeIn">
          <IconCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <PortfolioApp />
    </RouterProvider>
  );
}
