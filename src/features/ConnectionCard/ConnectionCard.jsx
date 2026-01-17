import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ConnectionCard/ConnectionCard.css';

const ConnectionCard = ({ name, title, username, avatar }) => {
  const navigate = useNavigate();

  return (
    <div className="connection-card">
      <img
        src={avatar}
        alt={name}
        className="connection-avatar"
        onClick={() => navigate(`/app/portfolio/${username}`)}
        style={{ cursor: 'pointer' }}
      />

      <h3
        className="connection-name"
        onClick={() => navigate(`/app/portfolio/${username}`)}
        style={{ cursor: 'pointer' }}
      >
        {name}
      </h3>

      <p className="connection-title">{title}</p>
      <p className="connection-username">@{username}</p>

      <button
        className="make-contact-btn"
        onClick={() => navigate('/app/messages')}
      >
        Make contact
      </button>
    </div>
  );
};

export default ConnectionCard;
