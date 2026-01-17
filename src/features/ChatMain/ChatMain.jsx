import React from 'react';
import { Phone, Search, MoreVertical, Smile, Paperclip } from 'lucide-react';
import '../ChatMain/ChatMain.css';

const ChatMain = ({ selectedUser, messages, showChat, onBackClick, onAvatarClick }) => {
  return (
    <div className={`chat-main ${showChat ? 'show-chat' : ''}`}>
      <div className="chat-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="back-button"
            onClick={onBackClick}
          >
            ←
          </button>
          <div className="chat-header-user">
            <img
              src={selectedUser?.avatar}
              alt={selectedUser?.name}
              onClick={onAvatarClick}
              style={{ cursor: 'pointer' }}
            />
            <div className="chat-header-info">
              <h2>{selectedUser?.name}</h2>
              {selectedUser?.activeNow && <span className="status-text">Active Now</span>}
            </div>
          </div>
        </div>
        <div className="chat-header-actions">
          <button className="icon-button">
            <Phone size={20} />
          </button>
          <button className="icon-button">
            <Search size={20} />
          </button>
          <button className="icon-button">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={message.id}>
            {index === 2 && (
              <div className="new-messages-divider">
                <span>New Messages</span>
              </div>
            )}
            <div className={`message ${message.sender}`}>
              {message.sender === 'other' && (
                <img src={selectedUser?.avatar} alt={selectedUser?.name} className="message-avatar" />
              )}
              <div className="message-content">
                <div className="message-bubble">
                  {message.text}
                </div>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-wrapper">
        <input
          type="text"
          placeholder="Write something..."
          className="chat-input"
        />
        <div className="chat-input-actions">
          <button className="input-action-button">
            <Smile size={20} />
          </button>
          <button className="input-action-button">
            <Paperclip size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
