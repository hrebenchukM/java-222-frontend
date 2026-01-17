import React from 'react';
import { ExternalLink, MoreHorizontal } from 'lucide-react';
import '../PortfolioHeader/PortfolioHeader.css';

const PortfolioHeader = () => {
  return (
    <div className="portfolio-header-card">
      <div className="portfolio-banner"></div>
      <div className="portfolio-profile-section">
        <div className="portfolio-top-row">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
            alt="Profile"
            className="portfolio-avatar"
          />
          <div className="portfolio-main-info">
            <div className="portfolio-info-row">
              <div className="portfolio-info">
                <h1 className="portfolio-name">David Janssen</h1>
                <p className="portfolio-title">Lead UI/UX Designer • CD Project Red</p>
                <p className="portfolio-location">Moscow, Russia</p>
                <div className="portfolio-links">
                  <a href="#" className="portfolio-link">www.webditeexample.com</a>
                  <ExternalLink size={14} />
                </div>
                <p className="portfolio-connections">500+ connections</p>
              </div>
              <div className="portfolio-contact-info">
                <p className="contact-item">Better Community (Adult-Orphan)</p>
                <p className="contact-item">Grovemade Authentic (UCLA)</p>
                <button className="more-icon-button">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-actions">
          <button className="btn-send">Send a Message</button>
          <button className="btn-more-action">More</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
