import React, { useState } from 'react';
import { Camera, Edit, ExternalLink } from 'lucide-react';
import '../ProfileHeader/ProfileHeader.css';
import RequestRecommendationModal from '../Modals/RequestRecommendationModal';

const ProfileHeader = () => {
     const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(false);

  return (
    <>
    <div className="profile-header-card">
      <div className="profile-banner">
        <button className="camera-button">
          <Camera size={20} />
        </button>
      </div>
      <div className="profile-main-info">
        <div className="profile-top-section">
          <div className="profile-avatar-section">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
              alt="Profile"
              className="profile-avatar"
            />
          </div>
          <button className="edit-profile-button">
            <Edit size={18} />
          </button>
        </div>
        <div className="profile-details">
          <div className="profile-name-row">
            <h1 className="profile-name">Nathaniel Evans</h1>
            <div className="profile-university-badge">
              <div className="university-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#7c3aed" strokeWidth="1.5"/>
                  <path d="M5 8l2 2 4-4" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>UCLA (Design Media Arts)</span>
            </div>
          </div>
          <p className="profile-title">Junior UI/UX Designer • Microsoft</p>
          <p className="profile-location">Klamath Falls, Oregon, USA</p>
          <div className="profile-links">
            <a href="#" className="profile-link">
              Change your custom portfolio link
              <ExternalLink size={14} />
            </a>
            <a href="#" className="profile-link">Edit contact information</a>
          </div>
          <div className="profile-actions">
            <button className="btn-primary">Open to</button>
            <button className="btn-secondary">Add profile section</button>
            <button className="btn-secondary" onClick={() => setIsRecommendationModalOpen(true)}>Request recommendation</button>
            <button className="btn-secondary">More</button>
          </div>
        </div>
      </div>
    </div>
          <RequestRecommendationModal isOpen={isRecommendationModalOpen} onClose={() => setIsRecommendationModalOpen(false)} />
    </>
  );
};

export default ProfileHeader;
