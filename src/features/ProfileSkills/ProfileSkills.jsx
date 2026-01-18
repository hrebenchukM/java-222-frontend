import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../ProfileSkills/ProfileSkills.css';

const ProfileSkills = () => {
  return (
      <>
    <div className="skills-card">
      <div className="section-header">
        <h2>Skills</h2>
        <button className="close-button">
          <X size={20} />
        </button>
      </div>
      <p className="section-description">
        Communicate your readiness for new opportunities - 50% of employers use skills data to fit their positions
      </p>
      <div className="skills-list">
        <p className="skill-item">Communication skillsт</p>
        <p className="skill-item muted">Technical skills</p>
      </div>
      <button className="btn-add">Add skills</button>
    </div>
         </>
  );
};

export default ProfileSkills;
