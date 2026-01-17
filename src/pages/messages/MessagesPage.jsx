import React, { useState } from 'react';

import './MessagesPage.css';
import ChatSidebar from '../../features/ChatSidebar/ChatSidebar';
import ChatMain from '../../features/ChatMain/ChatMain';
import ChatProfilePanel from '../../features/ChatProfilePanel/ChatProfilePanel';

const MessagesPage = ({ onNavigate }) => {
  const [selectedChat, setSelectedChat] = useState('1');
  const [activeTab, setActiveTab] = useState('chats');
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const chatUsers = [
    {
      id: '1',
      name: 'Marcus Dias',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thanks! Good luck.',
      time: '45 min',
      activeNow: true
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
      time: '3 h'
    },
    {
      id: '4',
      name: 'Hanna Bergson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thanks for the offer!',
      time: '3 h',
      unread: true
    },
    {
      id: '5',
      name: 'Carla Herwitz',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thank you for your feed...',
      time: '20 h'
    },
    {
      id: '6',
      name: 'Skylar Carder',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Let me know if there\'s a...',
      time: '1 d'
    },
    {
      id: '7',
      name: 'Leo George',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Looking forward to discussin...',
      time: '6 d'
    },
    {
      id: '8',
      name: 'Miracle Lipshutz',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'Thanks for the meeting, we\'ll...',
      time: '1 w',
      unread: true
    },
    {
      id: '9',
      name: 'Ahmad Vaccaro',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      lastMessage: 'I\'ll wait for your go-ahead bef...',
      time: '1 y'
    }
  ];

  const messages = [
    {
      id: '1',
      text: 'Hello there!',
      sender: 'other',
      time: '2 hours ago'
    },
    {
      id: '2',
      text: 'I just finished a draft of the homepage. Take a look and let me know what you think about the idea of a bold headline with a textured fabric background.',
      sender: 'other',
      time: '2 hours ago'
    },
    {
      id: '3',
      text: 'Hey! It\'s an interesting concept, but the background feels a bit distracting from the head line. Maybe we could tone down the texture or blur it slightly?',
      sender: 'me',
      time: '15 minutes ago'
    },
    {
      id: '4',
      text: 'Great idea I\'ll try lowering the contrast and see how it looks. I\'ll also double-check how the font works with the change.',
      sender: 'other',
      time: '5 minutes ago'
    },
    {
      id: '5',
      text: 'Sounds good! Let me know if you need help with button colors they\'re blending in a bit too much with the other elements right now.',
      sender: 'me',
      time: '1 minute ago'
    }
  ];

  const selectedUser = chatUsers.find(user => user.id === selectedChat);

  const handleSelectChat = (chatId) => {
    setSelectedChat(chatId);
    setShowChat(true);
  };

  const handleBackClick = () => {
    setShowChat(false);
    setShowProfile(false);
  };

  const handleAvatarClick = () => {
    setShowProfile(!showProfile);
  };

  return (
     <div className={`messages-page ${showProfile ? 'profile-open' : ''}`}>
        <ChatSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          chatUsers={chatUsers}
          selectedChat={selectedChat}
          onSelectChat={handleSelectChat}
          showChat={showChat}
        />
        <ChatMain
          selectedUser={selectedUser}
          messages={messages}
          showChat={showChat}
          onBackClick={handleBackClick}
          onAvatarClick={handleAvatarClick}
        />
        <ChatProfilePanel
          selectedUser={selectedUser}
          showProfile={showProfile}
          onBackClick={() => setShowProfile(false)}
        />
      </div>
  );
};

export default MessagesPage;
