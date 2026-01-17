import React from 'react';

import './ProfilePage.css';
import ProfileHeader from '../../features/ProfileHeader/ProfileHeader';
import ProfileAnalytics from '../../features/ProfileAnalytics/ProfileAnalytics';
import ProfileExperience from '../../features/ProfileExperience/ProfileExperience';
import ProfileEducation from '../../features/ProfileEducation/ProfileEducation';
import ProfileSkills from '../../features/ProfileSkills/ProfileSkills';

const ProfilePage = ({ onNavigate }) => {
  return (
    <main className="main-content">
        <div className="container">
          <div className="profile-page">
            <div className="profile-content">
              <ProfileHeader />
              <ProfileAnalytics />
              <ProfileExperience />
              <ProfileEducation />
              <ProfileSkills />
            </div>
          </div>
        </div>
      </main>
  );
};

export default ProfilePage;
