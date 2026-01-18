import React, { useState,useEffect } from 'react';
import '../EventPanel/EventPanel.css';
import nonewNetworkImg from '../../shared/assets/illustrations/no-new-network-updates.png';
import EventCard from '../EventCard/EventCard';
import ManageNetworkModal from '../Modals/ManageNetworkModal/ManageNetworkModal';



const EventPanel = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isManageNetworkModalOpen, setIsManageNetworkModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const mockEvents = [
    {
      id: 1,
      user_name: 'Sarah Johnson',
      user_avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      type: 'career',
      title: 'Started new position',
      description: 'Sarah Johnson started a new position as Senior Product Manager at Tech Corp',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      user_name: 'Michael Chen',
      user_avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      type: 'career',
      title: 'Promoted to Team Lead',
      description: 'Michael Chen was promoted to Team Lead at Innovation Labs',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      user_name: 'Emma Davis',
      user_avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      type: 'birthday',
      title: 'Birthday today',
      description: 'Emma Davis is celebrating birthday today',
      date: new Date()
    },
    {
      id: 4,
      user_name: 'James Wilson',
      user_avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      type: 'birthday',
      title: 'Birthday tomorrow',
      description: 'James Wilson has birthday tomorrow',
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: 5,
      user_name: 'Sophia Martinez',
      user_avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      type: 'education',
      title: 'Graduated from University',
      description: 'Sophia Martinez graduated from Stanford University with a degree in Computer Science',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: 6,
      user_name: 'Oliver Brown',
      user_avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg',
      type: 'education',
      title: 'Started MBA program',
      description: 'Oliver Brown started MBA program at Harvard Business School',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: 7,
      user_name: 'Isabella Taylor',
      user_avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
      type: 'career',
      title: 'Changed company',
      description: 'Isabella Taylor joined Google as Software Engineer',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: 8,
      user_name: 'Lucas Anderson',
      user_avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      type: 'birthday',
      title: 'Birthday this week',
      description: 'Lucas Anderson has birthday in 3 days',
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }
  ];

  setEvents(mockEvents);
  setLoading(false);
}, []);

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.type === activeFilter);

  return (
    <>
    <div className="event-panel">
      <div className="event-filters">
        <button
          className={`event-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`event-filter-btn ${activeFilter === 'career' ? 'active' : ''}`}
          onClick={() => setActiveFilter('career')}
        >
          Career changes
        </button>
        <button
          className={`event-filter-btn ${activeFilter === 'birthday' ? 'active' : ''}`}
          onClick={() => setActiveFilter('birthday')}
        >
          Birthdays
        </button>
        <button
          className={`event-filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
          onClick={() => setActiveFilter('education')}
        >
          Education
        </button>
      </div>

      <div className="event-content">
        {loading ? (
          <div className="event-loading">Loading events...</div>
        ) : filteredEvents.length > 0 ? (
          <div className="event-list">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="event-empty">
            <div className="event-illustration">
                <img src={nonewNetworkImg} alt="No new network updates" className="event-empty-img"/>
            </div>

            <h3 className="event-empty-title">No recent updates</h3>
            <p className="event-empty-description">
              As your network of contacts expands, you will receive more updates.
            </p>

            <button className="expand-network-btn" onClick={() => setIsManageNetworkModalOpen(true)}>
              Expand network of contacts
            </button>
          </div>
        )}
      </div>
    </div>
    <ManageNetworkModal
      isOpen={isManageNetworkModalOpen}
      onClose={() => setIsManageNetworkModalOpen(false)}
    />
    </>
  );
};

export default EventPanel;
