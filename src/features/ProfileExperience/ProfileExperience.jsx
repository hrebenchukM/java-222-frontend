import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../ProfileExperience/ProfileExperience.css';
import AddExperienceModal from '../Modals/AddExperienceModal';

const Briefcase = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const ProfileExperience = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <>
    <div className="experience-card">
      <div className="section-header">
        <h2>Experience</h2>
        <button className="close-button">
          <X size={20} />
        </button>
      </div>
      <p className="section-description">
        Show everyone your achievements and get twice as many profile and contact information views
      </p>
      <div className="experience-item">
        <div className="experience-icon">
          <Briefcase size={24} />
        </div>
        <div className="experience-content">
          <h3>Position</h3>
          <p className="experience-org">Organization</p>
          <p className="experience-date">2012 - now</p>
        </div>
      </div>
      <button className="btn-add" onClick={() => setIsModalOpen(true)}>Add experience</button>
    </div>
       <AddExperienceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
  );
};

export default ProfileExperience;
