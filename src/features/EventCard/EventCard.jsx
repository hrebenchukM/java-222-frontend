import React from 'react';
import { Calendar, Briefcase, GraduationCap, Cake } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const getIcon = () => {
    switch (event.type) {
      case 'career':
        return <Briefcase size={20} />;
      case 'birthday':
        return <Cake size={20} />;
      case 'education':
        return <GraduationCap size={20} />;
      default:
        return <Calendar size={20} />;
    }
  };

  const getTypeLabel = () => {
    switch (event.type) {
      case 'career':
        return 'Career Update';
      case 'birthday':
        return 'Birthday';
      case 'education':
        return 'Education';
      default:
        return 'Event';
    }
  };

  const formatDate = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays === -1) return 'Yesterday';
    if (diffDays < -1 && diffDays >= -7) return `${Math.abs(diffDays)} days ago`;

    return eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="event-card">
      <img
        src={event.user_avatar}
        alt={event.user_name}
        className="event-card-avatar"
      />
      <div className="event-card-content">
        <div className="event-card-header">
          <div>
            <h4 className="event-card-name">{event.user_name}</h4>
            <p className="event-card-title">{event.title}</p>
          </div>
          <div className={`event-card-badge event-card-badge-${event.type}`}>
            {getIcon()}
            <span>{getTypeLabel()}</span>
          </div>
        </div>
        {event.description && (
          <p className="event-card-description">{event.description}</p>
        )}
        <div className="event-card-footer">
          <Calendar size={14} />
          <span>{formatDate(event.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
