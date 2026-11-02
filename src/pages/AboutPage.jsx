import React from 'react';
import { About } from '../components/About';

export const AboutPage = ({ onDownloadResume, onOpenResumeModal, onShowToast }) => {
  return (
    <div className="pt-20 min-h-screen animate-fadeIn">
      <About
        onDownloadResume={onDownloadResume}
        onOpenResumeModal={onOpenResumeModal}
        onShowToast={onShowToast}
      />
    </div>
  );
};

