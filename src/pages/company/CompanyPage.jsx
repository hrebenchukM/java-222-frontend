import React, { useState } from 'react';
import { CheckCircle, MapPin, Link as LinkIcon, Users, Briefcase, Building2, Share2, Plus, MoreHorizontal } from 'lucide-react';
import './CompanyPage.css';
import PostCard from '../../features/PostCard/PostCard';
import VacancyCard from '../../features/VacancyCard/VacancyCard';
import SimpleProfileCard from '../../features/SimpleProfileCard/SimpleProfileCard';
import MessagesPanel from '../../features/MessagesPanel/MessagesPanel';

const CompanyPage = ({ onNavigate, companyId }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const company = {
    id: 1,
    name: 'Google Design',
    category: 'Technology',
    followers: '2.4M',
    employees: '10,000+',
    location: 'Mountain View, CA',
    website: 'design.google',
    verified: true,
    cover: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1',
    logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    about: 'Google Design is a cooperative effort led by a group of designers, writers, and developers at Google. We work across teams to publish original content, produce events, and foster creative and educational partnerships that advance design and technology.',
    specialties: ['UX Design', 'Product Design', 'Design Systems', 'Research', 'Prototyping']
  };

  const posts = [
    {
      author: 'Google Design',
      title: 'Technology',
      timeAgo: '2d ago',
      content: 'Introducing Material Design 3: The next evolution of Material Design. Built on the foundations of Material Design, this latest iteration brings new features and refinements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      likes: 2840
    },
    {
      author: 'Google Design',
      title: 'Technology',
      timeAgo: '5d ago',
      content: 'How we design for billions: A look at the principles and practices that guide design at Google.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
      likes: 1920
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Google',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150k - $200k',
      posted: '2 days ago',
      logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: 2,
      title: 'UX Researcher',
      company: 'Google',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $180k',
      posted: '1 week ago',
      logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      title: 'Design Director',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'James Wilson',
      title: 'Senior Designer',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Emma Thompson',
      title: 'Product Designer',
      avatar: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Michael Chen',
      title: 'UX Researcher',
      avatar: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
     <main className="main-content">
        <div className="container">
          <div className="company-page">
            <div className="company-header">
              <div className="company-cover">
                <img src={company.cover} alt={company.name} />
              </div>
              <div className="company-header-content">
                <div className="company-header-main">
                  <img src={company.logo} alt={company.name} className="company-logo" />
                  <div className="company-info">
                    <div className="company-name-row">
                      <h1 className="company-name">{company.name}</h1>
                      {company.verified && <CheckCircle size={24} fill="#0ea5e9" color="white" />}
                    </div>
                    <p className="company-category">{company.category}</p>
                    <div className="company-stats">
                      <span>{company.followers} followers</span>
                      <span className="stat-separator">•</span>
                      <span>{company.employees} employees</span>
                    </div>
                  </div>
                </div>
                <div className="company-actions">
                  <button
                    className={`btn-primary ${isFollowing ? 'following' : ''}`}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? (
                      <>
                        <CheckCircle size={18} />
                        Following
                      </>
                    ) : (
                      <>
                        <Plus size={18} />
                        Follow
                      </>
                    )}
                  </button>
                  <button className="btn-secondary">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="btn-secondary">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="company-content-grid">
              <aside className="company-sidebar">
                <div className="company-about-card">
                  <h3>About</h3>
                  <p>{company.about}</p>

                  <div className="company-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{company.location}</span>
                    </div>
                    <div className="detail-item">
                      <LinkIcon size={16} />
                      <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                        {company.website}
                      </a>
                    </div>
                    <div className="detail-item">
                      <Building2 size={16} />
                      <span>{company.employees} employees</span>
                    </div>
                  </div>
                </div>

                <div className="company-specialties-card">
                  <h3>Specialties</h3>
                  <div className="specialties-tags">
                    {company.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="company-main-content">
                <div className="company-tabs">
                  <button
                    className={`company-tab ${activeTab === 'posts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('posts')}
                  >
                    Posts
                  </button>
                  <button
                    className={`company-tab ${activeTab === 'jobs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('jobs')}
                  >
                    Jobs
                  </button>
                  <button
                    className={`company-tab ${activeTab === 'team' ? 'active' : ''}`}
                    onClick={() => setActiveTab('team')}
                  >
                    Team
                  </button>
                  <button
                    className={`company-tab ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about')}
                  >
                    About
                  </button>
                </div>

                {activeTab === 'posts' && (
                  <div className="company-posts">
                    {posts.map((post, index) => (
                      <PostCard key={index} {...post} onNavigate={onNavigate} />
                    ))}
                  </div>
                )}

                {activeTab === 'jobs' && (
                  <div className="company-jobs">
                    {jobs.map((job) => (
                      <VacancyCard key={job.id} {...job} />
                    ))}
                  </div>
                )}

                {activeTab === 'team' && (
                  <div className="company-team">
                    <h2 className="team-count">{company.employees} employees</h2>
                    <div className="team-grid">
                      {team.map((member, index) => (
                        <div key={index} className="team-member">
                          <img src={member.avatar} alt={member.name} />
                          <h4>{member.name}</h4>
                          <p>{member.title}</p>
                          <button className="btn-secondary btn-connect">Connect</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="company-about-full">
                    <div className="about-section">
                      <h2>Overview</h2>
                      <p>{company.about}</p>
                    </div>

                    <div className="about-section">
                      <h2>Company Information</h2>
                      <div className="info-grid">
                        <div className="info-card">
                          <Users size={24} />
                          <div>
                            <span className="info-label">Employees</span>
                            <span className="info-value">{company.employees}</span>
                          </div>
                        </div>
                        <div className="info-card">
                          <MapPin size={24} />
                          <div>
                            <span className="info-label">Location</span>
                            <span className="info-value">{company.location}</span>
                          </div>
                        </div>
                        <div className="info-card">
                          <Briefcase size={24} />
                          <div>
                            <span className="info-label">Industry</span>
                            <span className="info-value">{company.category}</span>
                          </div>
                        </div>
                        <div className="info-card">
                          <LinkIcon size={24} />
                          <div>
                            <span className="info-label">Website</span>
                            <span className="info-value">{company.website}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="about-section">
                      <h2>Specialties</h2>
                      <div className="specialties-tags-large">
                        {company.specialties.map((specialty, index) => (
                          <span key={index} className="specialty-tag-large">{specialty}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <aside className="company-sidebar-right">
                <SimpleProfileCard />
                <MessagesPanel onNavigate={onNavigate} />
              </aside>
            </div>
          </div>
        </div>
      </main>
  );
};

export default CompanyPage;
