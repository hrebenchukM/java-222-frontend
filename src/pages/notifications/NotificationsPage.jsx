import React, { useState } from 'react';


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
                  <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="30" width="160" height="120" rx="8" fill="#F5F5FF" />
                    <rect x="35" y="35" width="150" height="110" rx="6" fill="white" />

                    <g opacity="0.4">
                      <rect x="50" y="60" width="50" height="50" rx="8" fill="#E8E4FF" />
                      <path d="M75 70L65 85L70 90" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="75" cy="77" r="3" fill="#7C3AED" />
                      <path d="M75 95L75 100" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
                    </g>

                    <g>
                      <rect x="120" y="50" width="60" height="60" rx="8" fill="#E8E4FF" />
                      <path d="M150 65L135 85L142 92" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="150" cy="75" r="4" fill="#7C3AED" />
                      <path d="M150 98L150 105" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" />
                    </g>

                    <circle cx="30" cy="30" r="3" fill="#E8E4FF" />
                    <circle cx="195" cy="140" r="4" fill="#E8E4FF" />
                    <circle cx="25" cy="145" r="3" fill="#E8E4FF" />
                  </svg>
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
