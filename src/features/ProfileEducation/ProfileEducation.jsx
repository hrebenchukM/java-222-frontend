import React from 'react';
import { Plus, Edit } from 'lucide-react';
import '../ProfileEducation/ProfileEducation.css';

const ProfileEducation = () => {
  return (
    <div className="education-card">
      <div className="section-header">
        <h2>Education</h2>
        <div className="section-actions">
          <button className="icon-button">
            <Plus size={18} />
          </button>
          <button className="icon-button">
            <Edit size={18} />
          </button>
        </div>
      </div>
      <div className="education-item">
        <div className="education-logo">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1"
            alt="UCLA"
            className="university-img"
          />
        </div>
        <div className="education-content">
          <h3>University of California, Los Angeles (UCLA)</h3>
          <p className="education-date">2014-2018</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;
