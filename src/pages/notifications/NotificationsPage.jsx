import React, { useState } from 'react';
import nonewNotificationsImg from '../../shared/assets/illustrations/no-new-notifications.png';

import './NotificationsPage.css';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';
import SimpleProfileCard from '../../features/SimpleProfileCard/SimpleProfileCard';

const NotificationsPage = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allNotifications = [
    {
      id: 1,
      type: 'like',
      user: {
        name: 'Sarah Mitchell',
        avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        title: 'Senior Product Designer'
      },
      action: 'liked your post',
      content: '"The dumbest mistake is viewing design as something you do..."',
      time: '2h ago',
      unread: true
    },
    {
      id: 2,
      type: 'comment',
      user: {
        name: 'James Wilson',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        title: 'UX Lead'
      },
      action: 'commented on your post',
      content: 'Great insights! I completely agree with this perspective.',
      time: '5h ago',
      unread: true
    },
    {
      id: 3,
      type: 'connection',
      user: {
        name: 'Emma Thompson',
        avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        title: 'Design Manager'
      },
      action: 'accepted your connection request',
      time: '1d ago',
      unread: false
    },
    {
      id: 4,
      type: 'mention',
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        title: 'Product Manager'
      },
      action: 'mentioned you in a comment',
      content: '@you check out this interesting perspective on design thinking',
      time: '2d ago',
      unread: false
    }
  ];

  const vacancyNotifications = [
    {
      id: 5,
      type: 'job',
      company: {
        name: 'Google',
        logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      action: 'posted a new job that matches your profile',
      position: 'Senior UI/UX Designer',
      location: 'San Francisco, CA',
      time: '3h ago',
      unread: true
    },
    {
      id: 6,
      type: 'job',
      company: {
        name: 'Apple',
        logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      action: 'Application status updated',
      position: 'Product Designer',
      status: 'Under Review',
      time: '1d ago',
      unread: false
    }
  ];

  const publicationNotifications = [
    {
      id: 7,
      type: 'like',
      count: 24,
      action: 'people liked your post',
      content: '"The dumbest mistake is viewing design as something you do..."',
      time: '4h ago',
      unread: true
    },
    {
      id: 8,
      type: 'share',
      user: {
        name: 'David Martinez',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      action: 'shared your post',
      time: '1d ago',
      unread: false
    }
  ];

  const mentionNotifications = [
    {
      id: 9,
      type: 'mention',
      user: {
        name: 'Lisa Anderson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        title: 'VP of Engineering'
      },
      action: 'mentioned you in a post',
      content: 'Working with @you on this amazing project has been incredible!',
      time: '6h ago',
      unread: true
    }
  ];

  const getNotifications = () => {
    switch (activeFilter) {
      case 'vacancies':
        return vacancyNotifications;
      case 'publications':
        return publicationNotifications;
      case 'mentions':
        return mentionNotifications;
      default:
        return allNotifications;
    }
  };

  const notifications = getNotifications();

  const renderNotification = (notification) => {
    if (notification.type === 'job') {
      return (
        <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
          <img src={notification.company.logo} alt={notification.company.name} className="notification-avatar" />
          <div className="notification-content">
            <p className="notification-text">
              <strong>{notification.company.name}</strong> {notification.action}
            </p>
            {notification.position && (
              <p className="notification-position">{notification.position}</p>
            )}
            {notification.location && (
              <p className="notification-location">{notification.location}</p>
            )}
            {notification.status && (
              <span className="notification-status">{notification.status}</span>
            )}
            <span className="notification-time">{notification.time}</span>
          </div>
          {notification.unread && <div className="notification-dot"></div>}
        </div>
      );
    }

    if (notification.type === 'like' && notification.count) {
      return (
        <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
          <div className="notification-icon likes">
            <span>{notification.count}</span>
          </div>
          <div className="notification-content">
            <p className="notification-text">
              <strong>{notification.count} {notification.action}</strong>
            </p>
            {notification.content && (
              <p className="notification-excerpt">{notification.content}</p>
            )}
            <span className="notification-time">{notification.time}</span>
          </div>
          {notification.unread && <div className="notification-dot"></div>}
        </div>
      );
    }

    return (
      <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
        <img src={notification.user.avatar} alt={notification.user.name} className="notification-avatar" />
        <div className="notification-content">
          <p className="notification-text">
            <strong>{notification.user.name}</strong> {notification.action}
          </p>
          {notification.user.title && (
            <p className="notification-subtitle">{notification.user.title}</p>
          )}
          {notification.content && (
            <p className="notification-excerpt">{notification.content}</p>
          )}
          <span className="notification-time">{notification.time}</span>
        </div>
        {notification.unread && <div className="notification-dot"></div>}
      </div>
    );
  };

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

              {notifications.length > 0 ? (
                <div className="notifications-list">
                  {notifications.map(renderNotification)}
                </div>
              ) : (
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
              )}
            </section>

            <aside className="sidebar-right">
              <MessagesPanel onNavigate={onNavigate} onSelectChat={() => {}} />
            </aside>
          </div>
        </div>
      </main>
  );
};

export default NotificationsPage;
