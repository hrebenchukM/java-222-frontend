import React from 'react';
import { Search, Plus } from 'lucide-react';
import '../ChatSidebar/ChatSidebar.css';

const ChatSidebar = ({ activeTab, setActiveTab, chatUsers, selectedChat, onSelectChat, showChat }) => {
  return (
    <div className={`chat-sidebar ${showChat ? 'show-chat' : ''}`}>
      <div className="chat-sidebar-header">
        <div className="chat-tabs">
          <button
            className={`chat-tab ${activeTab === 'chats' ? 'active' : ''}`}
            onClick={() => setActiveTab('chats')}
          >
            Chats
            <Plus size={16} />
          </button>
          <button
            className={`chat-tab ${activeTab === 'archived' ? 'active' : ''}`}
            onClick={() => setActiveTab('archived')}
          >
            Archived
          </button>
        </div>
        <div className="chat-search">
          <Search size={18} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="chat-list">
        {chatUsers.map(user => (
          <button
            key={user.id}
            className={`chat-item ${selectedChat === user.id ? 'active' : ''}`}
            onClick={() => onSelectChat(user.id)}
          >
            <div className="chat-item-avatar">
              <img src={user.avatar} alt={user.name} />
              {user.activeNow && <span className="active-indicator"></span>}
            </div>
            <div className="chat-item-content">
              <div className="chat-item-header">
                <span className="chat-item-name">{user.name}</span>
                <span className="chat-item-time">{user.time}</span>
              </div>
              <div className="chat-item-message">
                <span className={user.unread ? 'unread' : ''}>{user.lastMessage}</span>
                {user.unread && <span className="unread-badge"></span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
