import React from 'react';
import { MoreHorizontal, Edit, SmilePlus, Mail } from 'lucide-react';
import '../MessagesPanel/MessagesPanel.css';
import messagesIllustration from '../../shared/assets/illustrations/messages.png';

const MessagesPanel = ({ onNavigate }) => {
  return (
    <div className="messages-panel">
      <div className="messages-header">
        <div className="messages-title-section">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
            alt="Profile"
            className="messages-avatar"
            onClick={() => onNavigate?.('portfolio')}
            style={{ cursor: 'pointer' }}
          />
          <h3>Messages</h3>
        </div>
        <div className="messages-actions">
          <button className="icon-btn">
            <MoreHorizontal size={18} />
          </button>
          <button className="icon-btn">
            <Edit size={18} />
          </button>
          <button className="icon-btn">
            <SmilePlus size={18} />
          </button>
        </div>
      </div>

      <div className="messages-search">
        <input
          type="text"
          placeholder="Search messages"
          className="messages-search-input"
        />
      </div>

      <div className="messages-tabs">
        <button className="messages-tab active">Sorted</button>
        <button className="messages-tab">Other</button>
      </div>

      <div className="messages-empty">
        <div className="empty-icon">
           <img 
            src={messagesIllustration}
            alt="No messages"
            className="message-empty-img"
            />
          {/* <Mail size={80} color="#D0D0FF" /> */}
        </div>
        <h4>No messages yet</h4>
        <p>Contact a member and start a discussion</p>
        <button className="send-message-btn">Send a message</button>
      </div>
    </div>
  );
};

export default MessagesPanel;
