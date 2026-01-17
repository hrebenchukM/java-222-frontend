import React, { useState } from 'react';


import './NetworkPage.css';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';
import NetworkSidebar from '../../features/NetworkSideBar/NetworkSidebar';
import ConnectionCard from '../../features/ConnectionCard/ConnectionCard';
import EventPanel from '../../features/EventPanel/EventPanel';

const NetworkPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('new');

  const connections = [
    {
      name: 'David Jonson',
      title: 'Lead UI/UX Designer',
      username: '@JonsonCPDR',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    {
      name: 'Duncan Callahan',
      title: 'Lead UI/UX Designer',
      username: '@Callahandesign',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    {
      name: 'Joshua Cortez',
      title: 'UI/UX Designer',
      username: '@JoshuaCortezUIUX',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    {
      name: "Jennifer O'Brian",
      title: 'UI/UX Designer',
      username: '@JenniferOBrian87',
      avatar: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    {
      name: 'Emma Knight',
      title: 'Senior UI/UX Designer',
      username: '@reallemmaknight',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    {
      name: 'Michael Kennedy',
      title: 'Junior UI/UX Designer',
      username: '@kennedyux',
      avatar: 'https://images.pexels.com/photos/3785073/pexels-photo-3785073.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    }
  ];

  return (
   
      <main className="main-content">
        <div className="container">
          <div className="network-grid">
            <aside className="sidebar-left">
              <NetworkSidebar />
            </aside>

            <section className="network-main">
              <div className="network-tabs">
                <button
                  className={`network-tab ${activeTab === 'new' ? 'active' : ''}`}
                  onClick={() => setActiveTab('new')}
                >
                  New Connections
                </button>
                <button
                  className={`network-tab ${activeTab === 'event' ? 'active' : ''}`}
                  onClick={() => setActiveTab('event')}
                >
                  Event
                </button>
              </div>

              {activeTab === 'new' ? (
                <div className="network-content">
                  <h2 className="network-section-title">
                    PEOPLE IN THE "UI/UX DESIGN" YOU MAY KNOW
                  </h2>
                  <div className="connections-grid">
                    {connections.map((connection, index) => (
                      <ConnectionCard key={index} {...connection} onNavigate={onNavigate} />
                    ))}
                  </div>
                </div>
              ) : (
                <EventPanel />
              )}
            </section>

            <aside className="sidebar-right">
              <MessagesPanel onNavigate={onNavigate} />
            </aside>
          </div>
        </div>
      </main>
  );
};

export default NetworkPage;
