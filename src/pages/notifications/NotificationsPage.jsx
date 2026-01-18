import React, { useState } from 'react';
import nonewNotificationsImg from '../../shared/assets/illustrations/no-new-notifications.png';

import './NotificationsPage.css';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';
import SimpleProfileCard from '../../features/SimpleProfileCard/SimpleProfileCard';

const NotificationsPage = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <aside className="sidebar-left">
              <SimpleProfileCard />
            </aside>

            <section className="notifications-feed">
              <div className="notifications-filters">
                <button
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'vacancies' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('vacancies')}
                >
                  Vacancies
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'publications' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('publications')}
                >
                  My publications
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'mentions' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('mentions')}
                >
                  Mentions
                </button>
              </div>

              <div className="notifications-empty">
                <div className="empty-illustration">
                       <img width="220" height="180"
                        src={nonewNotificationsImg}
                        />
                </div>

                <h2 className="empty-title">No new notifications</h2>
                <p className="empty-subtitle">Check out the other updates on the home page</p>

                <button
                  className="home-page-btn"
                  onClick={() => onNavigate('home')}
                >
                  Home page
                </button>
              </div>
            </section>

            <aside className="sidebar-right">
              <MessagesPanel onNavigate={onNavigate} />
            </aside>
          </div>
        </div>
      </main>
  );
};

export default NotificationsPage;
