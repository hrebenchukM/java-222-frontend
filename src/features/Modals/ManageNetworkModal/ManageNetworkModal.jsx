import React, { useState } from 'react';
import { Users, UserPlus, UsersRound, Calendar, FileText, X, CheckCircle, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './ManageNetworkModal.css';
import Modal from '../../../app/ui/Modal';

const ManageNetworkModal = ({ isOpen, onClose, initialTab, onNavigate }) => {
  const [activeSection, setActiveSection] = useState(initialTab || 'contacts');
const navigate = useNavigate();

  React.useEffect(() => {
    if (initialTab) {
      setActiveSection(initialTab);
    }
  }, [initialTab]);

  const sections = [
    { id: 'contacts', label: 'Contacts', icon: Users, count: 342 },
    { id: 'following', label: 'People you follow', icon: UserPlus, count: 156 },
    { id: 'groups', label: 'Groups', icon: UsersRound, count: 12 },
    { id: 'events', label: 'Events', icon: Calendar, count: 8 },
    { id: 'pages', label: 'Pages', icon: FileText, count: 24 }
  ];

  const contactsData = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'Senior Product Designer at Google',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      mutualConnections: 45
    },
    {
      id: 2,
      name: 'James Wilson',
      title: 'UX Lead at Meta',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      mutualConnections: 32
    },
    {
      id: 3,
      name: 'Emma Thompson',
      title: 'Design Manager at Apple',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      mutualConnections: 28
    },
    {
      id: 4,
      name: 'Michael Chen',
      title: 'Product Manager at Microsoft',
      avatar: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      mutualConnections: 21
    }
  ];

  const followingData = [
    {
      id: 1,
      name: 'David Martinez',
      title: 'Tech Lead at Amazon',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      followers: '15K',
      isFollowing: true
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      title: 'VP of Engineering at Tesla',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      followers: '28K',
      isFollowing: true
    },
    {
      id: 3,
      name: 'Robert Kim',
      title: 'CTO at Stripe',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      followers: '42K',
      isFollowing: true
    }
  ];

  const groupsData = [
    {
      id: 1,
      name: 'UI/UX Design Professionals',
      members: '45,280',
      avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Design',
      postsPerWeek: 12
    },
    {
      id: 2,
      name: 'Product Management Network',
      members: '32,150',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Product',
      postsPerWeek: 8
    },
    {
      id: 3,
      name: 'Tech Startups & Innovation',
      members: '67,420',
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Technology',
      postsPerWeek: 25
    }
  ];

  const eventsData = [
    {
      id: 1,
      name: 'Design Systems Conference 2026',
      date: 'Feb 15, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      attendees: 1250,
      type: 'In-person',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&dpr=1'
    },
    {
      id: 2,
      name: 'Product Leadership Summit',
      date: 'Mar 2, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Online',
      attendees: 3400,
      type: 'Virtual',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&dpr=1'
    },
    {
      id: 3,
      name: 'UX Research Workshop',
      date: 'Mar 18, 2026',
      time: '2:00 PM - 6:00 PM',
      location: 'New York, NY',
      attendees: 85,
      type: 'In-person',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&dpr=1'
    }
  ];

  const pagesData = [
    {
      id: 1,
      name: 'Google Design',
      followers: '2.4M',
      avatar: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Technology',
      verified: true
    },
    {
      id: 2,
      name: 'Apple',
      followers: '18.5M',
      avatar: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Technology',
      verified: true
    },
    {
      id: 3,
      name: 'Adobe Creative Cloud',
      followers: '5.8M',
      avatar: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Software',
      verified: true
    },
    {
      id: 4,
      name: 'Figma',
      followers: '1.2M',
      avatar: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      category: 'Design Tools',
      verified: true
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'contacts':
        return (
          <div className="network-content">
            {contactsData.map(contact => (
              <div key={contact.id} className="network-item">
                <img src={contact.avatar} alt={contact.name} className="network-item-avatar" />
                <div className="network-item-info">
                  <h4>{contact.name}</h4>
                  <p>{contact.title}</p>
                  <span className="mutual-connections">{contact.mutualConnections} mutual connections</span>
                </div>
                <button className="network-item-action">Message</button>
              </div>
            ))}
          </div>
        );
      case 'following':
        return (
          <div className="network-content">
            {followingData.map(person => (
              <div key={person.id} className="network-item">
                <img src={person.avatar} alt={person.name} className="network-item-avatar" />
                <div className="network-item-info">
                  <h4>{person.name}</h4>
                  <p>{person.title}</p>
                  <span className="mutual-connections">{person.followers} followers</span>
                </div>
                <button className="network-item-action network-item-action-secondary">Following</button>
              </div>
            ))}
          </div>
        );
      case 'groups':
        return (
          <div className="network-content">
            {groupsData.map(group => (
              <div key={group.id} className="network-item">
                <img src={group.avatar} alt={group.name} className="network-item-avatar" />
                <div className="network-item-info">
                  <h4>{group.name}</h4>
                  <p className="network-group-category">{group.category}</p>
                  <div className="network-group-stats">
                    <span>{group.members} members</span>
                    <span className="network-stat-separator">•</span>
                    <span>{group.postsPerWeek} posts/week</span>
                  </div>
                </div>
                <button
                  className="network-item-action"
                  onClick={() => {
                    onClose();
                    navigate(`/app/group/${group.id}`);
                  }}
                >
                  View Group
                </button>
              </div>
            ))}
          </div>
        );
      case 'events':
        return (
          <div className="network-content">
            {eventsData.map(event => (
              <div key={event.id} className="network-event-item">
                <img src={event.image} alt={event.name} className="network-event-image" />
                <div className="network-event-content">
                  <div className="network-event-header">
                    <h4>{event.name}</h4>
                    <span className={`network-event-type ${event.type === 'Virtual' ? 'virtual' : 'in-person'}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="network-event-details">
                    <div className="network-event-detail">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="network-event-detail">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="network-event-detail">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="network-event-footer">
                    <span className="network-event-attendees">{event.attendees.toLocaleString()} attendees</span>
                    <button
                      className="network-item-action"
                      onClick={() => {
                    onClose();
                    navigate(`/app/event/${event.id}`);
                      }}
                    >
                      View Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'pages':
        return (
          <div className="network-content">
            {pagesData.map(page => (
              <div key={page.id} className="network-item">
                <img src={page.avatar} alt={page.name} className="network-item-avatar" />
                <div className="network-item-info">
                  <div className="network-page-name">
                    <h4>{page.name}</h4>
                    {page.verified && <CheckCircle size={16} fill="#0ea5e9" color="white" />}
                  </div>
                  <p>{page.category}</p>
                  <span className="mutual-connections">{page.followers} followers</span>
                </div>
                <button
                  className="network-item-action"
                  onClick={() => {
                    onClose();
                      navigate(`/app/company/${page.id}`);
                  }}
                >
                  View Page
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage your network" className="manage-network-modal-content">
      <div className="manage-network-modal">
        <div className="network-sidebar">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                className={`network-section-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon size={20} />
                <span>{section.label}</span>
                <span className="network-count">{section.count}</span>
              </button>
            );
          })}
        </div>
        <div className="network-main">
          <div className="network-search">
            <input type="text" placeholder="Search..." />
          </div>
          {renderContent()}
        </div>
      </div>
    </Modal>
  );
};

export default ManageNetworkModal;
