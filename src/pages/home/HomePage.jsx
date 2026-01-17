import React from 'react';
import './HomePage.css';
import ProfileCard from '../../features/ProfileCard/ProfileCard';
import CreatePost from '../../features/CreatePost/CreatePost';
import PostCard from '../../features/PostCard/PostCard';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';

const HomePage = ({ onNavigate }) => {
  const posts = [
    {
      author: 'Christian Nolan',
      title: 'Junior UI/UX Designer • Microsoft',
      timeAgo: '2h ago',
      content: '"The dumbest mistake is viewing design as something you do at the end of the process to \'tidy up\' the mess, as opposed to understanding it\'s a \'day one\' issue and part of everything." - Tom Petersen',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      likes: 48
    },
    {
      author: 'Jonathan Matthews',
      title: 'UI/UX Designer • RyanAir',
      timeAgo: '3h ago',
      content: 'Users will tell you what they think they want. Users will tell you what they think you want to hear. Users will tell you what they think sounds good. Users will not tell you what you need to know. You have to watch them to discover that. - Adam Judge',
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      likes: 48
    }
  ];

  return (
    
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <aside className="sidebar-left">
              <ProfileCard />
            </aside>

            <section className="main-feed">
              <CreatePost />
              {posts.map((post, index) => (
                <PostCard key={index} {...post} onNavigate={onNavigate} />
              ))}
            </section>

            <aside className="sidebar-right">
              <MessagesPanel onNavigate={onNavigate} />
            </aside>
          </div>
        </div>
      </main>
  );
};

export default HomePage;
