import React, { useState } from 'react';
import '../EventPanel/EventPanel.css';
import nonewNetworkImg from '../../shared/assets/illustrations/no-new-network-updates.png';
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
            <img width="160" height="200"
             src={nonewNetworkImg}
            />
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
