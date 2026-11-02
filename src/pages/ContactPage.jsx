import React from 'react';
import { Contact } from '../components/Contact';

export const ContactPage = ({ onShowToast }) => {
  return (
    <div className="pt-20 min-h-screen animate-fadeIn">
      <Contact onShowToast={onShowToast} />
    </div>
  );
};

