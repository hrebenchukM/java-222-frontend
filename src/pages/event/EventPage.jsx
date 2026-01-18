import React, { useState } from 'react';

import { Calendar, Clock, MapPin, Users, Share2, Bookmark, MoreHorizontal, CheckCircle } from 'lucide-react';
import './EventPage.css';
import SimpleProfileCard from '../../features/SimpleProfileCard/SimpleProfileCard';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';

const EventPage = ({ onNavigate, eventId }) => {
  const [isAttending, setIsAttending] = useState(false);

  const event = {
    id: 1,
    name: 'Design Systems Conference 2026',
    date: 'Feb 15, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Moscone Center, San Francisco, CA',
    type: 'In-person',
    attendees: 1250,
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&dpr=1',
    organizer: {
      name: 'Design Conference Inc.',
      avatar: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      verified: true
    },
    description: 'Join us for a full day of inspiring talks, workshops, and networking opportunities with leading designers from around the world. Learn about the latest trends in design systems, component libraries, and design ops.',
    schedule: [
      { time: '9:00 AM', title: 'Registration & Welcome Coffee', speaker: '' },
      { time: '10:00 AM', title: 'The Future of Design Systems', speaker: 'Sarah Mitchell' },
      { time: '11:00 AM', title: 'Building Accessible Components', speaker: 'James Wilson' },
      { time: '12:00 PM', title: 'Lunch Break', speaker: '' },
      { time: '1:00 PM', title: 'Design Tokens at Scale', speaker: 'Emma Thompson' },
      { time: '2:00 PM', title: 'Workshop: Component Architecture', speaker: 'Michael Chen' },
      { time: '4:00 PM', title: 'Panel Discussion & Q&A', speaker: 'All Speakers' }
    ],
    speakers: [
      {
        name: 'Sarah Mitchell',
        title: 'Design Director at Google',
        avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      {
        name: 'James Wilson',
        title: 'Principal Designer at Meta',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      {
        name: 'Emma Thompson',
        title: 'Design Lead at Apple',
        avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      {
        name: 'Michael Chen',
        title: 'Senior Designer at Microsoft',
        avatar: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      }
    ]
  };

  return (
     <main className="main-content">
        <div className="container">
          <div className="event-page">
            <div className="event-content-grid">
              <div className="event-main">
                <div className="event-header-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.name} />
                    <span className={`event-type-badge ${event.type === 'Virtual' ? 'virtual' : 'in-person'}`}>
                      {event.type}
                    </span>
                  </div>

                  <div className="event-header-content">
                    <h1 className="event-title">{event.name}</h1>

                    <div className="event-organizer">
                      <img src={event.organizer.avatar} alt={event.organizer.name} />
                      <div>
                        <div className="organizer-name">
                          <span>{event.organizer.name}</span>
                          {event.organizer.verified && (
                            <CheckCircle size={16} fill="#0ea5e9" color="white" />
                          )}
                        </div>
                        <span className="organizer-label">Organizer</span>
                      </div>
                    </div>

                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={20} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <Clock size={20} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={20} />
                        <span>{event.location}</span>
                      </div>
                      <div className="event-detail">
                        <Users size={20} />
                        <span>{event.attendees.toLocaleString()} attendees</span>
                      </div>
                    </div>

                    <div className="event-actions">
                      <button
                        className={`btn-primary ${isAttending ? 'attending' : ''}`}
                        onClick={() => setIsAttending(!isAttending)}
                      >
                        {isAttending ? (
                          <>
                            <CheckCircle size={18} />
                            Attending
                          </>
                        ) : (
                          'Register'
                        )}
                      </button>
                      <button className="btn-secondary">
                        <Share2 size={18} />
                        Share
                      </button>
                      <button className="btn-secondary">
                        <Bookmark size={18} />
                      </button>
                      <button className="btn-secondary">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="event-section-card">
                  <h2>About this event</h2>
                  <p>{event.description}</p>
                </div>

                <div className="event-section-card">
                  <h2>Schedule</h2>
                  <div className="event-schedule">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="schedule-item">
                        <div className="schedule-time">{item.time}</div>
                        <div className="schedule-content">
                          <h4>{item.title}</h4>
                          {item.speaker && <p>{item.speaker}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="event-section-card">
                  <h2>Speakers</h2>
                  <div className="speakers-grid">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="speaker-card">
                        <img src={speaker.avatar} alt={speaker.name} />
                        <h4>{speaker.name}</h4>
                        <p>{speaker.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="event-sidebar">
                <SimpleProfileCard />
                <MessagesPanel onNavigate={onNavigate} />
              </aside>
            </div>
          </div>
        </div>
      </main>
  );
};

export default EventPage;
