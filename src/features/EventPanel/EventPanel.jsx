import React, { useState } from 'react';
import '../EventPanel/EventPanel.css';

const EventPanel = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
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
          className={`event-filter-btn ${activeFilter === 'birthdays' ? 'active' : ''}`}
          onClick={() => setActiveFilter('birthdays')}
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
        <div className="event-empty">
          <div className="event-illustration">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(50, 20)">
                <rect x="5" y="10" width="90" height="130" rx="4" fill="#E8E4F3" opacity="0.4"/>
                <rect x="10" y="5" width="90" height="130" rx="4" fill="#DDD6F3" opacity="0.6"/>
                <rect x="15" y="0" width="90" height="130" rx="4" fill="white" stroke="#7C3AED" strokeWidth="2"/>

                <rect x="20" y="5" width="80" height="8" rx="2" fill="#A78BFA" opacity="0.3"/>
                <rect x="20" y="18" width="50" height="5" rx="2" fill="#A78BFA" opacity="0.3"/>

                <g transform="translate(20, 35)">
                  <rect width="55" height="12" rx="2" fill="#E8E4F3"/>
                  <path d="M 4 6 L 7 9 L 12 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="18" y="3" width="32" height="2" rx="1" fill="#A78BFA" opacity="0.4"/>
                  <rect x="18" y="7" width="25" height="2" rx="1" fill="#A78BFA" opacity="0.3"/>
                </g>

                <g transform="translate(20, 53)">
                  <rect width="55" height="12" rx="2" fill="#E8E4F3"/>
                  <path d="M 4 6 L 7 9 L 12 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="18" y="3" width="32" height="2" rx="1" fill="#A78BFA" opacity="0.4"/>
                  <rect x="18" y="7" width="25" height="2" rx="1" fill="#A78BFA" opacity="0.3"/>
                </g>

                <g transform="translate(20, 71)">
                  <rect width="55" height="12" rx="2" fill="#F3F4F6"/>
                  <rect x="4" y="4" width="8" height="8" rx="1" stroke="#9CA3AF" strokeWidth="1.5" fill="white"/>
                  <rect x="18" y="3" width="32" height="2" rx="1" fill="#9CA3AF" opacity="0.3"/>
                  <rect x="18" y="7" width="20" height="2" rx="1" fill="#9CA3AF" opacity="0.2"/>
                </g>

                <g transform="translate(20, 89)">
                  <rect width="55" height="12" rx="2" fill="#F3F4F6"/>
                  <rect x="4" y="4" width="8" height="8" rx="1" stroke="#9CA3AF" strokeWidth="1.5" fill="white"/>
                  <rect x="18" y="3" width="32" height="2" rx="1" fill="#9CA3AF" opacity="0.3"/>
                  <rect x="18" y="7" width="25" height="2" rx="1" fill="#9CA3AF" opacity="0.2"/>
                </g>
              </g>
            </svg>
          </div>

          <h3 className="event-empty-title">No recent updates</h3>
          <p className="event-empty-description">
            As your network of contacts expands, you will receive more updates.
          </p>

          <button className="expand-network-btn">Expand network of contacts</button>
        </div>
      </div>
    </div>
  );
};

export default EventPanel;
