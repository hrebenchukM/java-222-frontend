import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Phone, Search, MoreVertical, Smile, Paperclip,Send } from 'lucide-react';
import '../ChatMain/ChatMain.css';

const ChatMain = ({ selectedUser, messages, showChat, onBackClick, onAvatarClick }) => {
  const [messageText, setMessageText] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { chatId } = useParams();
  const navigate = useNavigate();
   if (!chatId || !selectedUser) {
    return (
      <div className="chat-main chat-empty">
        <p>Select a conversation</p>
      </div>
    );
  }
  const handleCall = () => {
    alert(`Calling ${selectedUser?.name}...`);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  const filteredMessages = searchQuery
    ? messages.filter(msg => msg.text.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  const handleMoreOptions = () => {
    alert('More options menu...');
  };

  const handleEmojiPicker = () => {
    alert('Emoji picker would open here');
  };

  const handleAttachment = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`File selected: ${file.name}`);
      }
    };
    input.click();
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      alert(`Message sent: ${messageText}`);
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-main ${showChat ? 'show-chat' : ''}`}>
      <div className="chat-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="back-button"
            onClick={() => navigate('/app/messages')}
          >
            ←
          </button>
          <div className="chat-header-user">
            <img
              src={selectedUser?.avatar}
              alt={selectedUser?.name}
              onClick={() => navigate(`/app/profile/${selectedUser.username ?? 'me'}`)}
              style={{ cursor: 'pointer' }}
            />
            <div className="chat-header-info">
              <h2>{selectedUser?.name}</h2>
              {selectedUser?.activeNow && <span className="status-text">Active Now</span>}
            </div>
          </div>
        </div>
        <div className="chat-header-actions">
          <button className="icon-button" onClick={handleCall}>
            <Phone size={20} />
          </button>
          <button className="icon-button" onClick={handleSearch}>
            <Search size={20} />
          </button>
          <button className="icon-button" onClick={handleMoreOptions}>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="chat-search-bar">
          <input
            type="text"
            placeholder="Search in conversation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="chat-search-input"
            autoFocus
          />
          {searchQuery && (
            <span className="search-results-count">
              {filteredMessages.length} {filteredMessages.length === 1 ? 'result' : 'results'}
            </span>
          )}
        </div>
      )}

      <div className="chat-messages">
        {filteredMessages.map((message, index) => (
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
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="chat-input-actions">
          <button className="input-action-button" onClick={handleEmojiPicker}>
            <Smile size={20} />
          </button>
          <button className="input-action-button" onClick={handleAttachment}>
            <Paperclip size={20} />
          </button>
          {messageText.trim() && (
            <button className="input-action-button" onClick={handleSendMessage} style={{ color: '#7c3aed' }}>
              <Send size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
