import React from 'react';
import '../ChatProfilePanel/ChatProfilePanel.css';

const ChatProfilePanel = ({ selectedUser, showProfile, onBackClick }) => {
  return (
    <div className={`chat-profile ${showProfile ? 'show-profile' : ''}`}>
      <button className="profile-back-button" onClick={onBackClick}>
        ←
      </button>
      <div className="profile-avatar-large">
        <img src={selectedUser?.avatar} alt={selectedUser?.name} />
      </div>
      <h2 className="profile-name">{selectedUser?.name}</h2>

      <div className="profile-section">
        <label>Phone Number</label>
        <p>+880 789 569 895</p>
      </div>

      <div className="profile-section">
        <label>Email Address</label>
        <p>MarcusAntonioDias@gmail.com</p>
      </div>

      <div className="profile-section">
        <label>Current Position</label>
        <p className="profile-position">Senior Design Manager • Microsoft</p>
        <p className="profile-duration">2022 - now (3 years)</p>
      </div>

      <div className="profile-section">
        <label>Education</label>
        <p className="profile-education">University of Texas, Austin (UT Austin)</p>
        <p className="profile-degree">Bachelor of Fine Arts (B.F.A.) 2011-2015</p>
        <p className="profile-degree">Master of Fine Arts (M.F.A.) 2015 - 2017</p>
      </div>

      <div className="profile-section">
        <label>Birth Date</label>
        <p>10 June, 1994</p>
      </div>

      <div className="profile-section">
        <label>Website</label>
        <p className="profile-link">www.marcusdias.com</p>
      </div>
    </div>
  );
};

export default ChatProfilePanel;
