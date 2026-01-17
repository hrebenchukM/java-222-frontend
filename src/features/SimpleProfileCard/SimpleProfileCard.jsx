import React from 'react';
import '../SimpleProfileCard/SimpleProfileCard.css';

const SimpleProfileCard = () => {
  return (
    <div className="simple-profile-card">
      <div className="simple-profile-content">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
          alt="Profile"
          className="simple-profile-avatar"
        />
        <h3 className="simple-profile-name">Nathaniel Evans</h3>
        <p className="simple-profile-title">Junior UI/UX Designer • Microsoft</p>
      </div>

      <div className="simple-profile-divider"></div>

      <button className="work-experience-btn">+ Work experience</button>
    </div>
  );
};

export default SimpleProfileCard;
