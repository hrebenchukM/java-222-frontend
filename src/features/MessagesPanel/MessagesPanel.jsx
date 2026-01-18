import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MoreHorizontal, Edit, SmilePlus, Mail } from 'lucide-react';
import '../MessagesPanel/MessagesPanel.css';
import messagesIllustration from '../../shared/assets/illustrations/messages.png';
import NewMessageModal from '../Modals/NewMessageModal';


const MessagesPanel = ({ onNavigate, onSelectChat }) => {
  const [activeTab, setActiveTab] = useState('sorted');
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const sortedMessages = [
    {
      id: '1',
      name: 'Marcus Dias',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thanks! Good luck.',
      time: '45 min',
      unread: false
    },
    {
      id: '2',
      name: 'Alena Curtis',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Alright, I\'ll call you back.',
      time: '2 min',
      unread: true
    },
    {
      id: '3',
      name: 'Abram Lipshutz',
      avatar: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Looking forward to your conf...',
      time: '3 h',
      unread: false
    }
  ];

  const otherMessages = [
    {
      id: '4',
      name: 'Hanna Bergson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thanks for the offer!',
      time: '3 h',
      unread: true
    }
  ];

  const currentMessages = activeTab === 'sorted' ? sortedMessages : otherMessages;
  const filteredMessages = currentMessages.filter(msg =>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="messages-panel">
        <div className="messages-header">
          <div className="messages-title-section">
            <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
            alt="Profile"
            className="messages-avatar"
            onClick={() => navigate('/app/portfolio/me')}
            style={{ cursor: 'pointer' }}
            />

            <h3>Messages</h3>
          </div>
          <div className="messages-actions">
            <button className="icon-btn" onClick={() => alert('More options')}>
              <MoreHorizontal size={18} />
            </button>
            <button className="icon-btn" onClick={() => setIsNewMessageModalOpen(true)}>
              <Edit size={18} />
            </button>
            <button className="icon-btn" onClick={() => alert('Reactions')}>
              <SmilePlus size={18} />
            </button>
          </div>
        </div>

        <div className="messages-search">
          <input
            type="text"
            placeholder="Search messages"
            className="messages-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="messages-tabs">
          <button
            className={`messages-tab ${activeTab === 'sorted' ? 'active' : ''}`}
            onClick={() => setActiveTab('sorted')}
          >
            Sorted
          </button>
          <button
            className={`messages-tab ${activeTab === 'other' ? 'active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            Other
          </button>
        </div>

        {filteredMessages.length > 0 ? (
          <div className="messages-list">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className="message-item"
                onClick={() => {
                    onSelectChat?.(message.id);
                    navigate(`/app/messages/${message.id}`);
                }}
                style={{ cursor: 'pointer' }}
              >
                <img src={message.avatar} alt={message.name} className="message-item-avatar" />
                <div className="message-item-content">
                  <div className="message-item-header">
                    <h4 className="message-item-name">{message.name}</h4>
                    <span className="message-item-time">{message.time}</span>
                  </div>
                  <p className="message-item-text">{message.lastMessage}</p>
                </div>
                {message.unread && <div className="message-unread-dot"></div>}
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="messages-empty">
            <h4>No messages found</h4>
            <p>Try a different search</p>
          </div>
        ) : (
          <div className="messages-empty">
            <div className="empty-icon">
               <img 
            src={messagesIllustration}
            alt="No messages"
            className="message-empty-img"
            />
            </div>
            <h4>No messages yet</h4>
            <p>Contact a member and start a discussion</p>
            <button className="send-message-btn" onClick={() => setIsNewMessageModalOpen(true)}>
              Send a message
            </button>
          </div>

          
        )}
      </div>
      <NewMessageModal
        isOpen={isNewMessageModalOpen}
        onClose={() => setIsNewMessageModalOpen(false)}
      />
    </>
  );
};

export default MessagesPanel;
