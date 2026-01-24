import React, { useState } from 'react';
import { Users, Bell, Settings, MoreHorizontal, Image, Video, FileText, Smile } from 'lucide-react';
import './GroupPage.css';
import PostCard from '../../features/PostCard/PostCard';
import SimpleProfileCard from '../../features/SimpleProfileCard/SimpleProfileCard';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';
import { useParams } from 'react-router-dom';

const GroupPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [postContent, setPostContent] = useState('');
  const { id: groupId } = useParams();
  const group = {
    id: 1,
    name: 'UI/UX Design Professionals',
    category: 'Design',
    members: '45,280',
    postsPerWeek: 12,
    cover: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1',
    avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    description: 'A community for UI/UX designers to share insights, discuss trends, and grow together.',
    rules: [
      'Be respectful and professional',
      'No spam or self-promotion',
      'Share quality content',
      'Help others learn and grow'
    ]
  };

const posts = [
  {
    user: {
      firstName: 'Sarah',
      secondName: 'Mitchell',
      avatarUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    },
    profileTitle: 'Senior Product Designer',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    content: 'Just finished redesigning our mobile app onboarding flow. Reduced drop-off by 40%! Happy to share some insights.',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    likesCount: 124
  }
];

  const members = [
    {
      name: 'Sarah Mitchell',
      title: 'Senior Product Designer',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'Admin'
    },
    {
      name: 'James Wilson',
      title: 'UX Lead',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'Moderator'
    },
    {
      name: 'Emma Thompson',
      title: 'Design Manager',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      role: 'Member'
    }
  ];

  return (
      <main className="main-content">
        <div className="container">
          <div className="group-page">
            <div className="group-header">
              <div className="group-cover">
                <img src={group.cover} alt={group.name} />
              </div>
              <div className="group-header-content">
                <div className="group-header-main">
                  <img src={group.avatar} alt={group.name} className="group-avatar" />
                  <div className="group-info">
                    <h1 className="group-name">{group.name}</h1>
                    <p className="group-category">{group.category}</p>
                    <div className="group-stats">
                      <span>{group.members} members</span>
                      <span className="stat-separator">•</span>
                      <span>{group.postsPerWeek} posts/week</span>
                    </div>
                  </div>
                </div>
                <div className="group-actions">
                  <button className="btn-primary">
                    <Bell size={18} />
                    Joined
                  </button>
                  <button className="btn-secondary">
                    <Settings size={18} />
                  </button>
                  <button className="btn-secondary">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="group-content-grid">
              <aside className="group-sidebar">
                <div className="group-about-card">
                  <h3>About this group</h3>
                  <p>{group.description}</p>
                </div>
                <div className="group-rules-card">
                  <h3>Group rules</h3>
                  <ul>
                    {group.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div className="group-main-content">
                <div className="group-tabs">
                  <button
                    className={`group-tab ${activeTab === 'posts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('posts')}
                  >
                    Posts
                  </button>
                  <button
                    className={`group-tab ${activeTab === 'members' ? 'active' : ''}`}
                    onClick={() => setActiveTab('members')}
                  >
                    Members
                  </button>
                  <button
                    className={`group-tab ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about')}
                  >
                    About
                  </button>
                </div>

                {activeTab === 'posts' && (
                  <div className="group-posts">
                    <div className="group-create-post">
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
                        alt="Your avatar"
                        className="post-avatar"
                      />
                      <div className="post-input-container">
                        <textarea
                          placeholder="Share something with the group..."
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                          className="post-textarea"
                        />
                        <div className="post-actions">
                          <div className="post-action-buttons">
                            <button className="post-action-btn">
                              <Image size={20} />
                              Photo
                            </button>
                            <button className="post-action-btn">
                              <Video size={20} />
                              Video
                            </button>
                            <button className="post-action-btn">
                              <FileText size={20} />
                              Document
                            </button>
                            <button className="post-action-btn">
                              <Smile size={20} />
                            </button>
                          </div>
                          <button className="btn-primary btn-post">Post</button>
                        </div>
                      </div>
                    </div>

                    <div className="group-posts-list">
                      {posts.map((post, index) => (
                     <PostCard key={index} post={post} onNavigate={onNavigate} />

                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'members' && (
                  <div className="group-members-list">
                    {members.map((member, index) => (
                      <div key={index} className="member-item">
                        <img src={member.avatar} alt={member.name} className="member-avatar" />
                        <div className="member-info">
                          <h4>{member.name}</h4>
                          <p>{member.title}</p>
                          <span className="member-role">{member.role}</span>
                        </div>
                        <button className="btn-secondary">Message</button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="group-about-content">
                    <div className="about-section">
                      <h3>Description</h3>
                      <p>{group.description}</p>
                    </div>
                    <div className="about-section">
                      <h3>Group Information</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">Category</span>
                          <span className="info-value">{group.category}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Members</span>
                          <span className="info-value">{group.members}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Activity</span>
                          <span className="info-value">{group.postsPerWeek} posts/week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <aside className="group-sidebar-right">
                <SimpleProfileCard />
                <MessagesPanel onNavigate={onNavigate} />
              </aside>
            </div>
          </div>
        </div>
      </main>

  );
};

export default GroupPage;
