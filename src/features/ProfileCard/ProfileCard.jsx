import React from 'react';
import { Bookmark } from 'lucide-react';
import'../ProfileCard/ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
          alt="Profile"
          className="profile-avatar"
        />
        <h3 className="profile-name">Nathaniel Evans</h3>
        <p className="profile-title">Junior UI/UX Designer • Microsoft</p>
      </div>

      <div className="profile-divider"></div>

      <div className="profile-contacts">
        <h4 className="contacts-title">Contacts</h4>
        <p className="contacts-subtitle">Expand your network of contacts</p>
      </div>

      <div className="profile-divider"></div>

      <div className="profile-saved">
        <Bookmark size={16} />
        <span>Saved elements</span>
      </div>
    </div>
  );
};

export default ProfileCard;
