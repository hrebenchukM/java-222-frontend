import React from 'react';
import { useContext, useEffect, useState } from "react";
import AppContext from "../../features/appContext/AppContext";
import './ProfilePage.css';
import ProfileHeader from '../../features/ProfileHeader/ProfileHeader';
import ProfileAnalytics from '../../features/ProfileAnalytics/ProfileAnalytics';
import ProfileExperience from '../../features/ProfileExperience/ProfileExperience';
import ProfileEducation from '../../features/ProfileEducation/ProfileEducation';
import ProfileSkills from '../../features/ProfileSkills/ProfileSkills';

const emptyProfile = {
  login: null,
  role: null,
  user: {}
};const ProfilePage = () => {
  const { request, token } = useContext(AppContext);
  const [profile, setProfile] = useState(emptyProfile);

  useEffect(() => {
    if (token) {
      request("api://user/profile")
        .then(setProfile)
        .catch(() => setProfile(emptyProfile));
    }
    else {
      setProfile(emptyProfile);
    }
  }, [token]);

  if (!token) {
    return (
      <div className="alert alert-danger mt-4 text-center">
        Профіль доступний після входу
      </div>
    );
  }

  return (
    <main className="main-content">
        <div className="container">
          <div className="profile-page">
            <div className="profile-content">
              <ProfileHeader profile={profile}/>
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
